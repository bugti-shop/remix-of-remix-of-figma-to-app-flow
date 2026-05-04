import { useEffect, useState, useCallback } from "react";

const KEY = "favorites:v1";

const read = (): string[] => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
};

const listeners = new Set<(ids: string[]) => void>();
const broadcast = (ids: string[]) => listeners.forEach((l) => l(ids));

export const useFavorites = () => {
  const [ids, setIds] = useState<string[]>(() => read());

  useEffect(() => {
    const l = (next: string[]) => setIds(next);
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);

  const toggle = useCallback((id: string) => {
    const current = read();
    const next = current.includes(id)
      ? current.filter((x) => x !== id)
      : [...current, id];
    localStorage.setItem(KEY, JSON.stringify(next));
    broadcast(next);
  }, []);

  const isFavorite = useCallback((id: string) => ids.includes(id), [ids]);

  return { ids, isFavorite, toggle };
};