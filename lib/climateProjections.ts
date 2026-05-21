export interface Decade {
  year: number;
  tempRise: number;
  heatDays: number;
  tropicalNights: number;
  seaLevel: number;
  level: "주의" | "경고" | "심각" | "위기";
  color: "blue" | "yellow" | "orange" | "red";
  summary: string;
  globalPhenomena: string[];
  seoulChanges: string[];
}

export const decades: Decade[] = [
  {
    year: 2030,
    tempRise: 1.5, heatDays: 26, tropicalNights: 38, seaLevel: 10,
    level: "주의", color: "blue",
    summary: "파리협정 한계선 도달 — 변화가 시작됩니다",
    globalPhenomena: [
      "전 세계적인 대형 산불(호주, 캘리포니아 등)의 정례화",
      "북극해 빙하 감소 가속화"
    ],
    seoulChanges: [
      "여름철 장마 기간이 불규칙해지기 시작",
      "시간당 50mm 이상의 국지성 폭우 빈도가 산업화 이전 대비 약 20% 증가"
    ]
  },
  {
    year: 2040,
    tempRise: 2.0, heatDays: 34, tropicalNights: 52, seaLevel: 20,
    level: "경고", color: "yellow",
    summary: "여름이 두 달 더 길어집니다",
    globalPhenomena: [
      "전 세계 산호초의 99% 전멸 — 해양 생태계 붕괴 시작",
      "그린란드 빙하의 돌이킬 수 없는 붕괴 시작",
      "전 세계 약 30억 명이 극심한 물 부족에 직면"
    ],
    seoulChanges: [
      "제주도를 넘어 남해안 일대가 완전히 아열대 기후로 진입",
      "서울의 한여름 최고 기온이 39~40°C에 육박",
      "열대야 일수가 한 달 가까이 지속"
    ]
  },
  {
    year: 2050,
    tempRise: 2.5, heatDays: 45, tropicalNights: 68, seaLevel: 35,
    level: "심각", color: "orange",
    summary: "폭염·침수가 일상이 됩니다",
    globalPhenomena: [
      "아마존 열대우림이 탄소 흡수원에서 탄소 배출원으로 역전 (피드백 루프 시작)",
      "북극에 여름 동안 얼음이 아예 사라짐",
      "글로벌 식량 생산량 20% 이상 급감"
    ],
    seoulChanges: [
      "겨울이 한 달 이상 짧아지고, 여름은 5개월 이상 지속",
      "한강 시민공원은 연례적인 대홍수로 매년 수차례 완전히 침수",
      "강남역 등 저지대 도심 침수가 일상화"
    ]
  },
  {
    year: 2060,
    tempRise: 3.0, heatDays: 58, tropicalNights: 82, seaLevel: 55,
    level: "위기", color: "red",
    summary: "3도 돌파 — 되돌리기 어려운 전환점",
    globalPhenomena: [
      "아마존 피드백 루프 가속 — 기후 시스템 자체가 온난화를 증폭",
      "해수면 상승 가속화로 태평양 도서 국가 거주 불능 시작",
      "글로벌 식량 위기 심화, 국제 분쟁 급증"
    ],
    seoulChanges: [
      "한강 시민공원 및 저지대 상습 침수 구역 확대",
      "도심 침수 복구 비용이 GDP의 상당 부분을 차지",
      "폭염 사망자 수 급증 — 노인·어린이 등 취약 계층 피해 집중"
    ]
  },
  {
    year: 2070,
    tempRise: 3.5, heatDays: 72, tropicalNights: 95, seaLevel: 80,
    level: "위기", color: "red",
    summary: "서울의 여름이 4개월로 늘어납니다",
    globalPhenomena: [
      "시베리아 영구동토층이 녹으며 CO₂보다 28배 강력한 메탄(CH₄) 가스 대량 방출",
      "전 세계 해수면이 1m 이상 상승 — 뉴욕·런던·상하이 등 해안 대도시 침수 구역으로 변모"
    ],
    seoulChanges: [
      "서울 최고 기온이 41~42°C 돌파",
      "대기 중 수증기 산업화 이전 대비 약 30% 증가",
      "가을철에도 초강력 슈퍼 태풍이 서해안을 따라 서울을 직격 — 도시 기능 마비"
    ]
  },
  {
    year: 2100,
    tempRise: 4.5, heatDays: 95, tropicalNights: 120, seaLevel: 150,
    level: "위기", color: "red",
    summary: "지금 행동하지 않으면 이것이 현실입니다",
    globalPhenomena: [
      "남극 빙하의 대규모 붕괴 — 해수면 수십 미터 상승",
      "적도·중동·아프리카 지역에 치명적 습구온도(35°C) 도달 — 수억 명의 기후 난민 발생",
      "글로벌 금융 및 물류 공급망 완전히 붕괴"
    ],
    seoulChanges: [
      "겨울철 눈을 구경하기 어려워짐",
      "여름철 전력 과부하로 인한 도심 대규모 블랙아웃(대정전) 정례화",
      "식량 자급률이 낮은 대한민국은 식량 배급제 도입 가능성에 직면"
    ]
  }
];
