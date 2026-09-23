export function SectionHeading({ eyebrow, title, copy, light = false, center = false }: { eyebrow: string; title: string; copy?: string; light?: boolean; center?: boolean }) {
  return (
    <div className={`section-heading ${light ? 'section-heading--light' : ''} ${center ? 'section-heading--center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}
