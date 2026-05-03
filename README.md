<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/try-angle-at">
    <img src="../assets/logo.png" alt="Logo" width="80" height="80">
  </a>

<h1 align="center">TryAngle Admin - Mock Prototype</h1>

  <p align="center">
    TryAngle 어드민 UI 설계를 위한 정적 목업 프로토타입
    <br />
    <a href="https://try-angle-at.github.io/tryangle_admin_mock/"><strong>목업 사이트 바로가기</strong></a>
    &nbsp;&middot;&nbsp;
    <a href="https://github.com/try-angle-at/tryangle_admin_mock"><strong>GitHub Repository</strong></a>
    <br />
    <br />
    본 레포지터리는 프로덕션 어드민 서비스가 아닌 <strong>UI 프로토타이핑 전용 목업</strong>입니다.
  </p>
</div>

---

## 개요

본 레포지터리는 TryAngle 어드민 서비스를 구현하기 전, 레이아웃 및 UX 흐름을 신속하게 검증하기 위해 제작된 **정적 HTML/CSS 목업 프로토타입**입니다.

피그마 화면정의서 대신 **배포된 목업 사이트**를 커뮤니케이션 기준으로 사용합니다. 실제 데이터와 연동되지 않으며, 목업 데이터(JSON/JSONL)를 사용합니다.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 페이지 구성

| 페이지 | 경로 | 설명 |
|---|---|---|
| 대시보드 | index.html | KPI 카드, 최근 로그 테이블 |
| 실시간 로그 목록 | realtime/realtime-list.html | 촬영 세션 로그 목록 및 상태 관리 |
| 실시간 라이브 모니터 | realtime/realtime-detail.html | AI 키포인트 실시간 비교 뷰어 |
| 레퍼런스 이미지 목록 | content/ref-img-gallery.html | 포즈 레퍼런스 이미지 갤러리 |
| 레퍼런스 이미지 상세 | content/ref-img-detail.html | 메타데이터(title, description, tag) 편집 |
| 포즈 스튜디오 뷰어 | content/ref-img-detail-pose.html | AI 포즈 키포인트 인터랙티브 뷰어 |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 디자인 시스템

공통 디자인 기준은 DESIGN.md, 공통 스타일시트는 assets/admin.css 를 참고하세요.


> [디자인 시스템 상세 기준 바로가기](https://try-angle-at.github.io/tryangle_admin_mock/design)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 작업 프로세스

어드민은 데이터 구조가 확정되지 않은 단계이며, 일반적인 UI 패턴을 따르지 않는 화면이 많아 아래 순서로 진행합니다.

프로토타이핑 (은비 · 승혜 · 윤서) → 레이아웃 작업 (승혜 · 윤서) → UI 작업 (윤서)

### 프로토타이핑

- 생성형 AI(Claude, Gemini)를 활용해 목업 사이트를 빠르게 생성합니다.
- 데이터 확정 전 단계에서도 레이아웃과 UX 흐름을 선제적으로 검토할 수 있습니다.

### 리뷰 및 피드백

- 피그마 또는 화면정의서 대신 **배포된 목업 사이트**를 기준으로 논의합니다.
- 수정 사항은 캡처 화면에 직접 주석을 작성하거나, GitHub Issues 또는 팀 회의를 통해 수렴합니다.

### 기술 스택

- 순수 HTML + CSS (외부 프레임워크 없음 - 빠른 반복 수정을 위해)
- 공통 스타일시트: assets/admin.css
- 목업 데이터: assets/data/ (JSON / JSONL)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 참여 팀원

| 이름 | 역할 |
|:---:|:---|
| 조은비 | 프로토타이핑 |
| 최승혜 | 프로토타이핑 · 레이아웃 작업 |
| 윤서 | 프로토타이핑 · 레이아웃 작업 · UI 작업 |

> 전체 팀 구성은 TryAngle 메인 레포지터리(https://try-angle-at.github.io)를 참고하세요.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 링크

| | URL |
|---|---|
| 목업 사이트 | https://try-angle-at.github.io/tryangle_admin_mock/ |
| 레포지터리 | https://github.com/try-angle-at/tryangle_admin_mock |
| TryAngle 서비스 | https://example.com |

<p align="right">(<a href="#readme-top">back to top</a>)</p>
