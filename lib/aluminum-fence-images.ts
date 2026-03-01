/**
 * Elegant aluminum fence images – all from project assets (no third-party copyright).
 * Includes single photos and 9-panel grid cells (fence-grid.png).
 */
const BASE = "/images/fence";

export type FencePhoto = {
  src: string;
  alt: string;
  label: string;
  /** If set, image is a 3x3 grid cell (row 0–2, col 0–2) */
  gridRow?: number;
  gridCol?: number;
};

/** Single fence photos (full images) */
export const ALUMINUM_FENCE_PHOTOS: FencePhoto[] = [
  { src: `${BASE}/fence-1.png`, alt: "Modern horizontal slat aluminum fence with dark gray finish along green lawn and trees", label: "Horizontal Slat Fence" },
  { src: `${BASE}/fence-2.png`, alt: "Contemporary horizontal privacy fence with grey slats and light posts on concrete base", label: "Privacy Fence" },
  { src: `${BASE}/fence-3.png`, alt: "Matte black aluminum fence and double gate with white stone pillars, modern white house", label: "Black Fence & Gate" },
  { src: `${BASE}/fence-4.png`, alt: "Elegant vertical panel aluminum fence with planters and garden setting", label: "Garden Fence" },
  { src: `${BASE}/fence-5.png`, alt: "Matte black vertical slat fence beside swimming pool and outdoor lounge", label: "Pool Fence" },
  { src: `${BASE}/fence-6.png`, alt: "Modern black vertical slat fence by pool with green landscape background", label: "Pool & Landscape" },
  { src: `${BASE}/fence-brick-house.png`, alt: "Black vertical slat aluminum fence with white pillars in front of modern brick house, sidewalk and suburban street", label: "Black Slat & Brick House" },
  { src: `${BASE}/fence-equestrian-simple.png`, alt: "Dark horizontal slat aluminum fence in green pasture, golden hour", label: "Pasture & Slat Fence" },
];

/** 9 panels from fence-grid.png – teker teker (top-left to bottom-right) */
const GRID = `${BASE}/fence-grid.png`;
export const FENCE_GRID_PHOTOS: FencePhoto[] = [
  { src: GRID, alt: "Matte black horizontal slat fence, modern farmhouse with garden bed", label: "Farmhouse & Slat Fence", gridRow: 0, gridCol: 0 },
  { src: GRID, alt: "Aerial view luxury estate with pool and white picket fence", label: "Estate & Pool", gridRow: 0, gridCol: 1 },
  { src: GRID, alt: "Dark gray horizontal slat fence with hydrangeas and shrubs", label: "Gray Slat & Hydrangeas", gridRow: 0, gridCol: 2 },
  { src: GRID, alt: "Warm brown horizontal slat fence with stone pillars and flower bed", label: "Brown Slat & Stone Pillars", gridRow: 1, gridCol: 0 },
  { src: GRID, alt: "Light gray horizontal slat fence with ornamental grasses", label: "Gray Privacy Fence", gridRow: 1, gridCol: 1 },
  { src: GRID, alt: "Traditional brick house with white picket fence and pool", label: "Brick House & Picket", gridRow: 1, gridCol: 2 },
  { src: GRID, alt: "Aerial view estate with black slat fence, pool and water", label: "Estate Pool & Slat", gridRow: 2, gridCol: 0 },
  { src: GRID, alt: "Dark green horizontal slat fence on lawn with shrubs", label: "Green Slat & Lawn", gridRow: 2, gridCol: 1 },
  { src: GRID, alt: "Dark brown horizontal slat fence as deck railing, pool view", label: "Deck Railing & Pool", gridRow: 2, gridCol: 2 },
];

/** Gate image (day) – suburban setting, paved driveway, same gate design */
export const GATE_DAY_PHOTO: FencePhoto = {
  src: `${BASE}/fence-gate-suburban.png`,
  alt: "Modern aluminum double gate at residential entrance, paved driveway and lawn",
  label: "Gate & Fence (Day)",
};

/** Professional catalog images – modern fences, gates, railings */
export const CATALOG_PHOTOS: FencePhoto[] = [
  { src: `${BASE}/catalog-01.png`, alt: "Modern full-privacy horizontal slat fence, dark gray panels and black posts", label: "Full-Privacy Horizontal Slat" },
  { src: `${BASE}/catalog-02.png`, alt: "Louvered aluminum fence with dark brick pillars and matching base", label: "Louvered & Brick Pillars" },
  { src: `${BASE}/catalog-03.png`, alt: "Hybrid fence panel with composite lower section and natural wood upper slats", label: "Hybrid Composite & Wood" },
  { src: `${BASE}/catalog-04.png`, alt: "Privacy fence options comparison – solid, semi-transparent, and transparent panels", label: "Privacy Options" },
  { src: `${BASE}/catalog-05.png`, alt: "Black metal frame with natural wood horizontal slat accents", label: "Black & Wood Accent Panel" },
  { src: `${BASE}/catalog-06.png`, alt: "Dark gray louvered fence on concrete base with lawn and trees", label: "Louvered on Concrete Base" },
  { src: `${BASE}/catalog-07.png`, alt: "Anthracite louvered panels with translucent upper section", label: "Louvered with Translucent Top" },
  { src: `${BASE}/catalog-08.png`, alt: "Close-up of louvered aluminum panel and mounting hardware", label: "Louvered Panel Detail" },
  { src: `${BASE}/catalog-09.png`, alt: "Luxury villa with frameless glass railing and pool", label: "Glass Railing & Pool" },
  { src: `${BASE}/catalog-10.png`, alt: "Modern residence with glass balustrade and horizontal metal railing", label: "Glass & Metal Railings" },
  { src: `${BASE}/catalog-11.png`, alt: "Horizontal slat fence on concrete base between two properties", label: "Slat Fence Between Properties" },
  { src: `${BASE}/catalog-12.png`, alt: "Anthracite louvered sliding gate at property entrance", label: "Louvered Sliding Gate" },
  { src: `${BASE}/catalog-13.png`, alt: "Dark gray privacy fence on light stone base with greenery", label: "Privacy Fence on Stone Base" },
  { src: `${BASE}/catalog-14.png`, alt: "Louvered fence extending along concrete base under blue sky", label: "Louvered Fence & Sky" },
  { src: `${BASE}/catalog-15.png`, alt: "Pool and patio with glass railing and retractable shading", label: "Pool, Glass Railing & Shading" },
  { src: `${BASE}/catalog-16.png`, alt: "Modern three-panel louvered sliding gate on track", label: "Sliding Louvered Gate" },
  { src: `${BASE}/catalog-17.png`, alt: "Precast concrete base with dark horizontal slatted panels", label: "Concrete Base & Slatted Panels" },
  { src: `${BASE}/catalog-18.png`, alt: "Outdoor shading and louvered fence in luxury setting", label: "Shading & Louvered Screen" },
  { src: `${BASE}/catalog-19.png`, alt: "Luxury home with glass railing and stone cladding", label: "Glass Railing & Stone" },
  { src: `${BASE}/catalog-20.png`, alt: "Combination fence with patterned concrete and slatted top", label: "Concrete & Slat Combination" },
  { src: `${BASE}/catalog-21.png`, alt: "Villa with pool, glass balustrade and landscaped patio", label: "Villa Pool & Balustrade" },
  { src: `${BASE}/catalog-22.png`, alt: "Dark gray louvered sliding gate with textured wall", label: "Louvered Gate & Wall" },
];

/** All fence photos: 8 single + 9 grid + gate + 22 catalog = 40 items */
export const ALL_FENCE_PHOTOS: FencePhoto[] = [
  ...ALUMINUM_FENCE_PHOTOS,
  ...FENCE_GRID_PHOTOS,
  GATE_DAY_PHOTO,
  ...CATALOG_PHOTOS,
];
