import { ArrowUpRight, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Experience, SectionTitle } from "../components/Common";
import { projects } from "../data";
import githubIcon from "../assets/github.png";

const careers = [
  {
    name: "유비씨",
    period: "2025.08.10 — 2025.09.11",
    role: "웹 개발 - 프론트엔드 및 UI/UX 개발",
    items: ["웹 기반 IoT 관제 시스템 개발 및 UI/UX 개선 인턴 경험"],
  },

];

function DevelopmentProject({ project }) {
  return (
    <article id={project.slug} className="experience-project">
      <h2>{project.name}</h2>
      <h3>{project.subtitle}</h3>
      <div className="experience-project-meta">
        <span>{project.period}</span>
        <span>
          {project.category} · {project.team}
        </span>
        <span>{project.role}</span>
      </div>
      <p className="experience-project-description">{project.overview}</p>
      <h4>담당 업무</h4>
      <div className="experience-work">
        {project.responsibilities.map(({ title, body }) => (
          <div key={title}>
            <strong>{title}</strong>
            <p>{body}</p>
          </div>
        ))}
      </div>
      <div className="experience-result">
        <strong>주요 성과</strong>
        {project.results.map((result) => (
          <p key={result}>{result}</p>
        ))}
      </div>
      <div className="experience-project-tech">
        <strong>기술</strong>
        <span>{project.tech.join(" · ")}</span>
      </div>
      <Link to={`/projects/${project.slug}`}>
        문제 해결 과정 자세히 보기 <ArrowUpRight size={13} />
      </Link>
      {project.githubUrl && (
        <a className="experience-github-link" href={project.githubUrl} target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="" className="github-icon-image" /> GitHub 저장소
        </a>
      )}
    </article>
  );
}

export default function ExperiencePage() {
  return (
    <Layout experience>
      <section id="top" className="experience-page">
        <div className="eyebrow">
          Career Details / Engineering & Development
        </div>
        <h1>경력기술서</h1>
        <p className="page-lead">
          기구설계와 CS 엔지니어 경험을 바탕으로 웹 서비스, IoT 관제, 영상 인식
          시스템을 개발해 왔습니다.
        </p>
        <section id="career" className="content-section">
          <SectionTitle title="근무 경력" en="Career" />
          {careers.map((career) => (
            <Experience key={career.name} {...career} />
          ))}
        </section>
        <section id="development" className="detail-section">
          <SectionTitle title="개발 프로젝트 경험" en="Development Projects" />
          {projects.map((project) => (
            <DevelopmentProject key={project.slug} project={project} />
          ))}
        </section>
        <section id="training" className="detail-section">
          <SectionTitle title="교육 이력" en="Training" />
          <Experience
            name="UVC 메타캠프"
            period="2025.03 — 2025.09"
            role="디지털 트윈 · 스마트팩토리 개발 교육"
            items={[
              "Node.js, Vue.js, React, JavaScript 기반 웹 개발 및 REST API·소켓 통신 학습",
              "IoT 모듈 연동, Python·PyTorch·Redis 및 데이터 분석 실습",
              "WebGL 콘텐츠·인터랙티브 개발 및 스마트팩토리 디지털 트윈 통합 프로젝트 수행",
            ]}
          />
          <Experience
            name="애드인에듀 IT 아카데미"
            period="2024.05 — 2024.11"
            role="AI · 로봇 시스템 개발 교육"
            items={[
              "Linux, Python, SQL, 데이터 EDA, Git 및 OpenCV 학습",
              "머신러닝·딥러닝, YOLO 객체 검출 및 TensorFlow 활용 실습",
              "ROS2, SLAM 경로계획, 임베디드 시스템·IoT 통신 학습",
              "이론·실습 662시간 및 데이터 분석·비전·로봇 실무 프로젝트 298시간 수행",
            ]}
          />
        </section>
      </section>
    </Layout>
  );
}
