# Blender Sculpting Learning Path

An interactive, self-paced learning path from absolute beginner to production-ready sculptor in Blender. Track your progress through 87 topics and 17 hands-on challenges — all saved locally in your browser.

## Features

- **5 levels** — Beginner Foundations → Core Techniques → Intermediate → Advanced → Expert/Production
- **87 topics** across 26 modules, each linked to a curated resource (Blender Docs, YanSculpts, Zacharias Reinhardt, Blender Guru, Ponte Ryuurui)
- **17 challenges** — practical projects that test your skills at every stage
- **Dual progress bars** — learning topics and challenges tracked separately
- **Per-level mini progress bar** — at-a-glance completion for each level
- **Bookmark** — pin any topic as your current focus; shown as a persistent chip in the header
- **Challenge notes** — write WIP links, dates, or reflections per challenge, saved automatically
- **Difficulty filter** — show only Beginner / Intermediate / Advanced / Expert challenges
- **Export / Import** — back up your progress as JSON and restore it on any device
- **Light & dark mode** — toggle with the ☀/☾ button in the header
- **No sign-up, no server** — everything runs in the browser and persists in `localStorage`

## Usage

### Open directly in a browser

```
open index.html
```

No build step or server required. Works from `file://`.

### Local dev server

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Curriculum Overview

| Level | Title | Modules | Topics |
|-------|-------|---------|--------|
| 1 | Beginner Foundations | Interface & Navigation, First Steps in Sculpt Mode, Essential Brushes, Starting from Primitives, Matcap & Viewport Display | 17 |
| 2 | Core Techniques | Dynamic Topology, Multiresolution Sculpting, Masking & Face Sets, Organic Form Language, Brush Alphas & Stroke Methods | 17 |
| 3 | Intermediate Sculpting | Facial Anatomy, Body Proportions, Neck/Shoulders/Ear, Cloth & Fabric, Remeshing & Retopology | 18 |
| 4 | Advanced Sculpting | Full Character Pipeline, Hands & Feet, Creature & Character Design, Texture & Normal Baking, Hair Sculpting | 17 |
| 5 | Expert / Production | Production Workflows, Stylized vs Realistic, Environment Sculpting, Sculpting for 3D Printing, Cross-Software Pipelines, Portfolio Development | 18 |

## Challenges

Challenges span all four difficulty levels and are designed to be completed after the corresponding curriculum level:

| Difficulty | Challenges |
|-----------|-----------|
| Beginner | Perfect Smooth Sphere, Symmetrical Face Blockout, Rock Formation Study, Speed Sculpt (30 min) |
| Intermediate | Stylized Cartoon Head, Realistic Human Ear, Human Hand, Drape Study, Animal Head |
| Advanced | Original Creature Bust, Realistic Portrait, Hard-Surface Armor Piece, Copy a Master, Stylized Full Figure |
| Expert | Complete Character Bust, Print-Ready Miniature, Prop / Weapon |

## Deployment

The app is a static site — push to any static host. For GitHub Pages:

1. Push the repository to GitHub
2. Go to **Settings → Pages**
3. Set source to **branch: `main`, folder: `/ (root)`**
4. Save — the site will be live at `https://<username>.github.io/<repo>/`

## Resources

All topic links point to free, publicly available resources:

- [Blender Docs](https://docs.blender.org/manual/en/latest/) — official reference for all Blender-specific tools
- [YanSculpts](https://www.youtube.com/@YanSculpts) — stylized sculpting and workflow tips
- [Zacharias Reinhardt](https://www.youtube.com/@ZachariasReinhardt) — anatomy and realistic character sculpting
- [Blender Guru](https://www.youtube.com/@blenderguru) — broad Blender tutorials including rendering and baking
- [Ponte Ryuurui](https://www.youtube.com/@PonteRyuurui) — creature design, production pipelines, and cross-software workflows
