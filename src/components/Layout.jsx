import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import Header from "./Header";

function Sidebar({ detail = false, experience = false }) {
  const links = experience
    ? [
        ["근무 경력", "#career"],
        ["개발 프로젝트 경험", "#development"],
        ["교육 이력", "#training"],
      ]
    : detail
      ? [
          ["프로젝트 소개", "#top"],
          ["담당 업무", "#work"],
          ["주요 기능", "#features"],
          ["문제 해결", "#challenges"],
          ["사용 기술", "#tech"],
        ]
      : [
          ["소개", "#top"],
          ["경력", "#experience"],
          ["프로젝트", "#projects"],
          ["기술", "#tech"],
          ["학력", "#education"],
        ];
  const [activeId, setActiveId] = useState(links[0][1].replace("#", ""));

  useEffect(() => {
    const sections = links
      .map(([, href]) => document.getElementById(href.replace("#", "")))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-82px 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [detail, experience]);

  return (
    <aside className="sidebar">
      <div className="side-title">
        {experience ? "경력기술서" : detail ? "프로젝트 상세" : "이력서"}
      </div>
      <nav className="side-nav">
        {links.map(([label, href]) => (
          <a
            className={activeId === href.replace("#", "") ? "selected" : ""}
            href={href}
            key={label}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="contact">
        <strong>Contact</strong>
        <a href="mailto:dnr0409@nate.com">dnr0409@nate.com</a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={13} />
        </a>
      </div>
    </aside>
  );
}

export default function Layout({
  children,
  detail = false,
  experience = false,
}) {
  return (
    <>
      <Header />
      <div className="page-shell">
        <Sidebar detail={detail} experience={experience} />
        <main className="main-content">{children}</main>
      </div>
    </>
  );
}
