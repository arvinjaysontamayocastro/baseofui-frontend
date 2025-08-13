/**
 * Fun-Bubble Page
 * Future backend plan:
 * - Fetch "fun" cards from API: GET /api/fun-bubble
 * - Randomize and shuffle; support media
 * - Track shares/engagement
 * For now:
 * - Content will be loaded from local JSON via a data service by key: "fun-bubble"
 */
import { useEffect, useState } from 'react';
import { getData } from '../services/data.service';

type FunCard = { id: string; title: string; text: string };

export default function FunBubble() {
  const [items, setItems] = useState<FunCard[]>([]);

  useEffect(() => {
    getData('fun-bubble').then(setItems);
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-black">Fun-Bubble</h1>
      <p className="mt-3 text-slate-600">Playful bits to keep learning fun.</p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {items.map(it => (
          <div key={it.id} className="rounded-xl p-4 ring-1 ring-slate-200 bg-white">
            <div className="font-semibold">{it.title}</div>
            <div className="text-sm text-slate-600">{it.text}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
