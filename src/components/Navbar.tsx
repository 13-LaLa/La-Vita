import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { BrandLogo } from './BrandLogo'
import { navItems, whatsappMessages, whatsappUrl } from '../data/siteData'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <BrandLogo />
        <nav className="navbar__links" aria-label="Primary navigation">
          {navItems.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}
        </nav>
        <a className="button button--sm navbar__cta" href={whatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer">
          <MessageCircle size={17} /> Chat on WhatsApp
        </a>
        <button className="navbar__toggle" type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav className={`mobile-nav ${open ? 'mobile-nav--open' : ''}`} aria-label="Mobile navigation">
        {navItems.map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="button" href={whatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer">
          <MessageCircle size={18} /> Chat on WhatsApp
        </a>
      </nav>
    </header>
  )
}
