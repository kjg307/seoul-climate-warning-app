import Anthropic from "@anthropic-ai/sdk";
import { decades } from "@/lib/climateProjections";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: Request) {
  const { year } = await req.json();
  const d = decades.find((x) => x.year === year);
  if (!d) return Response.json({ error: "잘못된 연도" }, { status: 400 });

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(ctrl) {
      try {
        const s = await client.messages.stream({
          model: "claude-opus-4-7",
          max_tokens: 1000,
          thinking: { type: "adaptive" },
          output_config: { effort: "high" },
          system:
            "당신은 기후과학자이자 교육 전문가입니다. " +
            "초중고 학생이 이해하기 쉬운 언어로 미래 서울을 묘사합니다. " +
            "공포를 주지 않고, 행동의 중요성을 함께 전달합니다. " +
            "반드시 한국어로 작성합니다.",
          messages: [{
            role: "user",
            content:
              `지금은 ${d.year}년입니다. ` +
              `기온이 1990년 대비 ${d.tempRise}도 올랐고, ` +
              `폭염 일수 ${d.heatDays}일, 열대야 ${d.tropicalNights}일, ` +
              `해수면 ${d.seaLevel}cm 상승한 서울의 모습을 알려주세요.\n\n` +
              `아래 3가지로 나눠서 써주세요:\n` +
              `**${d.year}년 서울의 하루** - 중학생 시점으로 아침부터 저녁까지 (3~4문장)\n\n` +
              `**달라진 서울 풍경** - 지금과 다른 점 3가지\n\n` +
              `**우리가 할 수 있는 일** - 현실적인 행동 3가지`
          }]
        });

        for await (const ev of s) {
          if (ev.type === "content_block_delta" && ev.delta.type === "text_delta") {
            ctrl.enqueue(encoder.encode(`data: ${JSON.stringify({ text: ev.delta.text })}\n\n`));
          }
        }
        ctrl.enqueue(encoder.encode("data: [DONE]\n\n"));
        ctrl.close();
      } catch (e) {
        const msg = e instanceof Error ? e.message : "오류";
        ctrl.enqueue(encoder.encode(`data: ${JSON.stringify({ error: msg })}\n\n`));
        ctrl.close();
      }
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive"
    }
  });
}
