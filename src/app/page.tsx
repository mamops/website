"use client";

import Link from "next/link";
import Image from "next/image";
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
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Web & App Development",
    desc: "Production-grade apps built with Next.js, Nuxt, Vue, React, Angular, or whatever fits your team. Python and FastAPI on the backend when you need it. Fast to ship, built to last.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "AI Integration",
    desc: "LLM features that actually solve a problem for your users — not AI for AI's sake. We integrate, fine-tune, and optimize so the cost makes sense at scale.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.88 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>
    ),
    title: "UX/UI Design",
    desc: "Interfaces people don't have to think about. Research-informed design that turns into real, working product — not a Figma file that never ships.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: "Cloud & Infrastructure",
    desc: "AWS, Azure, and Supabase architecture that's built to handle growth, not just launch day. We set it up so it doesn't page you at 2am.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Technical Consulting",
    desc: "Stuck choosing a stack, hiring your first engineer, or untangling a messy codebase? We've shipped on enough stacks to tell you which one actually fits your problem.",
  },
];

const reasons = [
  {
    lead: "Senior only.",
    text: "Every line of code is written or reviewed by someone who's shipped production software before — not a junior learning on your dime.",
  },
  {
    lead: "One team, full stack.",
    text: "Design, frontend, backend, AI, and cloud under one roof. No translation loss between vendors.",
  },
  {
    lead: "We don't disappear after launch.",
    text: "Dockerized deployments, CI/CD pipelines, and monitoring on everything we ship — including the products in our own portfolio.",
  },
  {
    lead: "You talk to the engineer.",
    text: "Direct access to the person writing your code, every week.",
  },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center hero-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block"
        >
          <Image
            src="/website/logo-mark.png"
            alt=""
            aria-hidden="true"
            width={745}
            height={500}
            priority
            className="w-[36rem] xl:w-[44rem] opacity-[0.07] animate-float select-none [filter:drop-shadow(0_0_60px_rgba(0,212,255,0.25))]"
          />
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-40 pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs text-muted font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              We build your
              <br />
              <span className="gradient-text">MVP</span>,
              <br />
              AI-native from day one.
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg sm:text-xl text-muted max-w-xl mb-10 leading-relaxed"
            >
              Full-stack web development, AI integration, and cloud
              infrastructure for founders who need a product that works — not a
              deck. Next.js, Python, AWS, Azure, Supabase. One senior team, no
              handoffs.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/services"
                className="px-6 py-3 bg-primary text-background font-medium rounded-lg hover:bg-primary-dim transition-colors"
              >
                See what we do
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-surface-light transition-colors"
              >
                Get in touch
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* Services */}
      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="text-sm font-mono text-primary mb-3 block">{"// what we do"}</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything between your idea<br />and a live product.
            </h2>
            <p className="text-muted max-w-lg">
              From your first wireframe to a production deployment that scales.
              We handle the full stack so you don&apos;t have to assemble five
              different vendors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-6 lg:p-8 rounded-xl border border-border bg-surface shadow-sm hover:border-primary/30 transition-all duration-300 card-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mamops */}
      <section className="py-28 lg:py-40 border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="text-sm font-mono text-primary mb-3 block">{"// why founders work with us"}</span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              3 production apps shipped.<br />Still running, still our problem.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.lead}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="flex items-start gap-4 p-6 rounded-xl border border-border bg-background shadow-sm"
              >
                <svg
                  className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-muted leading-relaxed">
                  <span className="text-foreground font-semibold">{reason.lead}</span>{" "}
                  {reason.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="text-sm font-mono text-primary mb-3 block">{"// proof, not promises"}</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              A few things we&apos;ve shipped<br />and still run.
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Tablabaki, Rendalone, and Mebelmaster are live products we built
              end-to-end — frontend, backend, database, and deployment — and
              continue to maintain today.
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-surface-light transition-colors"
            >
              See the full work
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-40 relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to build?
            </h2>
            <p className="text-muted max-w-lg mx-auto mb-10">
              Whether it&apos;s a new MVP, an AI feature your product needs, or
              infrastructure that&apos;s starting to creak, we&apos;re ready to
              start.
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
