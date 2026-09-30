import { type ReactNode, useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  MoveUpRight,
  X,
} from 'lucide-react';

const profile = '/images/maya-profile.png';
const officeOne = '/images/maya-office-1.jpeg';
const officeTwo = '/images/maya-office-2.jpeg';

const navItems = [
  { label: 'Areas of support', href: '#support' },
  { label: 'Approach', href: '#approach' },
  { label: 'The office', href: '#office' },
  { label: 'FAQs', href: '#faqs' },
];

const supportAreas = [
  {
    number: '01',
    title: 'Anxiety',
    copy: 'For the mind that will not quiet, the body that stays braced, and the life that has grown smaller around worry.',
    accent: 'hsl(35 50% 91%)',
  },
  {
    number: '02',
    title: 'Trauma',
    copy: 'A steady, compassionate place to make sense of what happened and reconnect with the parts of you that had to go quiet.',
    accent: 'hsl(15 51% 90%)',
  },
  {
    number: '03',
    title: 'Burnout',
    copy: 'Support for the high-functioning exhaustion that asks you to reconsider what is sustainable, meaningful, and yours.',
    accent: 'hsl(185 18% 88%)',
  },
];

const faqs = [
  {
    question: 'What can I expect from a first session?',
    answer:
      'Our first conversation is a chance to slow down, share what brings you in, and see whether working together feels like the right fit. We will talk about your hopes for therapy and any questions you have about the process.',
  },
  {
    question: 'How do you work with anxiety and trauma?',
    answer:
      'Our work is collaborative and paced with care. Depending on your needs, we may draw from cognitive behavioral therapy, EMDR, mindfulness-based practices, and body-oriented techniques. Nothing is rushed; we build the right foundation first.',
  },
  {
    question: 'Do you offer a consultation?',
    answer:
      'Yes. A consultation is an opportunity to connect briefly, ask practical questions, and get a sense of whether this work feels aligned with what you are looking for. You can request one below.',
  },
  {
    question: 'Where are sessions held?',
    answer:
      'Sessions are held in a warm, private office in Santa Monica. The space is designed to feel calm, comfortable, and human.',
  },
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#top"
      className="group flex items-center gap-3"
      data-testid="link-logo"
      aria-label="Dr. Maya Reynolds, back to top"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--foreground)/.22)] font-display text-lg italic transition-transform group-hover:rotate-[-8deg]">
        M
      </span>
      <span className={compact ? 'sr-only' : 'flex flex-col leading-none'}>
        <span className="font-display text-[1.08rem] tracking-[-.02em]">Maya Reynolds</span>
        <span className="eyebrow mt-1 text-[hsl(var(--muted-foreground))]">Clinical psychology</span>
      </span>
    </a>
  );
}

function ButtonLink({
  children,
  href,
  dark = false,
}: {
  children: ReactNode;
  href: string;
  dark?: boolean;
}) {
  return (
    <a
      href={href}
      data-testid={`link-cta-${href.replace('#', '')}`}
      className={`group inline-flex items-center gap-3 rounded-full px-5 py-3.5 text-[0.78rem] font-semibold tracking-[.04em] transition-transform hover:-translate-y-0.5 ${
        dark
          ? 'bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:bg-[hsl(var(--foreground)/.88)]'
          : 'border border-[hsl(var(--foreground)/.22)] text-[hsl(var(--foreground))] hover:border-[hsl(var(--foreground)/.55)]'
      }`}
    >
      {children}
      <MoveUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.7} />
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    document.title = 'Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapist in Santa Monica';
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        'content',
        'A warm, grounded therapy practice for anxiety, trauma, and burnout in Santa Monica with Dr. Maya Reynolds, PsyD.',
      );
    }
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top" className="grain overflow-hidden bg-[hsl(var(--background))]">
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-12 lg:py-7">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="line-link text-[0.76rem] font-medium tracking-[.04em] text-[hsl(var(--foreground)/.74)] transition-colors hover:text-[hsl(var(--foreground))]"
                data-testid={`link-nav-${item.href.slice(1)}`}
              >
                {item.label}
              </a>
            ))}
            <ButtonLink href="#contact" dark>Begin here</ButtonLink>
          </nav>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--foreground)/.18)] px-4 py-2.5 text-sm lg:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
        {menuOpen && (
          <nav
            id="mobile-nav"
            className="mx-4 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card)/.98)] p-5 shadow-[var(--shadow)] lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-3.5 text-sm text-[hsl(var(--foreground)/.78)] hover:bg-[hsl(var(--secondary))]"
                  data-testid={`link-mobile-nav-${item.href.slice(1)}`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-xl bg-[hsl(var(--foreground))] px-3 py-3.5 text-center text-sm font-semibold text-[hsl(var(--background))]"
                data-testid="link-mobile-contact"
              >
                Begin here
              </a>
            </div>
          </nav>
        )}
      </header>

      <section className="relative min-h-[720px] bg-[hsl(35_50%_91%)] px-6 pb-20 pt-36 lg:min-h-[800px] lg:px-12 lg:pb-28 lg:pt-48">
        <div className="pointer-events-none absolute -right-24 top-28 h-72 w-72 rounded-full border border-[hsl(var(--accent)/.28)] lg:h-[30rem] lg:w-[30rem]" />
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[1fr_420px] lg:gap-24">
          <div className="relative z-10 max-w-3xl">
            <div className="animate-rise-in eyebrow mb-7 flex items-center gap-3 text-[hsl(var(--muted-foreground))]">
              <span className="h-px w-8 bg-[hsl(var(--accent))]" />
              Santa Monica, California
            </div>
            <h1 className="animate-rise-in delay-1 max-w-[750px] font-display text-[clamp(3.5rem,8.3vw,8.6rem)] leading-[.91] tracking-[-.065em] text-[hsl(var(--foreground))]">
              A place to <em className="font-normal">come back</em> to yourself.
            </h1>
            <p className="animate-rise-in delay-2 mt-8 max-w-[440px] text-lg leading-[1.65] text-[hsl(var(--foreground)/.7)]">
              Anxiety &amp; Trauma Therapist in Santa Monica. Thoughtful, grounded therapy for the parts of life that feel difficult to carry alone.
            </p>
            <div className="animate-rise-in delay-3 mt-9 flex flex-wrap items-center gap-5">
              <ButtonLink href="#contact" dark>Schedule a consultation</ButtonLink>
              <a href="#approach" className="line-link text-sm font-medium text-[hsl(var(--foreground)/.68)]" data-testid="link-hero-approach">
                Explore the approach
              </a>
            </div>
          </div>
          <div className="animate-soften-in relative mx-auto w-full max-w-[420px] lg:mt-12">
            <div className="absolute -inset-4 rounded-[55%_45%_48%_52%/43%_48%_52%_57%] border border-[hsl(var(--accent)/.5)]" />
            <div className="image-frame relative aspect-[.76] overflow-hidden rounded-[48%_48%_6%_6%/38%_38%_6%_6%] bg-[hsl(var(--muted))]">
              <img src={profile} alt="Dr. Maya Reynolds smiling in a white jacket" className="h-full w-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-8 -left-7 hidden max-w-[210px] rounded-2xl bg-[hsl(var(--card))] p-5 shadow-[var(--shadow)] sm:block">
              <p className="font-display text-xl leading-tight">Therapy that makes room for your whole self.</p>
              <p className="eyebrow mt-3 text-[hsl(var(--muted-foreground))]">Maya Reynolds, PsyD</p>
            </div>
          </div>
        </div>
        <a href="#support" className="absolute bottom-8 left-6 hidden items-center gap-3 text-[hsl(var(--muted-foreground))] lg:flex" data-testid="link-scroll-support">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[hsl(var(--foreground)/.2)]"><ArrowDownRight className="h-4 w-4" /></span>
          <span className="eyebrow">Scroll to explore</span>
        </a>
      </section>

      <section id="support" className="scroll-mt-12 bg-[hsl(var(--background))] px-6 py-24 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.35fr] lg:gap-24">
            <div>
              <span className="eyebrow text-[hsl(var(--accent))]">Areas of support</span>
              <h2 className="mt-5 max-w-md font-display text-5xl leading-[.98] tracking-[-.05em] sm:text-6xl">You do not have to keep pushing through.</h2>
            </div>
            <div>
              <p className="max-w-xl text-lg leading-[1.7] text-[hsl(var(--muted-foreground))]">Therapy can be a pause from performing okay. Together, we can listen closely to what your mind and body have been trying to tell you.</p>
              <div className="mt-12 border-t border-[hsl(var(--border))]">
                {supportAreas.map((area) => (
                  <article key={area.number} className="group grid gap-4 border-b border-[hsl(var(--border))] py-7 transition-colors hover:bg-[hsl(var(--secondary)/.45)] sm:grid-cols-[70px_1fr_auto] sm:items-start sm:gap-7 sm:px-4">
                    <span className="font-mono-label text-xs text-[hsl(var(--accent))]">{area.number}</span>
                    <div>
                      <h3 className="font-display text-3xl tracking-[-.03em]">{area.title}</h3>
                      <p className="mt-2 max-w-lg leading-[1.65] text-[hsl(var(--muted-foreground))]">{area.copy}</p>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center self-end rounded-full border border-[hsl(var(--foreground)/.14)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:self-start" style={{ backgroundColor: area.accent }}>
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="scroll-mt-12 bg-[hsl(var(--foreground))] px-6 py-24 text-[hsl(var(--background))] lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[.72fr_1fr] lg:gap-32">
          <div>
            <span className="eyebrow text-[hsl(var(--accent))]">The approach</span>
            <h2 className="mt-5 max-w-xl font-display text-5xl leading-[.98] tracking-[-.05em] sm:text-7xl">Warmth is a clinical skill.</h2>
            <div className="mt-12 hidden border-l border-[hsl(var(--background)/.3)] pl-6 sm:block">
              <p className="font-display text-2xl italic leading-[1.25] text-[hsl(var(--background)/.8)]">“The relationship is part of the work.”</p>
            </div>
          </div>
          <div className="max-w-xl lg:pt-12">
            <p className="text-xl leading-[1.65] text-[hsl(var(--background)/.78)]">I believe therapy works best when it is both deeply human and thoughtfully informed. We will move at a pace that honors your nervous system, with curiosity instead of judgment.</p>
            <p className="mt-7 leading-[1.75] text-[hsl(var(--background)/.58)]">Our work may include cognitive behavioral therapy, EMDR, mindfulness-based practices, and body-oriented techniques. These are not a checklist. They are invitations to notice, understand, and create new choices.</p>
            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-[hsl(var(--background)/.2)] pt-7 sm:grid-cols-4">
              {['Collaborative', 'Grounded', 'Trauma-informed', 'Curious'].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-[hsl(var(--background)/.75)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" strokeWidth={1.5} />{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[hsl(15_51%_90%)] px-6 py-24 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[.8fr_1fr] lg:gap-24">
          <div className="max-w-xl lg:pl-[8%]">
            <span className="eyebrow text-[hsl(var(--accent))]">A little about me</span>
            <h2 className="mt-5 font-display text-5xl leading-[.98] tracking-[-.05em] sm:text-6xl">You bring the expertise of your own life.</h2>
            <p className="mt-8 text-lg leading-[1.7] text-[hsl(var(--foreground)/.68)]">I am Dr. Maya Reynolds, a licensed clinical psychologist in Santa Monica. My role is not to tell you who to be. It is to offer a steady, compassionate space where you can hear yourself more clearly.</p>
            <p className="mt-5 leading-[1.75] text-[hsl(var(--foreground)/.58)]">Whether you are navigating a season of anxiety, processing trauma, or feeling the cost of burnout, we can begin exactly where you are.</p>
            <a href="#contact" className="line-link mt-9 inline-flex items-center gap-3 text-sm font-semibold" data-testid="link-profile-contact">Learn more about working together <ArrowUpRight className="h-4 w-4" /></a>
          </div>
          <div className="image-frame relative mx-auto w-full max-w-[520px]">
            <div className="absolute -left-5 -top-5 h-20 w-20 rounded-full border border-[hsl(var(--accent)/.4)] sm:-left-8 sm:-top-8 sm:h-28 sm:w-28" />
            <img src={profile} alt="Portrait of Dr. Maya Reynolds" className="relative aspect-[.88] w-full rounded-[2rem_2rem_.5rem_2rem] object-cover object-top shadow-[var(--shadow-lg)]" />
            <div className="absolute -bottom-5 -right-4 rounded-xl bg-[hsl(var(--foreground))] px-5 py-4 text-[hsl(var(--background))] shadow-[var(--shadow)] sm:-right-8">
              <p className="font-mono-label text-[.63rem] tracking-[.13em] text-[hsl(var(--background)/.65)]">Licensed clinical psychologist</p>
              <p className="mt-1 font-display text-xl">Maya Reynolds, PsyD</p>
            </div>
          </div>
        </div>
      </section>

      <section id="office" className="scroll-mt-12 bg-[hsl(var(--background))] px-6 py-24 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow text-[hsl(var(--accent))]">Our office</span>
              <h2 className="mt-5 max-w-2xl font-display text-5xl leading-[.98] tracking-[-.05em] sm:text-7xl">A softer place to land.</h2>
            </div>
            <p className="max-w-xs text-sm leading-[1.7] text-[hsl(var(--muted-foreground))]">A calm, private office in Santa Monica, made for honest conversations and unhurried beginnings.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-[1.3fr_.7fr] md:items-end">
            <figure className="image-frame group relative overflow-hidden rounded-[1.5rem_1.5rem_.4rem_1.5rem]">
              <img src={officeOne} alt="Bright Santa Monica therapy office with a sofa, armchair, and tall windows" className="aspect-[1.28] w-full object-cover" />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-[hsl(var(--card)/.88)] px-4 py-2 text-xs text-[hsl(var(--foreground)/.76)] backdrop-blur-sm">The sitting room</figcaption>
            </figure>
            <figure className="image-frame group relative overflow-hidden rounded-[.4rem_1.5rem_1.5rem_1.5rem] md:mb-[-12%]">
              <img src={officeTwo} alt="Warm therapy office with bookshelves, sofa, and natural light" className="aspect-[.9] w-full object-cover" />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-[hsl(var(--card)/.88)] px-4 py-2 text-xs text-[hsl(var(--foreground)/.76)] backdrop-blur-sm">A room to exhale</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="faqs" className="scroll-mt-12 bg-[hsl(185_18%_88%)] px-6 py-24 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
          <div>
            <span className="eyebrow text-[hsl(var(--accent))]">Good to know</span>
            <h2 className="mt-5 font-display text-5xl leading-[.98] tracking-[-.05em] sm:text-6xl">A few answers before we begin.</h2>
          </div>
          <div className="border-t border-[hsl(var(--foreground)/.18)]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className="border-b border-[hsl(var(--foreground)/.18)]">
                  <button type="button" className="flex w-full items-center justify-between gap-6 py-6 text-left" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen} data-testid={`button-faq-${index}`}>
                    <span className="font-display text-xl sm:text-2xl">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && <p className="max-w-2xl pb-7 pr-8 leading-[1.7] text-[hsl(var(--foreground)/.67)]">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-12 bg-[hsl(var(--accent))] px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[1fr_.8fr] lg:gap-28">
          <div>
            <span className="eyebrow text-[hsl(var(--accent-foreground)/.7)]">Start with a conversation</span>
            <h2 className="mt-5 max-w-2xl font-display text-6xl leading-[.92] tracking-[-.06em] text-[hsl(var(--accent-foreground))] sm:text-8xl">You can begin here.</h2>
            <p className="mt-8 max-w-md text-lg leading-[1.65] text-[hsl(var(--accent-foreground)/.72)]">Tell me a little about what is bringing you in. I will be in touch with next steps for a consultation.</p>
            <p className="mt-12 font-mono-label text-xs tracking-[.12em] text-[hsl(var(--accent-foreground)/.6)]">No pressure. No perfect words required.</p>
          </div>
          <div className="rounded-2xl bg-[hsl(var(--card))] p-6 shadow-[var(--shadow-lg)] sm:p-8">
            {formSent ? (
              <div className="flex min-h-[350px] flex-col justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--secondary))]"><Check className="h-5 w-5" /></span>
                <h3 className="mt-7 font-display text-4xl leading-none">Thank you for reaching out.</h3>
                <p className="mt-4 max-w-sm leading-[1.7] text-[hsl(var(--muted-foreground))]">Your note is ready to be connected with Dr. Reynolds. She will be in touch with next steps.</p>
                <button type="button" onClick={() => setFormSent(false)} className="line-link mt-8 w-fit text-sm font-semibold" data-testid="button-send-another">Send another note</button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={(event) => { event.preventDefault(); setFormSent(true); }} data-testid="form-consultation">
                <div>
                  <label htmlFor="name" className="eyebrow text-[hsl(var(--muted-foreground))]">Your name</label>
                  <input id="name" name="name" required placeholder="How should I address you?" className="mt-2 w-full border-b border-[hsl(var(--border))] bg-transparent px-0 py-3 text-base outline-none placeholder:text-[hsl(var(--muted-foreground)/.65)] focus:border-[hsl(var(--accent))]" data-testid="input-name" />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow text-[hsl(var(--muted-foreground))]">Email address</label>
                  <input id="email" name="email" type="email" required placeholder="Where can I reach you?" className="mt-2 w-full border-b border-[hsl(var(--border))] bg-transparent px-0 py-3 text-base outline-none placeholder:text-[hsl(var(--muted-foreground)/.65)] focus:border-[hsl(var(--accent))]" data-testid="input-email" />
                </div>
                <div>
                  <label htmlFor="message" className="eyebrow text-[hsl(var(--muted-foreground))]">A little about what brings you in</label>
                  <textarea id="message" name="message" required rows={4} placeholder="You only need to share what feels comfortable." className="mt-2 w-full resize-none border-b border-[hsl(var(--border))] bg-transparent px-0 py-3 text-base outline-none placeholder:text-[hsl(var(--muted-foreground)/.65)] focus:border-[hsl(var(--accent))]" data-testid="input-message" />
                </div>
                <button type="submit" className="group mt-2 inline-flex items-center gap-3 rounded-full bg-[hsl(var(--foreground))] px-5 py-3.5 text-sm font-semibold text-[hsl(var(--background))] transition-transform hover:-translate-y-0.5" data-testid="button-submit-consultation">
                  Request a consultation <MoveUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-[hsl(var(--foreground))] px-6 py-10 text-[hsl(var(--background))] lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Logo compact />
            <p className="mt-5 max-w-xs text-sm leading-[1.65] text-[hsl(var(--background)/.57)]">A thoughtful, grounded therapy practice for anxiety, trauma, and burnout in Santa Monica.</p>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-[hsl(var(--background)/.66)]">
            {navItems.slice(0, 3).map((item) => <a key={item.href} href={item.href} className="line-link hover:text-[hsl(var(--background))]" data-testid={`link-footer-${item.href.slice(1)}`}>{item.label}</a>)}
          </div>
          <div className="text-left sm:text-right">
            <p className="eyebrow text-[hsl(var(--background)/.42)]">Santa Monica, California</p>
            <p className="mt-2 text-xs text-[hsl(var(--background)/.42)]">© {new Date().getFullYear()} Maya Reynolds, PsyD</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
