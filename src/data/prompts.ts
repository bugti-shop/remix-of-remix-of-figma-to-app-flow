export type PromptItem = {
  id: string;
  title: string;
  prompt: string;
  category: string;
  image: string;
  author: string;
  likes: number;
};

const img = (seed: string, w = 600, h = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const categories = [
  "All",
  "Trending",
  "Cinematic",
  "Portraits",
  "Anime",
  "3D",
  "Polaroid",
  "Editorial",
];

export const trendingNow: PromptItem[] = [
  {
    id: "t1",
    title: "Stallion in moonlight",
    prompt:
      "A majestic black stallion galloping through misty moonlit fields, cinematic lighting, ultra-detailed, 8k",
    category: "Cinematic",
    image: img("horse1"),
    author: "@nova",
    likes: 1240,
  },
  {
    id: "t2",
    title: "Neon forest spirit",
    prompt:
      "A glowing forest spirit in a neon-lit cyberpunk jungle, volumetric fog, hyperreal, octane render",
    category: "Trending",
    image: img("neon2"),
    author: "@kira",
    likes: 980,
  },
];

export const featured: PromptItem = {
  id: "f1",
  title: "Looking at Movies",
  prompt:
    "Cinematic still of a young man watching old films in a dim theater, warm tungsten light, 35mm film grain",
  category: "Cinematic",
  image: img("cinema"),
  author: "@studio.lume",
  likes: 3420,
};

export const categoryRows: Array<{
  label: string;
  items: PromptItem[];
}> = [
  {
    label: "Color Pop",
    items: [
      {
        id: "c1",
        title: "Liquid color portrait",
        prompt:
          "Portrait dissolving into vibrant paint splashes, hyper-saturated, studio lighting",
        category: "Portraits",
        image: img("color1"),
        author: "@hue",
        likes: 521,
      },
      {
        id: "c2",
        title: "Skyline rush",
        prompt:
          "Person walking through a rainy neon city, color graded teal & orange, cinematic",
        category: "Cinematic",
        image: img("color2"),
        author: "@frame",
        likes: 712,
      },
    ],
  },
  {
    label: "People & Portraits",
    items: [
      {
        id: "p1",
        title: "Soft studio gaze",
        prompt:
          "Beauty portrait, soft window light, freckles, 85mm lens, editorial",
        category: "Portraits",
        image: img("port1"),
        author: "@mira",
        likes: 410,
      },
      {
        id: "p2",
        title: "Cyber bust",
        prompt:
          "Futuristic cyborg bust, chrome details, dramatic rim light, octane",
        category: "3D",
        image: img("port2"),
        author: "@axiom",
        likes: 880,
      },
    ],
  },
  {
    label: "Anime",
    items: [
      {
        id: "a1",
        title: "Quiet hero",
        prompt:
          "Anime key visual of a quiet hero in a tokyo alley, makoto shinkai style",
        category: "Anime",
        image: img("anime1"),
        author: "@inka",
        likes: 1500,
      },
      {
        id: "a2",
        title: "Orange uniform",
        prompt:
          "Anime girl in orange jumpsuit, dynamic pose, cel shading, vibrant",
        category: "Anime",
        image: img("anime2"),
        author: "@ren",
        likes: 990,
      },
    ],
  },
  {
    label: "For Fun",
    items: [
      {
        id: "fn1",
        title: "Tiger remix",
        prompt:
          "Wide-eyed cartoon tiger in pop art style, bright background, fun",
        category: "Trending",
        image: img("fun1"),
        author: "@oz",
        likes: 230,
      },
      {
        id: "fn2",
        title: "Polaroid pet",
        prompt:
          "Polaroid photo of a husky on a wooden table, soft flash, retro",
        category: "Polaroid",
        image: img("fun2"),
        author: "@polly",
        likes: 312,
      },
    ],
  },
  {
    label: "Unreleased / New",
    items: [
      {
        id: "u1",
        title: "Vintage frame",
        prompt:
          "Old polaroid lying on parchment, soft sepia tones, film grain",
        category: "Polaroid",
        image: img("vint1"),
        author: "@old",
        likes: 120,
      },
      {
        id: "u2",
        title: "Sky study",
        prompt:
          "Polaroid of a hand holding clouds, surreal collage, pastel",
        category: "Editorial",
        image: img("vint2"),
        author: "@lume",
        likes: 199,
      },
    ],
  },
  {
    label: "Editorial — Vogue",
    items: [
      {
        id: "v1",
        title: "Vogue cover I",
        prompt:
          "High fashion magazine cover, dramatic lighting, bold typography mockup, editorial",
        category: "Editorial",
        image: img("vogue1"),
        author: "@editorial",
        likes: 2100,
      },
      {
        id: "v2",
        title: "Vogue cover II",
        prompt:
          "Glossy magazine cover, supermodel portrait, studio lighting, hyper detail",
        category: "Editorial",
        image: img("vogue2"),
        author: "@editorial",
        likes: 1850,
      },
    ],
  },
];

export const categoryGrid: PromptItem[] = [
  ...trendingNow,
  ...categoryRows.flatMap((r) => r.items),
];
