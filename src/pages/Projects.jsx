import ProjectCard from "../components/ProjectCard.jsx";

const projects = [
  {
    title: "AIrtistic",
    description:
      "AI generativ pentru artă, cu galerie și căutare.",
    tags: ["React", "Tailwind", "Vite" ,"Express"],
    link: "https://github.com/mirunaCalugar/AIrtistic",
  },
  {
    title: "App To-Do",
    description:
      "Aplicație de gestionare a sarcinilor cu autentificare și stocare locală.",
    tags: ["React", "Hooks"],
    link: "https://github.com/mirunaCalugar/TODOApp",
  },
  {
    title: "Home Assistant",
    description:
      "Frontend pentru controlul dispozitivelor smart home",
    tags: ["React", "CSS Grid"],
    link: "https://github.com/mirunaCalugar/Home-Assistant-Frontend",
  },
  
  

  
];

export default function Projects() {
  return (
    <section className="page">
      <h2>Proiecte</h2>
      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
