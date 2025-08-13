/**
 * Home Page
 * Future: This page will fetch content (hero, featured sections) from a backend.
 * For now: static copy with navigation to Tutorials, Quick-Bytes, and Fun-Bubble.
 */
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-xl font-extrabold tracking-tight">BaseOfUI</h1>
        <nav className="flex gap-4 text-sm">
          <Link to="/tutorials" className="hover:underline">Tutorials</Link>
          <Link to="/quick-bytes" className="hover:underline">Quick-Bytes</Link>
          <Link to="/fun-bubble" className="hover:underline">Fun-Bubble</Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <section className="rounded-2xl p-8 bg-white shadow-sm ring-1 ring-slate-200">
          <h2 className="text-3xl font-black">Launch-ready UI baseline</h2>
          <p className="mt-3 text-slate-600">
            This is a clean starting point. We’ll connect real data and backend later.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <Link to="/tutorials" className="rounded-xl p-4 ring-1 ring-slate-200 bg-white hover:bg-slate-50">
              <div className="font-semibold">Tutorials</div>
              <div className="text-sm text-slate-600">Structured, step-by-step guides.</div>
            </Link>
            <Link to="/quick-bytes" className="rounded-xl p-4 ring-1 ring-slate-200 bg-white hover:bg-slate-50">
              <div className="font-semibold">Quick-Bytes</div>
              <div className="text-sm text-slate-600">Short tips/snippets you can apply fast.</div>
            </Link>
            <Link to="/fun-bubble" className="rounded-xl p-4 ring-1 ring-slate-200 bg-white hover:bg-slate-50">
              <div className="font-semibold">Fun-Bubble</div>
              <div className="text-sm text-slate-600">Playful bits to keep learning fun.</div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
