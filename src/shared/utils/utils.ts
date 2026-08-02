export function getCuteNumber(n: number): string {
  if (n > 1000000) {
    return `${Math.round(n / 1000000)} млн.`;
  }
  if (n > 1000) {
    return `${Math.round(n / 1000)} тыс.`;
  }
  return n.toString();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function clsx(items: any[]) {
  return items.filter(Boolean).join(' ');
}
