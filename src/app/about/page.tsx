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

const values = [
  {
    title: "Engineer first",
    desc: "We write code, not decks. Every decision is grounded in technical reality and engineering rigor.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "No nonsense",
    desc: "Plain talk, honest timelines, no vendor lock-in. We say what we mean and do what we say.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: "Systems thinking",
    desc: "We don't just patch problems. We build systems that prevent them — sustainable architecture over quick fixes.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Ship often",
    desc: "Small iterations, fast feedback loops. We deliver value early and often, not in quarterly dumps.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Mario",
    role: "Senior Software Engineer",
    bio: "Builds MVPs fast, validates them against real usage, then sets the infrastructure in stone. The person turning \"the idea\" into a working system.",
  },
  {
    name: "Mihail",
    role: "Senior QA Engineer",
    bio: "Tests the infrastructure Mario builds and tries to break it in a playground environment before it ever goes live — the engineering equivalent of proofreading, before it's your users finding the bugs.",
  },
  {
    name: "Ana",
    role: "Senior UI/UX Specialist, 3D Modeler & Animator",
    bio: "Gives the systems Mario and Mihail build a face. Without her, it's functional but dry — she's the difference between \"it works\" and \"people actually want to use it.\"",
  },
];

export default function About() {
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
          <span className="text-sm font-mono text-primary mb-3 block">{"// about us"}</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Engineers who
            <br />
            <span className="gradient-text">give a damn</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Mamops exists because we wanted to build something that lasts — not
            just clock hours somewhere else. We build engineering-first, not
            sales-first, and we stand behind what we ship.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              We started Mamops because we were done waiting for someone
              else&apos;s ceiling.
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                We spent years in roles with real technical skill in the room
                and no real path to grow it — poor management, slow decisions,
                and ceilings that had nothing to do with what we could actually
                build.
              </p>
              <p>
                In summer 2026, instead of looking for the next job, we built
                the thing we actually wanted: a small, senior team that&apos;s
                agile enough to move fast and durable enough to last.
              </p>
              <p>
                Our goal isn&apos;t just billable hours. It&apos;s helping the
                businesses we work with grow — financially, operationally, and
                in their ability to scale, retain customers, and ship without us
                being a permanent crutch.
              </p>
              <p>
                We work with founders and teams who value engineering done
                properly and need a partner who can keep up. If that&apos;s you,
                let&apos;s talk.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-xl border border-border bg-surface shadow-sm p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="relative h-full flex flex-col justify-center items-center text-center">
                <div className="font-mono text-6xl sm:text-7xl font-bold text-primary mb-4">
                  m.
                </div>
                <div className="text-sm text-muted font-mono">
                  Founded summer 2026 — founder-led
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 lg:py-40 bg-surface border-y border-border">
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
              Built on principles,<br />not politics.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="p-6 rounded-xl border border-border bg-background shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 text-primary">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof of work */}
      <section className="py-28 lg:py-40 border-y border-border bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-sm font-mono text-primary mb-3 block">{"// proof of work"}</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Three live products. Zero slideware.
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Tablabaki, Rendalone, and Mebelmaster aren&apos;t case studies in
              a deck — they&apos;re running in production right now, built and
              still maintained by us. That&apos;s what
              &ldquo;engineering-first&rdquo; means in practice.
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-medium rounded-lg hover:bg-primary-dim transition-colors"
            >
              See the full work
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="text-sm font-mono text-primary mb-3 block">{"// the team"}</span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Small team,<br />real expertise.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="group p-6 rounded-xl border border-border bg-surface shadow-sm hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-xs text-primary font-mono mb-3">{member.role}</p>
                <p className="text-sm text-muted leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
