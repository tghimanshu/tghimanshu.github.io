import { useEffect, useRef, useState } from 'react'

const experience = [
  {
    role: 'Senior Engineer',
    company: 'Go Digital Technology Consulting LLP',
    period: 'Aug 2025 – Present',
    location: 'Mumbai, India',
    highlights: [
      'Delivered Python backend services and workflow pipelines for energy analytics across 4 reporting tracks, reducing reporting turnaround time by 45%.',
      'Consolidated 5+ internal tools into one LLM-assisted reporting platform, reducing duplicate builds by 50% and ad-hoc requests by 40%.',
      'Standardized API contracts, logging, and error handling across 4 teams, reducing rollback incidents by 35%.',
      'Introduced automated validation checks for reporting workflows, reducing data-quality issues by 30% and speeding release readiness by 25%.',
    ],
  },
  {
    role: 'GenAI Specialist',
    company: 'Google (PjM App.)',
    period: 'Jul 2023 – Jul 2025',
    location: 'Mumbai, India',
    highlights: [
      'Delivered backend + GenAI solutions for 28 enterprise programs across Retail, Automobile, and Media on Python, Next.js, Vertex AI, and Google Cloud, reducing pilot-to-production cycle time by 35%.',
      'Built forecasting and blocker dashboards for 600+ customers tracking $200M+ revenue, and automated reporting across 11 teams to reduce manual effort by 95%.',
      'Co-designed target architectures with 6 enterprise customers and resolved critical API/cloud incidents, sustaining 95%+ milestone adherence.',
      'Productized reusable GenAI integration patterns adopted across 8 accounts, reducing new-solution onboarding effort by 40%.',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Go Digital Technology Consulting Pvt. Ltd.',
    period: 'Jun 2022 – Jul 2023',
    location: 'Mumbai, India',
    highlights: [
      'Migrated 12+ on-prem applications and workflows to cloud-native services, improving processing performance by 60% and reducing manual runbook steps by 80%.',
      'Built 6+ field-operations apps and backend data pipelines, improving execution efficiency by 60% and management visibility by 40%.',
    ],
  },
]

const projects = [
  {
    name: 'AI Agent Workflows',
    stack: ['Python', 'Vertex AI ADK', 'Gemini API', 'GCP'],
    highlights: [
      'Designed and productionized 5+ Python AI-agent workflows with tool calling, retrieval, and guardrails, improving automation reliability by 35%.',
      'Defined schema-driven structured outputs and retry/error-handling contracts, reducing failed tool runs by 40% and manual intervention by 60%.',
    ],
  },
  {
    name: 'Internal BI Platform',
    stack: ['Python', 'Plotly Dash', 'Aurora PostgreSQL', 'Athena'],
    highlights: [
      'Consolidated reporting across 3+ business units into a unified BI platform with normalized datasets and incremental refresh, reducing report preparation time by 50%.',
      'Separated data/query layers from dashboard UI and standardized query interfaces, reducing engineering dependency for SQL support by 55%.',
    ],
  },
]

const skillGroups = [
  {
    title: 'Backend & AI',
    skills: [
      'Python',
      'FastAPI',
      'Flask',
      'Vertex AI',
      'LangChain',
      'OpenAI / Claude / Gemini APIs',
      'RAG',
      'Tool Calling',
      'Guardrails',
    ],
  },
  {
    title: 'Software Engineering',
    skills: [
      'C++',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'API Design',
      'System Design',
    ],
  },
  {
    title: 'Data & Cloud',
    skills: [
      'PostgreSQL',
      'BigQuery',
      'SQL',
      'Data Pipelines',
      'GCP',
      'AWS',
    ],
  },
  {
    title: 'Infra',
    skills: ['Docker', 'Terraform', 'GitHub Actions', 'CI/CD', 'Linux', 'Git'],
  },
]

const certifications = [
  'GCP Professional Cloud Architect',
  'GCP Generative AI Leader',
  'GCP Associate Cloud Engineer',
]

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = navItems.map((item) => item.href.replace('#', ''))

const isTypingTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return (
    target.isContentEditable ||
    target.tagName === 'INPUT' ||
    target.tagName === 'TEXTAREA' ||
    target.tagName === 'SELECT'
  )
}

const getCurrentSectionIndex = (ids: string[]) => {
  const referenceY = window.scrollY + 12
  let activeIndex = 0

  ids.forEach((id, index) => {
    const section = document.getElementById(id)

    if (section && section.offsetTop <= referenceY) {
      activeIndex = index
    }
  })

  return activeIndex
}

const metrics = [
  {
    value: '28',
    label: 'enterprise programs delivered',
    detail: 'backend + GenAI implementations',
  },
  {
    value: '600+',
    label: 'customers monitored',
    detail: 'forecasting and blocker dashboards',
  },
  {
    value: '$200M+',
    label: 'revenue tracked',
    detail: 'analytics and operational visibility',
  },
  {
    value: '95%',
    label: 'manual effort reduced',
    detail: 'reporting automation across 11 teams',
  },
  {
    value: '35%',
    label: 'cycle-time improvement',
    detail: 'pilot-to-production acceleration',
  },
]

const quickFacts = [
  'Senior Software Engineer focused on backend and AI systems.',
  '3.5+ years shipping cloud-native products across GCP and AWS.',
  'Building reliable APIs, agent workflows, and data platforms.',
]

function App() {
  const year = new Date().getFullYear()
  const [showShortcuts, setShowShortcuts] = useState(false)
  const pendingGTimeout = useRef<number | null>(null)

  useEffect(() => {
    const scrollToTop = () => {
      if (window.location.hash) {
        window.history.replaceState(
          null,
          '',
          `${window.location.pathname}${window.location.search}`,
        )
      }

      const scrollingElement =
        document.scrollingElement ?? document.documentElement
      scrollingElement.scrollTop = 0
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      window.scrollTo(0, 0)
    }

    const scrollToSection = (id: string) => {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    const moveBy = (delta: number) => {
      const firstSectionTop = document.getElementById(sectionIds[0])?.offsetTop ?? 0

      if (delta < 0 && window.scrollY <= firstSectionTop + 8) {
        scrollToTop()
        return
      }

      const currentIndex = getCurrentSectionIndex(sectionIds)

      if (delta < 0 && currentIndex === 0) {
        scrollToTop()
        return
      }

      const targetIndex = Math.max(
        0,
        Math.min(sectionIds.length - 1, currentIndex + delta),
      )

      scrollToSection(sectionIds[targetIndex])
    }

    const clearPendingG = () => {
      if (pendingGTimeout.current !== null) {
        window.clearTimeout(pendingGTimeout.current)
        pendingGTimeout.current = null
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey
      ) {
        return
      }

      if (isTypingTarget(event.target)) {
        return
      }

      if (event.key === 'Escape') {
        setShowShortcuts(false)
        clearPendingG()
        return
      }

      if (event.key === '?') {
        event.preventDefault()
        setShowShortcuts((value) => !value)
        clearPendingG()
        return
      }

      if (event.key === 'g') {
        if (pendingGTimeout.current !== null) {
          event.preventDefault()
          clearPendingG()
          scrollToTop()
          return
        }

        pendingGTimeout.current = window.setTimeout(() => {
          pendingGTimeout.current = null
        }, 420)
        return
      }

      clearPendingG()

      if (event.key === 'j') {
        event.preventDefault()
        moveBy(1)
        return
      }

      if (event.key === 'k') {
        event.preventDefault()
        moveBy(-1)
        return
      }

      if (event.key === 'G') {
        event.preventDefault()
        scrollToSection('contact')
        return
      }

      if (event.key === 'r') {
        event.preventDefault()
        window.open('/Himanshu-Gohil-CV.pdf', '_blank', 'noopener,noreferrer')
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      clearPendingG()
    }
  }, [])

  return (
    <div className="terminal-shell relative min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--text)]">
      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color:var(--bg-elevated)]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-10">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-sm bg-rose-300/85" />
              <span className="h-2.5 w-2.5 rounded-sm bg-amber-300/85" />
              <span className="h-2.5 w-2.5 rounded-sm bg-emerald-300/85" />
            </div>
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-[var(--muted)]">
              ~/.config/himanshu
            </p>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="status-tab">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="/Himanshu-Gohil-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="terminal-btn terminal-btn-primary"
          >
            open resume
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-10 md:pb-24 md:pt-14">
        <div className="mb-6 flex items-center justify-between gap-3 border-b border-[var(--border-soft)] pb-3">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[var(--muted)]">
            normal mode
          </p>
          <button
            type="button"
            onClick={() => setShowShortcuts((value) => !value)}
            className="terminal-btn text-[0.62rem]"
          >
            {showShortcuts ? 'hide shortcuts' : 'show shortcuts'} [?]
          </button>
        </div>

        {showShortcuts ? (
          <div className="mb-8 flex flex-wrap gap-x-4 gap-y-1.5 border-b border-[var(--border-soft)] pb-3 font-mono text-[0.64rem] uppercase tracking-[0.12em] text-[var(--muted-strong)]">
            <span>j next</span>
            <span>k prev</span>
            <span>gg top</span>
            <span>G contact</span>
            <span>r resume</span>
            <span>esc close</span>
          </div>
        ) : null}

        <section id="about" className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border-l border-[var(--border-soft)] pl-5 md:pl-6">
            <div className="mb-5 flex items-center justify-between gap-3 border-b border-[var(--border-soft)] pb-3">
              <p className="pane-title">about.md</p>
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.14em] text-[var(--muted)]">
                nvim --clean
              </p>
            </div>

            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--muted)]">
              Developer Portfolio
            </p>

            <div className="mt-4 space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-100 md:text-6xl">
                Himanshu Gohil
              </h1>
              <p className="text-base text-slate-300 md:text-lg">
                Senior Software Engineer — Backend & AI Systems
              </p>
            </div>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
              I design resilient backend platforms and production-grade GenAI
              workflows that move from idea to business value. My work combines
              API engineering, cloud architecture, and automation systems that
              scale reliably under enterprise constraints.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <a
                className="terminal-btn terminal-btn-primary"
                href="/Himanshu-Gohil-CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                resume
              </a>
              <a
                className="terminal-btn"
                href="mailto:himanshugohil234@gmail.com"
              >
                email
              </a>
              <a
                className="terminal-btn"
                href="https://github.com/tghimanshu"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
              <a
                className="terminal-btn"
                href="https://www.linkedin.com/in/tghimanshu"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
            </div>
          </div>

          <aside className="border-l border-[var(--border-soft)] pl-5 md:pl-6">
            <div className="mb-5 flex items-center justify-between gap-3 border-b border-[var(--border-soft)] pb-3">
              <p className="pane-title">session://status</p>
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.14em] text-emerald-200">
                online
              </p>
            </div>

            <p className="font-mono text-xs text-[var(--muted)]">
              ~/backend-ai $ status --snapshot
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-200">
              {quickFacts.map((fact) => (
                <li key={fact} className="flex gap-3">
                  <span className="prompt-prefix">$</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-[var(--border-soft)] pt-4">
              <p className="pane-title">core stack</p>
              <p className="mt-2 text-sm text-slate-200">
                Python, FastAPI, Vertex AI, LangChain, PostgreSQL, BigQuery,
                Docker, Terraform, CI/CD
              </p>
            </div>
          </aside>
        </section>

        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between gap-3 border-b border-[var(--border-soft)] pb-3">
            <p className="pane-title">metrics.log</p>
            <span className="cmd-chip">tail -f</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {metrics.map((metric) => (
              <article key={metric.label} className="border-l border-[var(--border-soft)] pl-4">
                <p className="font-mono text-2xl font-semibold text-emerald-200">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-200">
                  {metric.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                  {metric.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="relative mt-14 pt-10 md:mt-16 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[var(--border-soft)]"
        >
          <div className="mb-6 flex items-center justify-between gap-3 border-b border-[var(--border-soft)] pb-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
              <span className="mr-2 font-mono text-sm text-emerald-200">$</span>
              Experience
            </h2>
            <span className="cmd-chip">tmux:1</span>
          </div>
          <div className="space-y-5">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="border-l border-[var(--border-soft)] pl-5 md:pl-6"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">
                      {item.role}
                    </h3>
                    <p className="text-sm text-slate-300 md:text-base">
                      {item.company} · {item.location}
                    </p>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)] md:text-sm md:normal-case md:tracking-normal">
                    {item.period}
                  </p>
                </div>
                <ul className="mt-4 space-y-2.5 pl-5 text-sm leading-relaxed text-slate-300 md:text-base">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="list-disc marker:text-emerald-200">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="relative mt-14 pt-10 md:mt-16 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[var(--border-soft)]"
        >
          <div className="mb-6 flex items-center justify-between gap-3 border-b border-[var(--border-soft)] pb-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
              <span className="mr-2 font-mono text-sm text-emerald-200">$</span>
              Selected Projects
            </h2>
            <span className="cmd-chip">tmux:2</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="border-l border-[var(--border-soft)] pl-5 md:pl-6">
                <h3 className="text-lg font-semibold text-slate-100">
                  {project.name}
                </h3>

                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                  {project.stack.map((item) => (
                    <span
                      key={`${project.name}-${item}`}
                      className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-[var(--muted-strong)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 space-y-2.5 pl-5 text-sm leading-relaxed text-slate-300">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="list-disc marker:text-emerald-200">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="relative mt-14 pt-10 md:mt-16 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[var(--border-soft)]"
        >
          <div className="mb-6 flex items-center justify-between gap-3 border-b border-[var(--border-soft)] pb-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
              <span className="mr-2 font-mono text-sm text-emerald-200">$</span>
              Skills Matrix
            </h2>
            <span className="cmd-chip">tmux:3</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="border-l border-[var(--border-soft)] pl-5 md:pl-6"
              >
                <h3 className="text-base font-semibold text-slate-100">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={`${group.title}-${skill}`}
                      className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-slate-300/95"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="certifications"
          className="relative mt-14 pt-10 md:mt-16 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[var(--border-soft)]"
        >
          <div className="mb-6 flex items-center justify-between gap-3 border-b border-[var(--border-soft)] pb-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
              <span className="mr-2 font-mono text-sm text-emerald-200">$</span>
              Education + Certifications
            </h2>
            <span className="cmd-chip">tmux:4</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="border-l border-[var(--border-soft)] pl-5 md:pl-6">
              <h3 className="text-xl font-semibold tracking-tight text-slate-100 md:text-2xl">
                Education
              </h3>
              <div className="mt-4 space-y-1.5 text-sm text-slate-300 md:text-base">
                <p className="font-medium text-slate-100">
                  B.Sc. in Information Technology
                </p>
                <p>Ghanshyamdas Saraf College · Mumbai, India</p>
                <p>2019 – 2022 · CGPA 9.32 / 10</p>
              </div>
            </article>

            <article className="border-l border-[var(--border-soft)] pl-5 md:pl-6">
              <h3 className="text-xl font-semibold tracking-tight text-slate-100 md:text-2xl">
                Certifications
              </h3>
              <ul className="mt-4 space-y-2.5 pl-5 text-sm text-slate-300 md:text-base">
                {certifications.map((certification) => (
                  <li
                    key={certification}
                    className="list-disc marker:text-emerald-200"
                  >
                    {certification}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <footer
          id="contact"
          className="relative mt-14 pt-10 md:mt-16 md:pt-12 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[var(--border-soft)]"
        >
          <div className="mb-6 flex items-center justify-between gap-3 border-b border-[var(--border-soft)] pb-3">
            <p className="pane-title">contact.sh</p>
            <span className="cmd-chip">tmux:5</span>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
            Let’s build the next high-impact backend + AI product.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            Open to engineering opportunities where reliable systems, cloud
            architecture, and practical GenAI can create measurable business
            outcomes.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5 text-sm">
            <a
              className="terminal-btn terminal-btn-primary normal-case tracking-normal"
              href="mailto:himanshugohil234@gmail.com"
            >
              himanshugohil234@gmail.com
            </a>
            <a
              className="terminal-btn normal-case tracking-normal"
              href="tel:+919082233297"
            >
              +91 90822 33297
            </a>
            <a
              className="terminal-btn"
              href="https://www.linkedin.com/in/tghimanshu"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-8 font-mono text-xs text-[var(--muted)]">
            © {year} Himanshu Gohil
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
