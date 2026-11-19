// Vimeo reels. Content Creation reels are grouped by category (28 videos).
// Workshop "behind the scenes" reels are shown as silent looping previews.
const v = (id, h) => `https://player.vimeo.com/video/${id}${h ? '?h=' + h : ''}`

export const CONTENT_REELS = [
  { cat: 'tutorials', url: v('1218497342') },
  { cat: 'tutorials', url: v('1218498178') },
  { cat: 'tutorials', url: v('1218498151') },
  { cat: 'tutorials', url: v('1143892207', '6d94e8a9a5') },
  { cat: 'tutorials', url: v('1248377988') },
  { cat: 'ugc', url: v('1218501591') },
  { cat: 'ugc', url: v('1118478920', 'af9b6f0bab') },
  { cat: 'ugc', url: v('1117766965', '963a2edc08') },
  { cat: 'ugc', url: v('1117806411', 'a7f3765b75') },
  { cat: 'lifestyle', url: v('1218498165') },
  { cat: 'lifestyle', url: v('1248375940') },
  { cat: 'lifestyle', url: v('1248377244') },
  { cat: 'stationery', url: v('1218498163') },
  { cat: 'stationery', url: v('1218498153') },
  { cat: 'stationery', url: v('1117810490', 'b2d3a3f6d4') },
  { cat: 'stationery', url: v('1118512621', '02bb452692') },
  { cat: 'stationery', url: v('1117805604', '56fde2d074') },
  { cat: 'stationery', url: v('1118506149', 'bcca644131') },
  { cat: 'stationery', url: v('1218498152') },
  { cat: 'stationery', url: v('1218498150') },
  { cat: 'color', url: v('1218498177') },
  { cat: 'color', url: v('1218498166') },
  { cat: 'color', url: v('1218498164') },
  { cat: 'travel', url: v('1143891411', 'f9faef5ec5') },
  { cat: 'travel', url: v('1143889999', 'a67103b18f') },
  { cat: 'travel', url: v('1143890733', 'aa9b5f70bb') },
  { cat: 'travel', url: v('1143891138', 'd32f490dd3') },
  { cat: 'experiences', url: v('1117860728', '921b1349bc') },
  { cat: 'experiences', url: v('1117864900', '38cb2cea56') },
  { cat: 'experiences', url: v('1117864183', '507b8f035c') },
  { cat: 'experiences', url: v('1117862027', '1725f1ad98') },
]

// Behind the scenes (workshops). The four ids without a hash are new; if one does
// not play, add its share-link hash here (…/video/ID?h=HASH).
export const WORKSHOP_REELS = [
  v('1242394644'),
  v('1119206854'),
  v('1124840298', 'e4f3e1cc75'),
  v('1119205438', '8e6c4a122a'),
  v('1119202990', '771babcc8a'),
  v('1119544416', '547058c68e'),
  v('1124865039', '5ccb5e3436'),
  v('1119204049', '1eced4b6cc'),
  v('1119678487'),
  v('1119675814'),
  v('1119543528', 'a99e5a7d55'),
]

export const BRAND_LOGOS = [
  'alfar.png', 'casanghjulina.jpg', 'costanera.svg', 'dokk1.svg',
  'lespetitesmaisons.png', 'libristo.png', 'saboresnayate.jpg', 'uhu.png',
]

// Featured video shown at the end of "Past workshops" (16:9).
export const PAST_VIDEO = v('1248375599')
