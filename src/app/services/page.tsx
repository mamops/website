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
    id: "ai-integration",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "AI Integration",
    subtitle: "Intelligence that actually works.",
    desc: "We integrate AI models, build intelligent agents, and optimize for cost and performance. We know the difference between hype and value, and we engineer solutions that give you the optimal return on every dollar spent.",
    features: [
      "LLM integration (GPT, Claude, Gemini, open-source)",
      "AI agent design & orchestration",
      "Model selection & cost optimization",
      "RAG systems & knowledge bases",
      "Prompt engineering & fine-tuning",
      "Semantic search & embeddings",
    ],
    tech: ["OpenAI", "Azure OpenAI", "LangChain", "Semantic Kernel", "Vector DBs", "Agents"],
  },
  {
    id: "web-development",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Web Development",
    subtitle: "Build fast. Ship fast.",
    desc: "We build modern web applications using the latest frameworks and best practices. From complex SaaS platforms to marketing sites, we engineer for performance and maintainability.",
    features: [
      "Next.js & React applications",
      "API design and implementation",
      "Performance optimization",
      "Responsive, accessible interfaces",
      "Real-time features & WebSockets",
      "Third-party integrations",
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    id: "devops",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "DevOps",
    subtitle: "Automate everything. Ship with confidence.",
    desc: "We set up CI/CD pipelines, infrastructure as code, monitoring, and container orchestration. Our goal: make deployments boring and reliable.",
    features: [
      "CI/CD pipeline design & implementation",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Container orchestration (Kubernetes, Docker)",
      "Monitoring & alerting systems",
      "Security hardening & compliance",
      "Incident response automation",
    ],
    tech: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus", "Grafana"],
  },
  {
    id: "consulting",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Consulting",
    subtitle: "Strategy that actually works.",
    desc: "We help you make the right technical decisions. Architecture reviews, tech stack selection, team structure, and roadmapping from people who have been there.",
    features: [
      "Architecture review & design",
      "Tech stack evaluation & selection",
      "Cloud migration strategy",
      "Team structure & hiring guidance",
      "Technical due diligence",
      "Vendor evaluation & negotiation",
    ],
    tech: ["Architecture", "Strategy", "Code Review", "Workshops", "Audits", "Roadmaps"],
  },
  {
    id: "azure",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: "Azure Cloud",
    subtitle: "Your cloud, optimized.",
    desc: "We design, deploy, and manage Azure environments. From lift-and-shift to cloud-native, we make sure you are getting the most out of your cloud investment.",
    features: [
      "Azure architecture design",
      "Cost optimization & governance",
      "Migration planning & execution",
      "Security & compliance (SOC2, HIPAA)",
      "Disaster recovery & backup",
      "Performance monitoring & tuning",
    ],
    tech: ["Azure", "ARM/Bicep", "Azure DevOps", "Entra ID", "Cosmos DB", "Azure Functions"],
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
            <span className="gradient-text">that deliver</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            We offer five core services, each backed by deep expertise and a
            track record of shipping real results. No fluff, no filler.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, j) => (
                    <motion.div
                      key={feature}
                      custom={j}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="flex items-start gap-3 p-4 rounded-lg border border-border bg-surface"
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
                </div>
              </div>
            </div>

            {i < services.length - 1 && (
              <div className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            )}
          </motion.div>
        ))}
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 mt-12 border-y border-border bg-surface">
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
      <section className="py-24 lg:py-32">
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
              Tell us about your project. We will figure out the best approach
              together, no strings attached.
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
