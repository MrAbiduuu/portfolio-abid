import { contacts } from "@/links/ContactLinks";
import Image from "next/image";
import React from "react";

const SidebarInfo = () => {
  return (
    <div className="flex min-h-full flex-col">
      <div className="flex flex-col items-center gap-5 px-4 py-8 text-center">
        <Image
          src="/profile.jpeg"
          alt="Dewan Abid Hasan"
          width={200}
          height={200}
          priority
          className="h-36 w-36 rounded-full border-4 border-primary object-cover shadow-lg"
        />

        <div className="space-y-2">
          <p className="text-4xl font-bold text-base-content">Hi,</p>

          <h2 className="text-2xl font-bold text-base-content sm:text-3xl">
            I am{" "}
            <span className="bg-linear-to-r from-primary via-lime-400 to-emerald-500 bg-clip-text font-extrabold text-transparent">
              Dewan Abid Hasan
            </span>
          </h2>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-base-content/80">
            <span className="text-primary">CSE Student</span> at IUS · CSE-19
          </p>

          <p className="rounded-full border border-base-300 bg-base-100 px-4 py-2 text-sm text-base-content/80">
            Junior Frontend Developer
          </p>

          <p className="max-w-xs text-sm leading-6 text-base-content/60">
            Welcome to my first portfolio website — a place to share my journey,
            skills, and projects.
          </p>
        </div>
      </div>
      <div className="mt-auto flex justify-center gap-4 px-4 py-6">
        {contacts.map((contact) => {
          const Icon = contact.icon;

          return (
            <a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={contact.name}
              title={contact.name}
              className="text-2xl text-base-content/70 transition-all duration-300 hover:-translate-y-1 hover:text-primary"
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarInfo;
