"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Tablabaki",
    tagline: "A fully web-based backgammon platform with a custom rules engine.",
    description:
      "Tablabaki brings backgammon online with support for multiple regional rule variants — including parsing and codifying rules that aren't standardized anywhere else online. Game sessions, user profiles, and match data are all handled by a Python backend built for real-time play.",
    built:
      "Frontend in React, a FastAPI backend handling game sessions, user profiles, and a custom rules engine supporting multiple backgammon variants, PostgreSQL for storage, fully Dockerized and deployed on a self-managed Linux server with automated CI/CD pipelines and cron-based release checks.",
    stack: ["React", "FastAPI", "PostgreSQL", "Docker", "CI/CD"],
    link: { label: "tablabaki.com", href: "https://tablabaki.com" },
  },
  {
    name: "Rendalone",
    tagline: "A web-based video editor, built from the timeline up.",
    description:
      "Rendalone lets users compose and edit video directly in the browser. The hard part isn't the editor UI — it's keeping \"what's a composition\" and \"what's a frame\" consistent across a frontend, an API, and a rendering layer that all need to agree.",
    built:
      "React frontend, a Fastify (Node.js) backend API, and a dedicated Node-based middleware layer that keeps composition and frame types consistent between frontend and backend. PostgreSQL for storage, fully Dockerized with automated deployment pipelines and cron-based jobs.",
    stack: ["React", "Fastify", "Node.js", "PostgreSQL", "Docker", "CI/CD"],
    link: { label: "rendalone.com", href: "https://rendalone.com" },
  },
  {
    name: "Mebelmaster",
    tagline: "Booking and operations system for a dry cleaning business.",
    description:
      "Mebelmaster handles appointment booking end-to-end — from the customer-facing booking flow to the admin side that actually runs the business day to day.",
    built:
      "A Next.js application with Supabase for the database, automated email notifications to the admin on new bookings, and an admin dashboard for managing bookings, tracking earned profit, and running day-to-day operations.",
    stack: ["Next.js", "Supabase", "Email automation"],
    link: null,
  },
];

export default function Work() {
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
          <span className="text-sm font-mono text-primary mb-3 block">{"// selected work"}</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Products we&apos;ve built
            <br />
            <span className="gradient-text">and still run</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Not mockups, not case study fluff — these are live, in production,
            with real users. Built end-to-end by us: frontend, backend,
            database, and the infrastructure underneath.
          </p>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 space-y-8 lg:space-y-10">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl border border-border bg-surface shadow-sm p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-1">
                <div className="font-mono text-sm text-primary mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-3">{project.name}</h2>
                <p className="text-muted leading-relaxed">{project.tagline}</p>
                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-primary hover:text-primary-dim transition-colors"
                  >
                    {project.link.label}
                    <span aria-hidden="true">&#8599;</span>
                  </a>
                )}
              </div>

              <div className="lg:col-span-2">
                <p className="text-foreground/90 leading-relaxed mb-6">
                  {project.description}
                </p>

                <h3 className="text-xs font-mono text-primary mb-3">{"// what we built"}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {project.built}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
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
          </motion.article>
        ))}
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-40 mt-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Want something like this for your product?
            </h2>
            <p className="text-muted max-w-lg mx-auto mb-10">
              Every project here started as a conversation about the problem,
              not the tech. Let&apos;s start there.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-primary text-background font-medium rounded-lg hover:bg-primary-dim transition-colors text-lg"
            >
              Start a conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
