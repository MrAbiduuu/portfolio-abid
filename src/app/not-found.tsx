import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-base-100 px-6 py-16">
      <div className="w-full max-w-xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
          Error 404
        </p>

        <h1 className="text-7xl font-extrabold tracking-tight text-base-content sm:text-9xl">
          4<span className="text-primary">0</span>4
        </h1>

        <h2 className="mt-6 text-2xl font-bold text-base-content sm:text-3xl">
          Lost in the wrong network?
        </h2>

        <p className="mx-auto mt-4 max-w-md leading-7 text-base-content/60">
          Looks like this page couldn&apos;t be found. The link might be broken,
          or the page may have moved to another location.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-primary px-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15 18-6-6 6-6M9 12h12M3 5v14"
              />
            </svg>
            Back to Home
          </Link>

          <Link
            href="/projects"
            className="btn btn-outline border-base-300 text-base-content hover:border-primary hover:text-primary"
          >
            Explore Projects
          </Link>
        </div>

        <div className="mt-16 border-t border-base-300 pt-6">
          <p className="font-mono text-xs text-base-content/40">
            SYSTEM STATUS: PAGE NOT FOUND
          </p>
        </div>
      </div>
    </main>
  );
}
