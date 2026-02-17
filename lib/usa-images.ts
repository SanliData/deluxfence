/**
 * All images from project assets only – no third-party copyright.
 * Uses local fence images (elegant aluminum fence in various settings).
 */
const FENCE = "/images/fence";

export const USA_IMAGES = {
  /** Hero: matte black fence & gate with modern house (local asset) */
  hero: `${FENCE}/fence-3.png` as const,
  /** Gallery: 6 local fence photos – different settings, no external rights */
  gallery: [
    `${FENCE}/fence-1.png`,
    `${FENCE}/fence-2.png`,
    `${FENCE}/fence-3.png`,
    `${FENCE}/fence-4.png`,
    `${FENCE}/fence-5.png`,
    `${FENCE}/fence-6.png`,
  ] as const,
  feature: `${FENCE}/fence-3.png` as const,
};

export const USA_IMAGE_ALTS = {
  hero: "Matte black aluminum fence and gate with white pillars, modern house",
  gallery: [
    "Horizontal slat aluminum fence with lawn and trees",
    "Contemporary horizontal privacy fence with grey slats",
    "Matte black fence and double gate, modern white house",
    "Vertical panel fence with garden and planters",
    "Black vertical slat fence beside pool",
    "Black slat fence by pool with green landscape",
  ] as const,
  feature: "Matte black aluminum fence and gate with white pillars, modern house",
};
