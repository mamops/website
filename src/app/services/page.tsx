"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const services = [
  {
    id: "web-development",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Web & App Development",
    subtitle: "Build fast. Ship fast. Stay flexible.",
    desc: "React and Next.js are where we're deepest — most of what we ship is built there. We also work comfortably in Vue, Nuxt, and Angular when that's what fits your team or an existing codebase. Python and FastAPI on the backend when performance, data, or AI workloads call for it.",
    features: [
      "React & Next.js applications (our core expertise)",
      "Vue, Nuxt & Angular when the project calls for it",
      "Node.js, Strapi & Fastify backends",
      "Python & FastAPI for data-heavy or AI-driven services",
      "API design and third-party integrations",
      "Dockerized deployment with CI/CD pipelines",
    ],
    tech: ["React", "Next.js"],
    techSupported: ["Node.js", "Fastify", "Strapi", "Vue", "Nuxt", "Angular", "Python", "FastAPI"],
  },
  {
    id: "ai-integration",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "AI Integration",
    subtitle: "Intelligence that earns its place in your product.",
    desc: "We integrate AI models and build agentic features tailored to what your users actually need — then optimize for cost so it doesn't quietly eat your margins. We know the difference between an AI feature that drives retention and one that's just a demo.",
    features: [
      "LLM integration (OpenAI, Anthropic, Gemini, open-source)",
      "AI agent design & orchestration",
      "Model selection & cost optimization",
      "RAG systems & knowledge bases",
      "Prompt engineering & evaluation",
      "Semantic search & embeddings",
    ],
    tech: ["OpenAI", "Anthropic", "Azure OpenAI", "LangChain", "Vector DBs", "FastAPI", "Agents"],
    techSupported: [],
  },
  {
    id: "ux-ui-design",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.88 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>
    ),
    title: "UX/UI Design",
    subtitle: "Design that gets built, not just admired.",
    desc: "We design interfaces with the build in mind from the start — so what you approve in Figma is what actually ships, on the timeline you were promised. Research-led, not trend-led — and we go further than flat screens when a product needs it, with 3D modeling and animation in-house.",
    features: [
      "User research & journey mapping",
      "Wireframing & interactive prototyping",
      "Design systems & component libraries",
      "3D modeling & animation (in-house, not outsourced)",
      "Accessibility (WCAG) by default",
      "Design-to-dev handoff (we do both, so nothing's lost)",
    ],
    tech: ["Figma", "Design Systems", "Prototyping", "3D Modeling & Animation"],
    techSupported: [],
  },
  {
    id: "cloud-infrastructure",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: "Cloud & Infrastructure",
    subtitle: "Your cloud, built to actually scale.",
    desc: "We design and manage infrastructure on AWS, Azure, and Supabase — picking the right one (or right combination) for your product instead of defaulting to whichever we know best. From MVP-friendly managed services to production-grade architecture.",
    features: [
      "AWS & Azure architecture design",
      "Supabase setup for fast-moving products",
      "Cost optimization & governance",
      "CI/CD pipelines & deployment automation",
      "Monitoring, alerting & incident response",
      "Security hardening & backups",
    ],
    tech: ["AWS", "Azure", "Supabase", "Docker", "GitHub Actions", "Terraform"],
    techSupported: [],
  },
  {
    id: "consulting",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Technical Consulting",
    subtitle: "The right call, before you've spent six months on the wrong one.",
    desc: "Architecture reviews, stack selection, and technical due diligence from people who've actually built and shipped on the options you're choosing between — not consultants reciting a framework comparison blog post.",
    features: [
      "Architecture review & system design",
      "Tech stack evaluation & selection",
      "Cloud migration strategy",
      "Codebase & technical due diligence",
      "Early hire / outsourcing guidance",
      "Roadmapping & technical prioritization",
    ],
    tech: ["Architecture", "Code Review", "Audits", "Roadmaps"],
    techSupported: [],
  },
];

export default function Services() {
  return (
    <div className="relative pt-32 pb-20">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-mono text-primary mb-3 block">{"// services"}</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Technical services
            <br />
            <span className="gradient-text">that ship</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Five core capabilities, one senior team. We work across the modern
            stack so you get the right tool for your product, not whatever tool
            we happen to sell.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 space-y-28 lg:space-y-32">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="scroll-mt-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold">{service.title}</h2>
                </div>
                <p className="text-primary font-mono text-sm mb-4">
                  {service.subtitle}
                </p>
                <p className="text-muted leading-relaxed">{service.desc}</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  {service.features.map((feature, j) => (
                    <motion.div
                      key={feature}
                      custom={j}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="flex items-start gap-3 p-4 rounded-lg border border-border bg-surface shadow-sm"
                    >
                      <svg
                        className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.techSupported.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-muted bg-surface rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {service.techSupported.length > 0 && (
                  <p className="mt-3 text-xs text-muted font-mono">
                    Primary stack in color; also supported when the project
                    calls for it.
                  </p>
                )}
              </div>
            </div>

            {i < services.length - 1 && (
              <div className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            )}
          </motion.div>
        ))}
      </section>

      {/* Process */}
      <section className="py-28 lg:py-40 mt-12 border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="text-sm font-mono text-primary mb-3 block">{"// how we work"}</span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Simple process.<br />Real results.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We listen. Understand your goals, constraints, and technical landscape." },
              { step: "02", title: "Plan", desc: "Clear roadmap with milestones, timelines, and deliverables. No surprises." },
              { step: "03", title: "Build", desc: "Iterative development with regular demos. You see progress every week." },
              { step: "04", title: "Launch", desc: "Deployment, monitoring, and handoff. We do not disappear after go-live." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative"
              >
                <div className="font-mono text-4xl font-bold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Not sure what you need?
            </h2>
            <p className="text-muted max-w-lg mx-auto mb-10">
              Tell us about your project. We&apos;ll figure out the right
              approach together — no strings attached.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-primary text-background font-medium rounded-lg hover:bg-primary-dim transition-colors text-lg"
            >
              Let&apos;s talk
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
