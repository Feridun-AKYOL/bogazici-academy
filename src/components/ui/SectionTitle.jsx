import { classNames } from '../../utils/classNames'

export function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <div className={classNames('section-title', `section-title--${align}`)}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  )
}
