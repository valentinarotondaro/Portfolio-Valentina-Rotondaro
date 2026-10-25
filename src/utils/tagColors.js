// ─── CANONICAL TAG COLOR MAP ────────────────────────────────
// One fixed color pairing per label, used identically everywhere that
// label can appear: the Works filter dropdown, each project card's
// tag pill, and the falling hero tags.
// See the portfolio Design System → "canonical tag-color system".
// Black is reserved for the View Project / Explore buttons only —
// never used as a tag fill, so every entry (including the fallback)
// pulls from the accent palette (pink, lima, bordeaux, brown).
export const TAG_COLORS = {
  'UX/UI':              { bg: 'var(--bordeaux)', color: 'var(--lima)' },
  'UX UI':              { bg: 'var(--bordeaux)', color: 'var(--lima)' }, // hero tag spelling, same category
  'Web Design':         { bg: 'var(--brown)',    color: 'var(--lima)' },
  'Visual Design':      { bg: 'var(--lima)',     color: 'var(--bordeaux)' },
  'Content Creation':   { bg: 'var(--lima)',     color: 'var(--bordeaux)' },
  'Collage & Crafts':   { bg: 'var(--brown)',    color: 'var(--lima)' },
  'Branding':           { bg: 'var(--pink)',     color: 'var(--bordeaux)' },
  'Workshops':          { bg: 'var(--bordeaux)', color: 'var(--lima)' },
  // Hero-only skill tags (not filter categories, but still never black)
  'Video Editing':          { bg: 'var(--brown)',    color: 'var(--lima)' },
  'AI integration':         { bg: 'var(--pink)',     color: 'var(--bordeaux)' },
  'Workshop Facilitation':  { bg: 'var(--bordeaux)', color: 'var(--lima)' },
  'Digital marketing':      { bg: 'var(--brown)',    color: 'var(--lima)' },
};

const FALLBACK = { bg: 'var(--bordeaux)', color: 'var(--lima)' };

/**
 * Returns the { bg, color } pair for a tag/filter label, so the same
 * label always renders with the same colors anywhere on the site.
 */
export function tagColor(label) {
  return TAG_COLORS[label] || FALLBACK;
}

/** Vue-ready inline style object for a tag/filter pill. */
export function tagStyle(label) {
  const { bg, color } = tagColor(label);
  return { backgroundColor: bg, color };
}
