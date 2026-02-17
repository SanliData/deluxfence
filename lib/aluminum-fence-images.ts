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

/** All fence photos: 8 single + 9 grid panels + gate = 18 items */
export const ALL_FENCE_PHOTOS: FencePhoto[] = [
  ...ALUMINUM_FENCE_PHOTOS,
  ...FENCE_GRID_PHOTOS,
  GATE_DAY_PHOTO,
];
