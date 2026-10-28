import Link from "next/link";
import { FaCode, FaNetworkWired, FaGraduationCap } from "react-icons/fa";

const interests = [
  {
    icon: FaCode,
    title: "Web Development",
    description:
      "Building modern, responsive websites using React, Next.js, and Tailwind CSS.",
  },
  {
    icon: FaNetworkWired,
    title: "Networking",
    description:
      "Learning computer networking, CCNA concepts, and cybersecurity fundamentals.",
  },
  {
    icon: FaGraduationCap,
    title: "Continuous Learning",
    description:
      "Improving my programming skills and exploring opportunities for higher studies abroad.",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl space-y-10 px-5 py-10 sm:px-8">
      {/* Heading */}
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Get to know me
        </p>

        <h1 className="text-4xl font-extrabold text-base-content sm:text-5xl">
          About <span className="text-primary">Me.</span>
        </h1>

        <div className="h-1 w-20 rounded-full bg-primary" />
      </div>

      {/* Introduction */}
      <div className="space-y-4 leading-8 text-base-content/75">
        <h2 className="text-2xl font-bold text-base-content">
          Hi, I&apos;m Dewan Abid Hasan!
        </h2>

        <p>
          I&apos;m a Computer Science and Engineering student and an aspiring
          software developer who enjoys learning new technologies and solving
          problems through programming.
        </p>

        <p>
          I&apos;m currently focusing on frontend development with React,
          Next.js, TypeScript, and Tailwind CSS. Alongside web development,
          I&apos;m exploring computer networking and cybersecurity to build a
          strong technical foundation.
        </p>

        <p>
          My goal is to become a skilled software developer and network
          engineer, contribute to meaningful projects, and pursue opportunities
          for higher studies abroad. I believe in continuous learning,
          consistency, and improving a little every day.
        </p>
      </div>

      {/* Interests */}
      <div className="space-y-5">
        <h2 className="text-2xl font-bold text-base-content">
          What I&apos;m Interested In
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {interests.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-base-300 bg-base-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
              >
                <Icon className="mb-4 text-3xl text-primary" />

                <h3 className="mb-2 text-lg font-bold text-base-content">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-base-content/65">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to action */}
      <div className="rounded-2xl border border-base-300 bg-base-200 p-6 sm:p-8">
        <h2 className="mb-3 text-2xl font-bold text-base-content">
          Let&apos;s Connect!
        </h2>

        <p className="mb-6 leading-7 text-base-content/70">
          I&apos;m always interested in learning, collaborating, and connecting
          with people who share similar interests.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-primary px-5 py-3 font-semibold text-primary-content transition hover:opacity-80"
          >
            Explore My Projects
          </Link>

          <Link
            href="/contact"
            className="rounded-lg border border-base-300 px-5 py-3 font-semibold text-base-content transition hover:border-primary hover:text-primary"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
