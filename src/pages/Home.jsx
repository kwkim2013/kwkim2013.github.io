import { ArrowUpRight, GitBranch, Mail } from "lucide-react";
import Layout from "../components/Layout";
import {
  Experience,
  ProjectCard,
  SectionTitle,
  TechSummary,
} from "../components/Common";
import { projects } from "../data";

export default function Home() {
  return (
    <Layout>
      <section id="top" className="intro">
        <div className="eyebrow">Back-end Developer / Seoul</div>
        <h1>김기욱</h1>
        <p className="lead">
          중복되는 코드는 공통화하고, 플랫폼 차이는 분리해
          <br />
          유지보수하기 좋은 백엔드를 만듭니다.
        </p>
        <p className="body-copy">
          사내 UI 라이브러리를 개발·배포하며 재사용 가능한 컴포넌트를 구축하고
          개발 기준을 정립했습니다.
          <br />
          실시간 거래 서비스에서는 웹·모바일·데스크톱 앱이 하나의 코드베이스를
          공유하도록 설계했습니다.
        </p>
        <div className="quick-links">
          <a href="mailto:dnr0409@nate.com">
            <Mail size={15} /> dnr0409@nate.com
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <GitBranch size={15} /> GitHub <ArrowUpRight size={13} />
          </a>
        </div>
      </section>
      <section id="experience" className="content-section">
        <SectionTitle title="경력" en="Experience" />
        <Experience
          name="㈜유비씨"
          period="2025.08 — 09"
          role="Backend Developer"
          items={[
            "OCTOPUS는 그룹웨어가 아니라 제조·물류 산업을 위한 디지털 트윈 기반 자율제조 플랫폼",
            "공장 안의 설비·로봇·생산 데이터를 모으고, 가상 공장에서 공정을 시뮬레이션한 뒤 AI로 문제를 예측하고 실제 설비·로봇 운영까지 연결하는 플랫폼",
            "k3s 기반 프로덕션 환경을 배포·운영하고 레거시 플랫폼을 Kubernetes로 이전",
          ]}
        />
      </section>
      <section id="projects" className="content-section">
        <SectionTitle
          title="프로젝트"
          en="Projects"
          action="전체 프로젝트 보기"
          href="/projects"
        />
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <TechSummary />
      <section id="education" className="education-section">
        <div className="section-title">
          <div>
            <h2>학력</h2>
            <span>Education</span>
          </div>
        </div>
        <div className="education-item">
          <div>
            <strong>한국방송통신대학교</strong>
            <span>컴퓨터과학과</span>
          </div>
          <div className="education-period">
            <strong>2022.09 — 2027.09</strong>
            <span>졸업 예정 · 3학년 재학중</span>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        이 사이트는 포트폴리오 용도로 제작하였으며 상업적인 용도로 사용하지
        않음을 밝힙니다.
      </footer>
    </Layout>
  );
}
