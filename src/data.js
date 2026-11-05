import iotCover from "./assets/iot.png";
import moaCover from "./assets/moa.png";
import nextFrameCover from "./assets/nextframe.png";
import petPalaceCover from "./assets/petplace.png";
import recklessDrivingCover from "./assets/reckless-driving-detection.png";

export const projects = [
  {
    slug: "license-plate-recognition",
    coverImage: nextFrameCover,
    name: "자동차 번호판 인식 시스템",
    subtitle: "영상 기반 번호판 검출과 OCR 모니터링",
    period: "2026.05.15 — 2026.06.19",
    category: "팀 프로젝트",
    role: "모델 학습 · 번호판 검출 · GUI 개발",
    team: "5인 팀",
    githubUrl: "https://github.com/JHKINI/nextframe_opencv",
    color: "#dbeafe",
    description:
      "영상에서 번호판을 검출하고 OCR 결과와 최근 인식 기록을 실시간으로 확인하는 데스크톱 프로그램입니다.",
    overview:
      "YOLO 기반 번호판 검출과 EasyOCR 문자 인식을 PySide6 GUI에 연결했습니다. 모델 학습을 위한 라벨링, 추론 결과 크롭, GUI 개발과 개선을 담당했습니다.",
    responsibilities: [
      {
        title: "모델 학습 및 검출",
        body: "차량 번호판 데이터 라벨링과 YOLO 모델 학습을 수행하고, 영상에서 검출한 번호판 영역을 크롭해 문자 인식으로 연결했습니다.",
      },
      {
        title: "실시간 GUI",
        body: "PySide6로 동영상 선택·재생·일시정지, OCR 결과 갱신, 최근 인식 기록 5건을 표시하는 화면을 구현했습니다.",
      },
      {
        title: "결과 저장",
        body: "인식 결과의 CSV 저장과 다운로드, 처리 상태 및 저장 경로 표시 기능을 구현했습니다.",
      },
    ],
    features: [
      "영상에서 번호판 자동 검출 및 EasyOCR 문자 인식",
      "동영상 선택·재생·일시정지",
      "OCR 결과 실시간 갱신 및 최근 기록 5건 관리",
      "CSV 저장·다운로드 및 처리 상태 표시",
    ],
    challenges: [
      {
        title: "프레임별 검출 불안정과 중복 저장",
        body: "프레임마다 번호판 검출 결과가 사라지고 OCR 결과가 중복 저장되는 문제에 5프레임 다수결 투표를 적용했습니다.",
      },
    ],
    results: [
      "5프레임 다수결 투표로 인식 안정성 향상",
      "OCR 결과 중복 저장 제거",
    ],
    tech: ["Python", "PySide6", "OpenCV", "YOLO", "EasyOCR"],
  },
  {
    slug: "cgi-moa",
    coverImage: moaCover,
    name: "CGI_MOA",
    subtitle: "생성형 이미지 합성 결과 평가 서비스",
    period: "2025.06.30 — 2025.08.07",
    category: "미래내일경험 팀프로젝트",
    role: "합성 결과 평가 기준 탐색 · API 기능 테스트",
    team: "팀 프로젝트",
    githubUrl: "https://github.com/Jenny5789/CGI_MOA",
    color: "#dcfce7",
    description:
      "생성형 이미지 합성 결과를 평가하고 관리하는 팀 프로젝트형 웹 서비스입니다.",
    overview:
      "합성 결과를 객관적으로 평가하기 위한 기준을 탐색하고, 서비스 API의 GET·POST 메서드를 Bruno로 호출해 기능을 테스트했습니다.",
    responsibilities: [
      {
        title: "합성 결과 평가 기준 탐색",
        body: "생성형 이미지 합성 결과를 비교·평가하기 위한 기준과 평가 항목을 탐색했습니다.",
      },
      {
        title: "API 기능 테스트",
        body: "GET·POST 메서드를 활용해 Bruno에서 API 기능을 호출하고 요청·응답 결과를 검증했습니다.",
      },
      {
        title: "기능 검증 및 협업",
        body: "API 테스트 결과를 바탕으로 기능 동작을 확인하고 팀원들과 이슈를 공유했습니다.",
      },
    ],
    features: [
      "생성형 이미지 합성 결과 평가 기준 탐색",
      "API GET·POST 메서드 기능 검증",
      "Bruno 기반 요청·응답 테스트",
    ],
    challenges: [
      {
        title: "API 요청·응답 검증",
        body: "Bruno 테스트 시나리오를 구성해 API 요청 형식과 응답 데이터를 확인하고 기능별 동작을 검증했습니다.",
      },
    ],
    results: [
      "합성 결과 평가 기준과 API 기능 테스트 시나리오 정리",
      "GET·POST API 요청 및 응답 검증",
    ],
    tech: [
      "JavaScript",
      "REST API",
      "Bruno",
      "GitHub",
    ],
  },
  {
    slug: "pet-palace",
    coverImage: petPalaceCover,
    name: "PetPalace",
    subtitle: "반려동물 호텔 예약·결제 서비스",
    period: "2025.05.19 — 2025.05.30",
    category: "개인 프로젝트",
    role: "기획 · 프론트엔드 · 백엔드 · DB 설계",
    team: "1인 개발",
    githubUrl: "https://github.com/kimkale12/petpalace",
    color: "#fef3c7",
    description:
      "객실 예약부터 Toss Payments 결제, 관리자 예약·매출 조회까지 구현한 반려동물 호텔 웹 서비스입니다.",
    overview:
      "기획부터 프론트엔드, 백엔드 API, 데이터베이스 설계와 결제 연동까지 단독으로 수행했습니다. Vue 3와 Pinia 기반 예약 화면, Node.js·Express API, PostgreSQL을 연결해 예약과 결제 흐름을 구성했습니다.",
    responsibilities: [
      {
        title: "예약 및 결제 UI",
        body: "메인 홈페이지, 객실과 날짜 선택, 예약·결제 완료 화면을 구현했습니다.",
      },
      {
        title: "백엔드 및 DB",
        body: "Express·Sequelize 기반 API와 PostgreSQL 예약 데이터 구조를 설계하고 JWT 기반 인증·인가를 적용했습니다.",
      },
      {
        title: "결제 및 운영 기능",
        body: "Toss Payments API를 연동하고 게시판 CRUD, 관리자 예약 현황 및 매출 조회 기능을 개발했습니다.",
      },
    ],
    features: [
      "회원가입·로그인 및 JWT 인증",
      "객실·날짜 선택과 호텔 예약",
      "Toss Payments 결제 및 완료 화면",
      "게시판 CRUD",
      "관리자 예약 현황 및 일별 매출 조회",
    ],
    challenges: [
      {
        title: "예약 날짜 누락",
        body: "결제 전 선택한 날짜를 검증하고, 미선택 시 API 호출을 차단하며 Toast 알림을 표시했습니다. 백엔드에서도 날짜 검증 실패 시 명확한 오류 코드와 메시지를 반환하도록 개선했습니다.",
      },
      {
        title: "결제 화면 이동 오류",
        body: "폼 제출로 상태가 초기화되는 문제를 preventDefault()로 해결했습니다. try-catch로 예외를 처리하고 결제 준비가 성공했을 때만 PG사 화면으로 이동하도록 수정했습니다.",
      },
    ],
    results: [
      "예약 정보 검증과 결제 예외 처리로 예약·결제 흐름 개선",
      "관리자 화면에서 예약 현황과 매출 조회 구현",
    ],
    tech: [
      "Vue 3",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Pinia",
      "Sequelize",
      "JWT",
      "Toss Payments",
    ],
  },
  {
    slug: "reckless-driving-detection",
    coverImage: recklessDrivingCover,
    name: "난폭운전 감지 시스템",
    subtitle: "도로 객체 인식과 주행 위반 분석",
    period: "2024.08.30 — 2024.09.25",
    category: "팀 프로젝트",
    role: "객체 인식 · DB · 주행 분석 · GUI 개발",
    team: "5인 팀",
    githubUrl: "https://github.com/addinedu-ros-6th/deeplearning-repo-1",
    color: "#ede9fe",
    description:
      "도로 표지판을 인식하고 속도·정지선 위반에 따른 벌점을 계산해 실시간으로 표시하는 시스템입니다.",
    overview:
      "YOLOv8과 OpenCV 기반 도로 객체 인식, 주행 위반 판별, 벌점 계산을 PyQt5 모니터링 화면과 연결했습니다. 차량 움직임 감지 모델의 라벨링부터 사용자·차량 정보와 인식 로그 DB 설계까지 담당했습니다.",
    responsibilities: [
      {
        title: "객체 인식",
        body: "차량 움직임 감지 데이터 라벨링과 YOLOv8 학습을 진행하고, 속도 제한 표지판 및 어린이 보호구역을 실시간으로 인식하도록 구현했습니다.",
      },
      {
        title: "DB 및 주행 분석",
        body: "사용자·차량 정보, 객체 인식 기록, 벌점 발생 로그를 설계하고 속도·정지선 위반 상황에 따른 벌점 계산 알고리즘을 구현했습니다.",
      },
      {
        title: "모니터링 UI",
        body: "PyQt5 GUI에서 인식 결과와 주행 분석 결과를 실시간으로 확인할 수 있도록 구현했습니다.",
      },
    ],
    features: [
      "도로 표지판 및 어린이 보호구역 인식",
      "속도·정지선 위반 판별 및 벌점 계산",
      "사용자·차량 정보와 객체 인식 로그 관리",
      "PyQt5 실시간 모니터링",
    ],
    challenges: [
      {
        title: "유사 객체 오인식",
        body: "속도 제한 표지판 등 유사 객체의 오인식을 줄이기 위해 데이터 라벨링 기준을 재정립하고 모델 학습 전처리를 개선했습니다.",
      },
      {
        title: "인식 결과 표시 지연",
        body: "GUI 이벤트 루프를 비동기로 개선하고 로깅 알고리즘을 경량화했습니다. 벌점 유형과 점수를 정규화해 DB에 저장했습니다.",
      },
    ],
    results: [
      "객체 인식부터 벌점 계산·GUI 표시까지 통합 구현",
      "비동기 GUI 처리와 로깅 경량화로 표시 지연 개선",
    ],
    tech: ["Python", "YOLOv8", "OpenCV", "PyQt5", "MySQL", "Ubuntu", "AWS"],
  },
  {
    slug: "smart-fire-response",
    coverImage: iotCover,
    name: "스마트 화재 대응 시스템",
    subtitle: "IoT 센서 기반 소방 관제",
    period: "2024.08.09 — 2024.08.26",
    category: "팀 프로젝트",
    role: "센서 연동 · 관제 GUI · DB 개발",
    team: "5인 팀",
    githubUrl: "https://github.com/addinedu-ros-6th/iot-repo-5",
    color: "#ffedd5",
    description:
      "수위·화재 감지 센서와 실시간 경보, 주차 현황을 하나의 관제 시스템으로 연결한 IoT 프로젝트입니다.",
    overview:
      "화재 감지부터 경고와 진압까지 이어지는 소방 관제 흐름을 구성했습니다. 수위 센서의 하드웨어·소프트웨어 구현, 알람 표시, 주차 현황 DB 연결과 센서·제어·출력 구조 설계를 담당했습니다.",
    responsibilities: [
      {
        title: "수위 센서 연동",
        body: "Arduino와 초음파 센서로 수위를 측정하고 Python으로 데이터를 수집·분석해 MySQL에 주기적으로 저장했습니다.",
      },
      {
        title: "알람 및 이력 관리",
        body: "PyQt5 GUI에서 센서 이상 신호에 따른 알람 이미지와 경고음을 출력하고 이벤트 로그를 DB와 연동했습니다.",
      },
      {
        title: "주차 관제",
        body: "초음파 센서의 차량 감지 데이터를 Node.js 서버로 전달하고, MySQL 주차 현황 DB와 구역별 주차 가능 여부를 표시하는 대시보드를 구현했습니다.",
      },
      {
        title: "시스템 구조 설계",
        body: "LIDAR·불꽃 센서·모터를 연동하는 구조와 MQTT·시리얼·ROS2 토픽 통신 방식, 반응 시간 기준을 정의했습니다.",
      },
    ],
    features: [
      "실시간 수위 측정 및 센서 데이터 저장",
      "화재·수위 이상 알람과 경고음",
      "이벤트 로그 및 이력 관리",
      "구역별 실시간 주차 현황 대시보드",
    ],
    challenges: [
      {
        title: "센서 처리 지연과 오탐",
        body: "서로 다른 센서 프로토콜과 노이즈로 수집 일관성이 떨어지고 알람이 3~5초 지연됐습니다. Python 수집 모듈을 멀티스레드로 재구성하고 ROS2 통신 구조와 알람 트리거 조건을 개선했습니다.",
      },
    ],
    results: [
      "센서 → 판단 → 알람 응답 시간을 2초 이내로 단축",
      "알람 조건 세분화로 오탐률 10% 미만으로 감소",
    ],
    tech: [
      "Python",
      "MySQL",
      "PyQt5",
      "ROS2",
      "Arduino",
      "Node.js",
      "MQTT",
      "Ubuntu",
    ],
  },
];
