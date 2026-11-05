import { ArrowLeft, ArrowRight, GitBranch } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { SectionTitle } from "../components/Common";
import { projects } from "../data";
import githubIcon from "../assets/github.png";

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((project) => project.slug === slug);
  const project = projects[index];
  if (!project) return <Navigate to="/projects" replace />;
  const previous = projects[index - 1];
  const next = projects[index + 1];
  return (
    <Layout detail>
      <section id="top" className="detail-hero">
        <Link className="back-link" to="/projects">
          <ArrowLeft size={14} /> 프로젝트 목록
        </Link>
        <p className="kicker">{project.category}</p>
        <h1>{project.name}</h1>
        <h2>{project.subtitle}</h2>
        <div className="meta-line">
          <span>{project.period}</span>
          <span>
            {project.role} · {project.team}
          </span>
        </div>
        <p className="detail-summary">{project.overview}</p>
        {project.githubUrl && (
          <a className="github-project-link" href={project.githubUrl} target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="" className="github-icon-image" /> GitHub 저장소 <ArrowRight size={14} />
          </a>
        )}
      </section>
      <section id="work" className="detail-section">
        <SectionTitle title="담당 업무" en="Responsibilities" />
        {project.responsibilities.map((item) => (
          <div className="responsibility" key={item.title}>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </div>
        ))}
      </section>
      <section id="features" className="detail-section">
        <SectionTitle title="주요 기능" en="Features" />
        <ul className="feature-list">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>
      <section id="challenges" className="detail-section">
        <SectionTitle title="문제 해결" en="Problem Solving" />
        {project.challenges.map((item) => (
          <div className="responsibility" key={item.title}>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </div>
        ))}
      </section>
      <div className="result-box">
        <span>결과</span>
        {project.results.map((result) => (
          <p key={result}>{result}</p>
        ))}
      </div>
      <section id="tech" className="detail-section tech-section">
        <SectionTitle title="사용 기술" en="Tech Stack" />
        <div className="tags large">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>
      <div className="project-pagination">
        {previous ? (
          <Link to={`/projects/${previous.slug}`}>
            <small>이전 프로젝트</small>
            <strong>
              <ArrowLeft size={15} /> {previous.name}
            </strong>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link className="next" to={`/projects/${next.slug}`}>
            <small>다음 프로젝트</small>
            <strong>
              {next.name} <ArrowRight size={15} />
            </strong>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </Layout>
  );
}
