export interface TempLevel {
  temp: number;
  label: string;
  heatDays: number;
  tropicalNights: number;
  seaLevel: number;
  seaLevelUnit: string;
  level: "주의" | "경고" | "심각" | "위기";
  color: "blue" | "orange" | "red" | "darkred" | "black";
  summary: string;
  globalPhenomena: string[];
  seoulChanges: string[];
  videoFile: string;
}

export const tempLevels: TempLevel[] = [
  {
    temp: 1,
    label: "+1°C",
    heatDays: 26,
    tropicalNights: 38,
    seaLevel: 10,
    seaLevelUnit: "cm",
    level: "주의",
    color: "blue",
    summary: "현재 지구 상태 — 변화가 이미 시작됐습니다",
    globalPhenomena: [
      "전 세계적인 대형 산불(호주, 캘리포니아 등)의 정례화",
      "북극해 빙하 감소 가속화"
    ],
    seoulChanges: [
      "여름철 장마 기간이 불규칙해지기 시작",
      "시간당 50mm 이상의 국지성 폭우 빈도가 산업화 이전 대비 약 20% 증가"
    ],
    videoFile: "1c.mp4"
  },
  {
    temp: 3,
    label: "+3°C",
    heatDays: 58,
    tropicalNights: 82,
    seaLevel: 55,
    seaLevelUnit: "cm",
    level: "심각",
    color: "orange",
    summary: "파리협정 실패 시 2100년 예상치",
    globalPhenomena: [
      "아마존 열대우림이 탄소 흡수원에서 탄소 배출원으로 역전 (피드백 루프 시작)",
      "북극에 여름 동안 얼음이 아예 사라짐",
      "글로벌 식량 생산량 20% 이상 급감"
    ],
    seoulChanges: [
      "겨울이 한 달 이상 짧아지고, 여름은 5개월 이상 지속",
      "한강 시민공원은 연례적인 대홍수로 매년 수차례 완전히 침수",
      "강남역 등 저지대 도심 침수가 일상화"
    ],
    videoFile: "3c.mp4"
  },
  {
    temp: 5,
    label: "+5°C",
    heatDays: 80,
    tropicalNights: 108,
    seaLevel: 100,
    seaLevelUnit: "cm",
    level: "위기",
    color: "red",
    summary: "거주 불능 지역 확산 — 수억 명의 기후 난민 발생",
    globalPhenomena: [
      "남극 빙하의 대규모 붕괴",
      "적도·중동·아프리카 지역에 치명적 습구온도(35°C) 도달 — 수억 명의 기후 난민 발생",
      "글로벌 금융 및 물류 공급망 완전히 붕괴"
    ],
    seoulChanges: [
      "겨울철 눈을 구경하기 어려워짐",
      "여름철 전력 과부하로 인한 도심 대규모 블랙아웃(대정전) 정례화",
      "식량 자급률이 낮은 대한민국은 식량 배급제 도입 가능성에 직면"
    ],
    videoFile: "5c.mp4"
  },
  {
    temp: 7,
    label: "+7°C",
    heatDays: 90,
    tropicalNights: 120,
    seaLevel: 7,
    seaLevelUnit: "m+",
    level: "위기",
    color: "darkred",
    summary: "지구 생태계 대멸종 시나리오",
    globalPhenomena: [
      "에오세(Eocene) 초기 수준의 초고온 지구 상태로 회귀",
      "지구상의 빙하가 단 1%도 남지 않고 전부 녹아 해수면이 수십 미터 상승",
      "온대 기후대라는 개념 자체가 소멸 — 지구 전체가 열대화"
    ],
    seoulChanges: [
      "인천 등 해안 도시의 절반이 바다에 잠김",
      "영등포·마포 등 저지대가 한강 수위 상승으로 상습 침수 구역화",
      "야외 경제 활동이 사실상 불가능 — 지하 도시나 밀폐형 스마트 빌딩 내부에서만 생활 가능"
    ],
    videoFile: "7c.mp4"
  },
  {
    temp: 9,
    label: "+9°C",
    heatDays: 100,
    tropicalNights: 140,
    seaLevel: 70,
    seaLevelUnit: "m",
    level: "위기",
    color: "black",
    summary: "폭주 온실효과 진입 — 포유류 생존 불가",
    globalPhenomena: [
      "대기 중 수증기량이 산업화 이전 대비 약 90~100% 증가",
      "'폭주 온실 효과(Runaway Greenhouse Effect)' 진입 — 인간이 탄소를 추가로 배출하지 않아도 지구가 스스로 온도를 끝없이 올림",
      "곤충·미생물을 제외한 포유류의 생존 자체가 불가능한 환경"
    ],
    seoulChanges: [
      "사막화와 초열대성 폭우가 무한 반복되는 유령 도시화",
      "서울의 연평균 기온이 현재의 사하라 사막이나 적도 도심보다 뜨거워짐",
      "인류가 정착해 살아갈 수 없는 환경으로 변모"
    ],
    videoFile: "9c.mp4"
  }
];
