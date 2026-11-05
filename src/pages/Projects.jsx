import Layout from "../components/Layout";
import { ProjectCard } from "../components/Common";
import { projects } from "../data";

export default function Projects() {
  return (
    <Layout>
      <section className="projects-page">
        <div className="eyebrow">Selected Work / 2024 — 2026</div>
        <h1>프로젝트</h1>
        <p className="page-lead">
          웹 서비스부터 IoT 관제와 영상 인식까지, 직접 구현하고 개선한 5개의
          프로젝트입니다.
        </p>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </Layout>
  );
}
