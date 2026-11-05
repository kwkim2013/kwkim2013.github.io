import { ArrowRight, ArrowUpRight, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";
import githubIcon from "../assets/github.png";

export function SectionTitle({ title, en, action, href }) {
  return (
    <div className="section-title">
      <div>
        <h2>{title}</h2>
        <span>{en}</span>
      </div>
      {action && href && (
        <Link to={href}>
          {action} <ArrowRight size={14} />
        </Link>
      )}
    </div>
  );
}

export function Experience({ name, period, role, items }) {
  return (
    <article className="experience">
      <div className="experience-meta">
        <strong>{name}</strong>
        <span>{period}</span>
      </div>
      <div>
        <strong>{role}</strong>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-thumb" style={{ background: project.color }}>
        {project.coverImage ? (
          <img
            className="project-cover"
            src={project.coverImage}
            alt={`${project.name} 프로젝트 표지`}
            loading="lazy"
          />
        ) : (
        <div className="mini-window">
          <div className="mini-bar" />
          <div className="mini-chart" />
          <div className="mini-lines" />
        </div>
        )}
      </div>
      <div className="project-card-copy">
        <h3>{project.name}</h3>
        <strong>{project.subtitle}</strong>
        <p>
          {project.period} · {project.team}
        </p>
        <p>{project.description}</p>
        <div className="tags">
          {project.tech.slice(0, 4).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-card-actions">
          <Link to={`/projects/${project.slug}`}>
            프로젝트 자세히 보기 <ArrowUpRight size={13} />
          </Link>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub 저장소`}>
              <img src={githubIcon} alt="" className="github-icon-image" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function TechSummary() {
  const stacks = [
    ["언어", "Java · JavaScript"],
    ["프레임워크/라이브러리", "Spring Boot · React"],
    ["DB", "MySQL · SQL"],
    ["API/통신", "REST API · FastAPI · HTTP · JSON"],
    ["개발 도구", "Bruno · Git · GitHub · IntelliJ IDEA · VS Code · Eclipse"],
  ];
  return (
    <section id="tech" className="tech-summary">
      <SectionTitle title="기술" en="Skills" />
      <div className="tech-summary-list">
        {stacks.map(([label, value]) => (
          <div className="tech-summary-row" key={label}>
            <strong>{label}</strong>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
