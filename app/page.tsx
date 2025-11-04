export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 flex items-center justify-center px-6">
      <section className="max-w-xl text-center text-white space-y-6">
        <h1 className="text-5xl font-semibold tracking-tight">
          Hello, traveler!
        </h1>
        <p className="text-lg text-slate-200">
          Welcome to a freshly generated Next.js experience. This site was built
          autonomously by the Codex agent, showcasing a simple yet elegant
          greeting interface.
        </p>
        <a
          href="https://nextjs.org"
          className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          Explore Next.js
        </a>
      </section>
    </main>
  );
}
