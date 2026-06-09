import { useEffect, useState } from 'react';

export function getMasonryColumnCount(width: number): number {
  if (width >= 1280) return 4;
  if (width >= 768) return 3;
  return 2;
}

export function useMasonryColumnCount(): number {
  const [columnCount, setColumnCount] = useState(() =>
    typeof window !== 'undefined' ? getMasonryColumnCount(window.innerWidth) : 2,
  );

  useEffect(() => {
    const onResize = () => setColumnCount(getMasonryColumnCount(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return columnCount;
}

export function splitIntoMasonryColumns<T>(items: T[], columnCount: number): T[][] {
  const columns = Array.from({ length: columnCount }, () => [] as T[]);
  items.forEach((item, index) => {
    columns[index % columnCount].push(item);
  });
  return columns;
}
