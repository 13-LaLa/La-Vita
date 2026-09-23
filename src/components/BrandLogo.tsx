type BrandLogoProps = { light?: boolean; compact?: boolean }

export function BrandLogo({ light = false, compact = false }: BrandLogoProps) {
  return (
    <a href="#home" className={`brand-logo ${light ? 'brand-logo--light' : ''}`} aria-label="La’Vita home">
      <img className="brand-logo__image" src="/images/lavita-logo.webp" alt="" aria-hidden="true" />
      <span className="brand-logo__type">
        <span className="brand-logo__name">La’Vita</span>
        {!compact && <span className="brand-logo__sub">Health & Wellness Store</span>}
      </span>
    </a>
  )
}
