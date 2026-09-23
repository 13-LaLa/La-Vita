import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/siteData'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section faq" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <Reveal>
          <SectionHeading eyebrow="Good to know" title="Questions, answered." copy="Straightforward answers about ordering, delivery, fitness and the work we do." />
          <p className="faq__hint">Still curious? Chat with us and a member of the La’Vita team will help.</p>
        </Reveal>
        <div className="faq__items">
          {faqs.map((item, index) => (
            <Reveal key={item.q} delay={index * 35}>
              <article className={`faq-item ${open === index ? 'faq-item--open' : ''}`}>
                <button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
                  <span>{item.q}</span><ChevronDown size={19} />
                </button>
                <div className="faq-item__answer"><p>{item.a}</p></div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
