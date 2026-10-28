"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  FaCode,
  FaReact,
  FaNetworkWired,
  FaGraduationCap,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiGit,
} from "react-icons/si";

const skills = [
  { name: "C / C++", icon: SiCplusplus },
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
];

const projects = [
  {
    name: "FitLog",
    category: "Fitness Application",
    description:
      "A fitness tracking application for exploring workouts and managing personal workout plans.",
    stack: ["Next.js", "Tailwind CSS", "API"],
    link: "/projects",
  },
  {
    name: "Bangla News",
    category: "News Application",
    description:
      "A news browsing application that displays articles through an external news API.",
    stack: ["Next.js", "React", "API"],
    link: "/projects",
  },
  {
    name: "Bazardor",
    category: "Market Price Application",
    description:
      "A web application focused on presenting market price information in a user-friendly interface.",
    stack: ["Next.js", "Tailwind CSS", "API"],
    link: "/projects",
  },
];

const interests = [
  {
    icon: FaCode,
    title: "Web Development",
    description:
      "Building responsive web applications and improving my frontend development skills.",
  },
  {
    icon: FaNetworkWired,
    title: "Networking & Security",
    description:
      "Exploring networking fundamentals, CCNA concepts, and cybersecurity.",
  },
  {
    icon: FaGraduationCap,
    title: "Continuous Learning",
    description:
      "Strengthening my programming foundations and working toward future academic and career goals.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="overflow-hidden bg-base-100 text-base-content">
      {/* Hero */}
      <section className="relative flex min-h-[75vh] items-center px-5 py-16 sm:px-10 lg:px-14">
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 max-w-4xl space-y-7"
        >
          <p className="flex items-center gap-2 text-sm font-semibold tracking-widest text-primary uppercase">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Hello, World! Im Abid
          </p>

          <h1 className="text-4xl leading-tight font-black tracking-tight sm:text-6xl lg:text-7xl">
            Building Ideas Into{" "}
            <span className="bg-linear-to-r from-primary via-lime-400 to-emerald-500 bg-clip-text text-transparent">
              Digital Experiences.
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-8 text-base-content/70 sm:text-lg">
            Im Dewan Abid Hasan, a CSE student and junior frontend developer
            passionate about web development, programming, networking, and
            continuous learning.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/projects"
              className="group flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-content transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
            >
              Explore Projects
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/about"
              className="rounded-xl border border-base-300 px-6 py-3 font-semibold transition hover:border-primary hover:text-primary"
            >
              More About Me
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 pt-3">
            {["Frontend Developer", "CSE Student", "Networking Enthusiast"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-base-content/80"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </motion.div>
      </section>

      {/* Quick introduction */}
      <section className="px-5 py-12 sm:px-10 lg:px-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 rounded-3xl border border-base-300 bg-base-200/60 p-6 sm:p-8 md:grid-cols-[1.4fr_1fr]"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              A little about me
            </p>

            <h2 className="text-3xl font-bold">
              Curious mind.{" "}
              <span className="text-primary">Builders mindset.</span>
            </h2>

            <p className="leading-7 text-base-content/70">
              I enjoy turning ideas into useful applications, learning how
              technology works, and challenging myself with new problems. Im
              currently growing my skills in modern frontend development while
              exploring computer networking and cybersecurity.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3"
            >
              Read my story <FaArrowRight size={13} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            {[
              ["01", "Build", "Practical web projects"],
              ["02", "Learn", "New tools and technologies"],
              ["03", "Improve", "One step at a time"],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="flex items-center gap-4 rounded-xl border border-base-300 bg-base-100 p-4"
              >
                <span className="text-xl font-black text-primary">
                  {number}
                </span>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-sm text-base-content/60">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="px-5 py-12 sm:px-10 lg:px-14">
        <div className="mb-7 space-y-2">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            My toolkit
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Technologies I <span className="text-primary">Work With</span>
          </h2>
          <p className="text-base-content/60">
            Tools Im using and learning throughout my development journey.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.35 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 rounded-xl border border-base-300 bg-base-200/50 p-4 transition-colors hover:border-primary/60"
              >
                <Icon className="shrink-0 text-2xl text-primary" />
                <span className="text-sm font-semibold">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>

        <Link
          href="/skills"
          className="mt-5 inline-flex items-center gap-2 font-semibold text-primary"
        >
          View all skills <FaArrowRight size={13} />
        </Link>
      </section>

      {/* Featured projects */}
      <section className="px-5 py-12 sm:px-10 lg:px-14">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              Selected work
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Featured <span className="text-primary">Projects</span>
            </h2>
          </div>

          <Link
            href="/projects"
            className="hidden items-center gap-2 text-sm font-semibold text-primary sm:flex"
          >
            All projects <FaArrowRight size={12} />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-2xl border border-base-300 bg-base-200/50 p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <FaCode size={24} />
                </div>
                <span className="text-xs text-base-content/50">
                  PROJECT / 0{index + 1}
                </span>
              </div>

              <p className="mb-2 text-xs font-semibold tracking-wide text-primary uppercase">
                {project.category}
              </p>

              <h3 className="mb-3 text-2xl font-bold">{project.name}</h3>

              <p className="mb-5 flex-1 text-sm leading-6 text-base-content/65">
                {project.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-base-300/70 px-2 py-1 text-xs text-base-content/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href={project.link}
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3"
              >
                Explore project <FaExternalLinkAlt size={11} />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Interests and learning */}
      <section className="px-5 py-12 sm:px-10 lg:px-14">
        <div className="mb-7 space-y-2">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            Beyond the code
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            What Drives <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {interests.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="rounded-2xl border border-base-300 p-6"
              >
                <Icon className="mb-4 text-3xl text-primary" />
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm leading-6 text-base-content/65">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-3 rounded-2xl bg-primary/10 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-xs font-bold tracking-widest text-primary uppercase">
              Currently learning
            </p>
            <h3 className="text-xl font-bold">
              Growing today. Building for tomorrow.
            </h3>
            <p className="mt-2 text-sm text-base-content/65">
              React · Next.js · TypeScript · Problem Solving · Networking
            </p>
          </div>
          <Link
            href="/education"
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-primary"
          >
            My education <FaArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-5 py-14 sm:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-primary/20 bg-base-200 p-8 text-center sm:p-12"
        >
          <div className="pointer-events-none absolute -right-12 -bottom-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative">
            <p className="mb-3 text-sm font-bold tracking-widest text-primary uppercase">
              Have an idea?
            </p>

            <h2 className="text-3xl font-black sm:text-5xl">
              Lets Build Something <span className="text-primary">Great.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-base-content/65">
              Im interested in meaningful projects, learning opportunities, and
              connecting with people who love technology.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-content transition hover:-translate-y-1"
            >
              Get in Touch <FaArrowRight />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-base-300 px-5 py-6 text-center text-sm text-base-content/50">
        <p>
          Designed & built by{" "}
          <span className="font-semibold text-primary">Abid Hasan</span>
        </p>
        <p className="mt-1">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </main>
  );
}
