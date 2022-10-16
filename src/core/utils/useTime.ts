export interface Hms {
  h: number;
  m: number;
  s: number;
}

export function useTime() {
  const toHMS = (value: number): Hms => ({
    h: Math.floor(value / 3600),
    m: Math.floor((value % 3600) / 60),
    s: Math.floor((value % 3600) % 60),
  });

  return { toHMS };
}
