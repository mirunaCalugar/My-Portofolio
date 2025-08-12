export default function ProjectCard({ title, description, tags = [], link }) {
  return (
    <article className="card fade-in">
      <h3>{title}</h3>
      <p>{description}</p>

      {tags?.length > 0 && (
        <ul className="tags">
          {tags.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
      )}

      {link && (
        <a className="btn" href={link} target="_blank" rel="noreferrer">
          Vezi proiectul
        </a>
      )}
    </article>
  );
}
