/**
 * Tutorials Page
 * Future backend plan:
 * - Fetch tutorials list from an API: GET /api/tutorials
 * - Support filters, tags, and pagination
 * - Server-side markdown/MDX rendering for SEO
 * For now:
 * - Content will be loaded from local JSON via a data service by key: "tutorials"
 */
import { useEffect, useState } from 'react';
import { getData } from '../services/data.service';

type Tutorial = { id: string; title: string; summary: string; updatedAt: string };

export default function Tutorials() {
  const [items, setItems] = useState<Tutorial[]>([]);

  useEffect(() => {
    getData('tutorials').then(setItems);
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-black">Tutorials</h1>
      <p className="mt-3 text-slate-600">Structured, step-by-step guides.</p>

      <ul className="mt-6 space-y-3">
        {items.map(it => (
          <li key={it.id} className="rounded-xl p-4 ring-1 ring-slate-200 bg-white">
            <div className="font-semibold">{it.title}</div>
            <div className="text-sm text-slate-600">{it.summary}</div>
            <div className="text-xs text-slate-500 mt-1">Updated: {it.updatedAt}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
