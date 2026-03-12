export function ProgramCard({ title, description, tags }) {
  return (
    <article className="program-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="program-card__tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
