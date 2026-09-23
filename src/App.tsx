import {
  ArrowDown, ArrowRight, Check, ChevronRight, Leaf,
  MapPin, MessageCircle, Play, Quote, Salad, ShieldCheck,
} from 'lucide-react'
import { Navbar } from './components/Navbar'
import { BrandLogo } from './components/BrandLogo'
import { Reveal } from './components/Reveal'
import { SectionHeading } from './components/SectionHeading'
import { Faq } from './components/Faq'
import {
  athleteSupport, audienceNeeds, campusInitiatives, fitnessFeatures, footerColumns,
  impactStats, lifestyleConcerns, prices, reasons, saladOptions, services,
  valueProps, whatsappMessages, whatsappUrl,
} from './data/siteData'

const WhatsAppLink = ({ message, children, className = 'button', ariaLabel }: { message: string; children: React.ReactNode; className?: string; ariaLabel?: string }) => (
  <a className={className} href={whatsappUrl(message)} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
    {children}
  </a>
)

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__wash" />
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__badge"><span /> Nutrition <i /> Fitness <i /> Wellness</div>
          <h1>Better nutrition.<br /><em>Better movement.</em><br />Better living.</h1>
          <p>La’Vita helps you make healthier everyday choices through nutritious foods, fresh fruits and juices, fitness, wellness education and practical lifestyle support.</p>
          <div className="hero__actions">
            <WhatsAppLink message={whatsappMessages.general}><MessageCircle size={19} /> Chat with us on WhatsApp</WhatsAppLink>
            <a className="button button--ghost" href="#services">Explore La’Vita <ArrowDown size={18} /></a>
          </div>
          <div className="hero__trust">
            <span><ShieldCheck size={18} /> Practical wellness</span>
            <span><MapPin size={18} /> Ekiti, Nigeria</span>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__image-wrap">
            <img src="/images/lavita-hero.webp" alt="Fresh fruit salad, juice and an active Nigerian woman stretching" fetchPriority="high" />
            <div className="hero__image-label"><span>Wellness, your way.</span><small>Food · Fitness · Lifestyle</small></div>
          </div>
          <div className="hero__orbit hero__orbit--one" />
          <div className="hero__orbit hero__orbit--two" />
        </div>
      </div>
      <div className="container hero__strip" aria-label="Our three wellness pillars">
        <span>01 — Eat better</span><span>02 — Move better</span><span>03 — Live better</span>
      </div>
    </section>
  )
}

function ValueProps() {
  return (
    <section className="value-props">
      <div className="container value-props__grid">
        {valueProps.map(({ number, title, text, icon: Icon }, i) => (
          <Reveal key={title} delay={i * 70}>
            <article className="value-card">
              <div className="value-card__top"><span>{number}</span><Icon size={21} /></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal className="about__visual">
          <div className="about__image"><img src="/images/meet-lavita.webp" alt="La’Vita brand introduction with fresh natural produce" loading="lazy" /></div>
          <div className="about__seal"><Leaf /><span>Healthier choices<br />every day</span></div>
        </Reveal>
        <Reveal className="about__copy" delay={100}>
          <SectionHeading eyebrow="About La’Vita" title="More than a store. A wellness movement." />
          <p>La’Vita Health & Wellness Store was created to make healthier living more practical, accessible and sustainable.</p>
          <p>We believe wellness should not be complicated or reserved for people who can afford expensive programmes.</p>
          <p>From fresh fruits and healthy beverages to fitness, nutrition education, massage and community wellness initiatives, La’Vita is building an ecosystem that helps people move better, eat better and live better.</p>
          <blockquote>“Our mission is to make healthy living accessible, practical and sustainable for young people, athletes, professionals and communities.”</blockquote>
        </Reveal>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Our wellness ecosystem" title="What we do" copy="Nutrition, movement and everyday wellness — thoughtfully connected to help you build a life that feels better." /></Reveal>
        <div className="services__grid">
          {services.map(({ title, text, icon: Icon, message }, i) => (
            <Reveal key={title} delay={(i % 4) * 55}>
              <article className="service-card">
                <div className="service-card__icon"><Icon size={23} strokeWidth={1.7} /></div>
                <span className="service-card__number">{String(i + 1).padStart(2, '0')}</span>
                <h3>{title}</h3><p>{text}</p>
                {message && <WhatsAppLink message={whatsappMessages[message as 'massage' | 'fitness']} className="text-link">Ask about this <ArrowRight size={16} /></WhatsAppLink>}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FruitSalad() {
  return (
    <section id="fruit-salads" className="section fruit">
      <div className="container">
        <div className="fruit__intro">
          <Reveal><SectionHeading eyebrow="Freshly made" title="Meet the La’Vita Signature" copy="Fresh. Colourful. Filling. Made for your day." /></Reveal>
          <Reveal delay={80}><p className="fruit__base"><strong>The fresh base</strong><span>Watermelon</span><span>Cucumber</span><span>Apple</span></p></Reveal>
        </div>
        <div className="fruit__editorial">
          <Reveal className="fruit__photo">
            <img src="/images/fruit-salad-menu.webp" alt="La’Vita fruit salad combinations and ingredients" loading="lazy" />
            <div className="fruit__photo-tag"><Salad /> Made for Nigerian students</div>
          </Reveal>
          <div className="fruit__options">
            {saladOptions.map((option, i) => (
              <Reveal key={option.name} delay={i * 70}>
                <article className="fruit-option">
                  <span>0{i + 1}</span><div><small>{option.accent}</small><h3>{option.name}</h3><p>{option.ingredients}</p></div>
                </article>
              </Reveal>
            ))}
            <Reveal delay={220}>
              <div className="fruit__extras"><strong>Add something extra</strong><p>Pawpaw · Banana · Pineapple · Coconut flakes · Roasted groundnuts</p></div>
            </Reveal>
          </div>
        </div>
        <div className="pricing">
          <Reveal><div className="pricing__heading"><span className="eyebrow">Simple pricing</span><h3>Choose your cup</h3></div></Reveal>
          <div className="pricing__grid">
            {prices.map(({ size, price, note, featured }, i) => (
              <Reveal key={size} delay={i * 70}>
                <article className={`price-card ${featured ? 'price-card--featured' : ''}`}>
                  {featured && <span className="price-card__tag">Most popular</span>}
                  <small>{size}</small><strong>{price}</strong><p>{note}</p>
                  <WhatsAppLink message={whatsappMessages.fruit} className={featured ? 'button button--cream' : 'button button--outline'}>Order on WhatsApp <ArrowRight size={17} /></WhatsAppLink>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Fitness() {
  return (
    <>
      <section id="fitness" className="section fitness">
        <div className="container fitness__grid">
          <Reveal className="fitness__visual">
            <img src="/images/fitness-club.webp" alt="Nigerian students taking part in an accessible group fitness class" loading="lazy" />
            <div className="fitness__stamp"><span>Fitness</span><strong>without limits</strong></div>
          </Reveal>
          <Reveal className="fitness__copy" delay={100}>
            <SectionHeading eyebrow="La’Vita Fitness Club" title="Fitness without the barriers." light />
            <p>La’Vita Fitness Club makes exercise more accessible by focusing on practical workouts that can be performed with or without equipment.</p>
            <div className="fitness__highlight">You don’t need an expensive gym to get moving.</div>
            <div className="fitness__features">
              {fitnessFeatures.map(item => <span key={item}><Check size={15} /> {item}</span>)}
            </div>
            <div className="fitness__actions">
              <WhatsAppLink message={whatsappMessages.fitness} className="button button--cream">Join La’Vita Fitness Club <ArrowRight size={18} /></WhatsAppLink>
              <WhatsAppLink message={whatsappMessages.fitness} className="button button--dark-outline">Ask about programmes</WhatsAppLink>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="philosophy">
        <div className="container philosophy__grid">
          <Reveal><div><span className="eyebrow">Our fitness philosophy</span><p className="philosophy__quote">“Fitness should be accessible, practical and sustainable.”</p></div></Reveal>
          {[['Move', 'Make movement part of your everyday life.'], ['Build', 'Build strength, mobility and healthy habits gradually.'], ['Sustain', 'Choose routines you can actually maintain.']].map(([title, text], i) => (
            <Reveal key={title} delay={i * 55}><article><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

function Audiences() {
  return (
    <section id="wellness" className="section audiences">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Wellness that meets you" title="Built around real lives." copy="For training days, lecture halls, office hours and everything in between." center /></Reveal>
        <div className="audiences__grid">
          <Reveal>
            <article className="audience-card audience-card--athletes">
              <span className="audience-card__label">For athletes</span><h3>Built for athletes.</h3>
              <p>La’Vita supports athletes with practical nutrition and wellness guidance designed to complement training and performance.</p>
              <div className="audience-card__list">
                {athleteSupport.map(([item, Icon]) => <span key={item}><Icon size={17} /> {item}</span>)}
              </div>
              <WhatsAppLink message={whatsappMessages.general} className="text-link text-link--light">Talk to La’Vita about sports wellness <ArrowRight size={16} /></WhatsAppLink>
            </article>
          </Reveal>
          <Reveal delay={90}>
            <article className="audience-card audience-card--staff">
              <span className="audience-card__label">For staff & adults 40+</span><h3>Your health deserves attention too.</h3>
              <p>As responsibilities grow, movement, nutrition and recovery can easily take a back seat. We provide practical wellness options to help busy adults build healthier routines.</p>
              <div className="audience-card__concerns">
                {lifestyleConcerns.map(item => <span key={item}>{item}</span>)}
              </div>
              <div className="audience-card__support"><strong>How we can support you</strong><p>{audienceNeeds.join(' · ')}</p></div>
              <WhatsAppLink message={whatsappMessages.general} className="text-link">Start your wellness journey <ArrowRight size={16} /></WhatsAppLink>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Partnerships() {
  return (
    <section id="partnerships" className="section partnerships">
      <div className="container partnerships__grid">
        <div className="partnerships__intro">
          <Reveal>
            <SectionHeading eyebrow="Campus & institutional wellness" title="Building healthier campuses" copy="La’Vita is developing a strategic campus wellness model designed to work with universities and institutions." />
            <p className="partnerships__assurance"><ShieldCheck /> La’Vita works alongside institutions and qualified health professionals to promote healthier lifestyles.</p>
            <WhatsAppLink message={whatsappMessages.partnership}>Partner with La’Vita <ArrowRight size={18} /></WhatsAppLink>
          </Reveal>
        </div>
        <div className="partnerships__initiatives">
          {campusInitiatives.map((item, i) => <Reveal key={item} delay={(i % 5) * 40}><span><i>{String(i + 1).padStart(2, '0')}</i>{item}</span></Reveal>)}
        </div>
      </div>
      <div className="container fuoye">
        <Reveal className="fuoye__label"><span>Proposed initiative</span><small>Ekiti State · Nigeria</small></Reveal>
        <Reveal className="fuoye__content" delay={60}>
          <span className="eyebrow">Our vision for FUOYE</span><h3>A connected campus wellness ecosystem.</h3>
          <p>La’Vita is exploring a strategic partnership with the Federal University Oye-Ekiti (FUOYE) to build an integrated campus wellness ecosystem.</p>
          <p className="fuoye__areas">Sports nutrition · Affordable campus fitness · Staff wellness · Campus wellness points · Student ambassadors · Health talks · Fruit-tree planting · Sports-event support · Research and impact measurement</p>
          <WhatsAppLink message={whatsappMessages.partnership} className="text-link text-link--light">Explore partnership opportunities <ArrowRight size={16} /></WhatsAppLink>
        </Reveal>
      </div>
    </section>
  )
}

function WhyAndHow() {
  return (
    <section className="section why">
      <div className="container">
        <Reveal><SectionHeading eyebrow="The La’Vita difference" title="Why La’Vita?" center /></Reveal>
        <div className="why__grid">
          {reasons.map(([title, text, Icon], i) => <Reveal key={title} delay={(i % 3) * 55}><article><Icon size={23} /><h3>{title}</h3><p>{text}</p></article></Reveal>)}
        </div>
        <div className="journey">
          <Reveal><div className="journey__intro"><span className="eyebrow">How it works</span><h3>One choice at a time.</h3><p>Healthier living starts with the choices you make every day.</p></div></Reveal>
          <div className="journey__steps">
            {[['01', 'Discover', 'Explore our products and wellness services.'], ['02', 'Choose', 'Select what fits your lifestyle.'], ['03', 'Order / Join', 'Order through WhatsApp or join a fitness programme.'], ['04', 'Live better', 'Build healthier habits one day at a time.']].map(([n, title, text], i) => (
              <Reveal key={n} delay={i * 50}><article><span>{n}</span><h4>{title}</h4><p>{text}</p>{i < 3 && <ChevronRight aria-hidden="true" />}</article></Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialProof() {
  return (
    <section className="section proof">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Community voices" title="Growing with our community." copy="We’re making room for real customer experiences and measurable community impact." /></Reveal>
        <div className="testimonials">
          {[1, 2, 3].map((item, i) => <Reveal key={item} delay={i * 60}><article><Quote size={22} /><p>[Customer testimonial will be added here]</p><span>Future La’Vita customer story</span></article></Reveal>)}
        </div>
        <div className="impact">
          <div><span className="eyebrow">Community impact</span><p>Placeholder figures — real impact data will be published here as it becomes available.</p></div>
          {impactStats.map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}
        </div>
      </div>
    </section>
  )
}

function Social() {
  return (
    <section className="section social">
      <div className="container social__grid">
        <Reveal className="social__poster"><img src="/images/wellness-education.webp" alt="La’Vita wellness education graphic about thinking styles" loading="lazy" /></Reveal>
        <Reveal className="social__copy" delay={80}>
          <span className="social__icon"><Play fill="currentColor" /></span>
          <SectionHeading eyebrow="@lavita.health" title="Follow the wellness journey" copy="Practical nutrition. Fitness. Wellness tips. Healthy living." />
          <a className="button" href="https://www.tiktok.com/@lavita.health" target="_blank" rel="noreferrer">Follow @lavita.health <ArrowRight size={18} /></a>
        </Reveal>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section id="contact" className="final-cta">
      <div className="final-cta__pattern" />
      <div className="container final-cta__inner">
        <Reveal>
          <span className="eyebrow">Ready to live better?</span><h2>Your wellness journey starts here.</h2>
          <p>Small choices become habits. Habits become lifestyles. Let La’Vita help you make healthier choices every day.</p>
          <div className="final-cta__actions">
            <WhatsAppLink message={whatsappMessages.general} className="button button--cream"><MessageCircle size={18} /> Chat with La’Vita</WhatsAppLink>
            <WhatsAppLink message={whatsappMessages.fitness} className="button button--dark-outline">Join Fitness Club</WhatsAppLink>
            <WhatsAppLink message={whatsappMessages.partnership} className="button button--dark-outline">Partner with us</WhatsAppLink>
          </div>
        </Reveal>
        <Reveal className="final-cta__details" delay={70}>
          <div><MapPin /><span>Ado-Ekiti & Oye-Ekiti<br /><small>Ekiti State, Nigeria</small></span></div>
          <div><MessageCircle /><span>+234 901 469 3453<br /><small>Orders & enquiries</small></span></div>
          <div><Play /><span>@lavita.health<br /><small>Follow us on TikTok</small></span></div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand"><BrandLogo light /><p>Better Nutrition.<br />Better Movement.<br />Better Living.</p></div>
        {footerColumns.map(col => <div className="footer__links" key={col.title}><strong>{col.title}</strong>{col.links.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div>)}
        <div className="footer__contact"><strong>Stay connected</strong><a href={whatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer">+234 901 469 3453</a><a href="https://www.tiktok.com/@lavita.health" target="_blank" rel="noreferrer">TikTok · @lavita.health</a><p>KM 9, Holyland Avenue,<br />Ado-Ikere Road, Ado-Ekiti,<br />Ekiti State, Nigeria</p></div>
      </div>
      <div className="container footer__disclaimer">La’Vita provides wellness, fitness and nutrition education and products. Our services are not a substitute for professional medical diagnosis or treatment. Where medical attention is required, customers should consult an appropriately qualified healthcare professional.</div>
      <div className="container footer__bottom"><span>© 2026 La’Vita Health & Wellness Store. All rights reserved.</span><a href="#home">Back to top ↑</a></div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar /><main><Hero /><ValueProps /><About /><Services /><FruitSalad /><Fitness /><Audiences /><Partnerships /><WhyAndHow /><SocialProof /><Social /><Faq /><FinalCta /></main><Footer />
      <WhatsAppLink message={whatsappMessages.general} className="floating-whatsapp" ariaLabel="Chat with La’Vita on WhatsApp"><MessageCircle /><span>Chat with us</span></WhatsAppLink>
    </>
  )
}
