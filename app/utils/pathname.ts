/**
 * Parses a pathname and returns an array of segments between slashes
 * @param pathname - The pathname to parse (e.g., "/deal-name/deal-overview" or "/workflows")
 * @returns Array of path segments (e.g., ["deal-name", "deal-overview"] or ["workflows"])
 */
export function parsePathname(pathname: string): string[] {
  return pathname.split('/').filter(Boolean);
}

