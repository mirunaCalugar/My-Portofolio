import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <img src="/me.png" alt="Portret" className="avatar" />
          <div className="brand-text">
            <h1>Miruna Calugar</h1>
            <p>Frontend dev pasionată de UX și micro-interacțiuni.</p>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Acasă
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
            Proiecte
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
