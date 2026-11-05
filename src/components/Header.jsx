import { Download, GitBranch, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const detail = location.pathname.startsWith("/projects");
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <Link to="/" className="brand" onClick={closeMenu}>
        김기욱 <span>back-end Developer</span>
      </Link>
      <button
        className="mobile-menu"
        onClick={() => setOpen(!open)}
        aria-label="메뉴"
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "top-nav open" : "top-nav"}>
        <Link
          className={!detail && location.pathname === "/" ? "active" : ""}
          to="/"
          onClick={closeMenu}
        >
          이력서
        </Link>
        <Link
          className={location.pathname === "/experience" ? "active" : ""}
          to="/experience"
          onClick={closeMenu}
        >
          경력기술서
        </Link>
        <Link
          className={detail ? "active" : ""}
          to="/projects"
          onClick={closeMenu}
        >
          프로젝트
        </Link>
        <a
          className="download"
          href="/portfolio.pdf"
          download="김기욱-포트폴리오.pdf"
          onClick={closeMenu}
        >
          <Download size={15} /> PDF 다운로드
        </a>
      </nav>
    </header>
  );
}
