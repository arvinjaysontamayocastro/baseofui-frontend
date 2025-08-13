/**
 * Quick-Bytes Page
 * Future backend plan:
 * - Fetch bite-sized tips from API: GET /api/quick-bytes
 * - Rate/like mechanism; daily highlights
 * - Simple CMS to add/edit items
 * For now:
 * - Content will be loaded from local JSON via a data service by key: "quick-bytes"
 */
import { useEffect, useState } from 'react';
import { getData } from '../services/data.service';

type QuickByte = { id: string; tip: string };

export default function QuickBytes() {
  const [items, setItems] = useState<QuickByte[]>([]);

  useEffect(() => {
    getData('quick-bytes').then(setItems);
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-black">Quick-Bytes</h1>
      <p className="mt-3 text-slate-600">Short tips/snippets to apply fast.</p>

      <ul className="mt-6 space-y-3">
        {items.map(it => (
          <li key={it.id} className="rounded-xl p-4 ring-1 ring-slate-200 bg-white">
            <div className="text-sm">{it.tip}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
