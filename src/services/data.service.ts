/**
 * Data Service (JSON-backed)
 * - Loads local JSON by page key: "tutorials" | "quick-bytes" | "fun-bubble"
 * - Future: replace with real HTTP calls to backend APIs.
 * Dev-only: Never include debug logs in production.
 */

export type PageKey = 'tutorials' | 'quick-bytes' | 'fun-bubble';

// Static imports (tsconfig: resolveJsonModule = true)
import tutorials from '../data/tutorials.json';
import quickBytes from '../data/quick-bytes.json';
import funBubble from '../data/fun-bubble.json';

const DB: Record<PageKey, any> = {
  'tutorials': tutorials,
  'quick-bytes': quickBytes,
  'fun-bubble': funBubble,
};

/** Simulate async fetch */
export async function getData(key: PageKey): Promise<any> {
  return Promise.resolve(DB[key]);
}
