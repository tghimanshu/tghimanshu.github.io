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

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <main className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        <section className="space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
            Portfolio
          </p>
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
              Himanshu Gohil
            </h1>
            <p className="text-lg text-zinc-700">
              Senior Software Engineer | Backend & AI Systems | Mumbai, India
            </p>
          </div>
          <p className="max-w-3xl text-base leading-relaxed text-zinc-600 md:text-lg">
            Senior Software Engineer with 3.5+ years building backend and GenAI
            systems across GCP and AWS. Delivered 28 enterprise solutions,
            scaled analytics for 600+ customers tracking $200M+, and automated
            reporting across 11 teams with up to 95% effort reduction.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 text-sm">
            <a
              className="rounded-full border border-zinc-300 px-4 py-2 text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900"
              href="mailto:himanshugohil234@gmail.com"
            >
              himanshugohil234@gmail.com
            </a>
            <a
              className="rounded-full border border-zinc-300 px-4 py-2 text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900"
              href="tel:+919082233297"
            >
              +91 90822 33297
            </a>
            <a
              className="rounded-full border border-zinc-300 px-4 py-2 text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900"
              href="https://www.linkedin.com/in/tghimanshu"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="rounded-full border border-zinc-300 px-4 py-2 text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900"
              href="https://github.com/tghimanshu"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>

        <section className="mt-14 border-t border-zinc-200 pt-10 md:mt-16 md:pt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
            Experience
          </h2>
          <div className="mt-6 space-y-5">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm md:p-6"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">
                      {item.role}
                    </h3>
                    <p className="text-zinc-600">
                      {item.company} · {item.location}
                    </p>
                  </div>
                  <p className="text-sm text-zinc-500">{item.period}</p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 md:text-base">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-zinc-200 pt-10 md:mt-16 md:pt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
            Selected Projects
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm md:p-6"
              >
                <h3 className="text-lg font-semibold text-zinc-900">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  {project.stack.join(' · ')}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-700">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-zinc-200 pt-10 md:mt-16 md:pt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
            Skills
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-base font-semibold text-zinc-900">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={`${group.title}-${skill}`}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-zinc-200 pt-10 md:mt-16 md:pt-12">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm md:p-6">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                Education
              </h2>
              <div className="mt-4 space-y-1 text-sm text-zinc-700 md:text-base">
                <p className="font-medium text-zinc-900">
                  B.Sc. in Information Technology
                </p>
                <p>Ghanshyamdas Saraf College · Mumbai, India</p>
                <p>2019 – 2022 · CGPA 9.32 / 10</p>
              </div>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm md:p-6">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                Certifications
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700 md:text-base">
                {certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <footer className="mt-14 border-t border-zinc-200 pt-8 text-sm text-zinc-500 md:mt-16">
          <p>
            Open to backend and AI engineering opportunities. Reach out at{' '}
            <a
              className="font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900"
              href="mailto:himanshugohil234@gmail.com"
            >
              himanshugohil234@gmail.com
            </a>
            .
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
