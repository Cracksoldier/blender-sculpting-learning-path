# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the app

Open `index.html` directly in a browser — no build step, no server, no dependencies. Everything works from `file://`.

For a local dev server: `python3 -m http.server 8080` then open `http://localhost:8080`.

## Architecture

Pure static app: no framework, no bundler, no external dependencies. Four files only.

### `app.js` — data + all logic

**Data constants** (top of file):
- `CURRICULUM` — nested array: levels → modules → topics. Each topic: `{ id, title, resourceUrl, resourceLabel }`. Topic IDs follow `l<level>-<module-abbrev>-<n>` (e.g. `l2-al-3`).
- `CHALLENGES` — flat array: `{ id, title, difficulty, description }`. Difficulties: `beginner | intermediate | advanced | expert`.

**Progress state** — module-level `progress` object `{ topics: Set, challenges: Set, notes: {}, bookmark: string|null }`. Persisted to `localStorage` under key `blender_sculpt_v1`. Theme (dark/light) is stored separately under `blender_sculpt_theme`.

**Rendering**:
- `renderCurriculum()` / `renderChallenges()` do a full DOM rebuild of their respective sections.
- `buildChallengeCard(challenge)` builds and returns a single card element (used both by `renderChallenges` and for in-place `replaceWith` after toggle).
- `refreshLevelHeader(levelId)` surgically updates a level header's count text, mini progress bar fill, and ✓ Complete badge — called on every topic checkbox change to avoid a full re-render.
- `topic._levelId` is stamped onto each topic data object by `renderModule(mod, levelId)` so the change-event closure can call `refreshLevelHeader` without DOM traversal.

**Features and their entry points**:
| Feature | Key functions |
|---------|--------------|
| Bookmark / focus chip | `setBookmark(topicId)`, `updateFocusChip()` |
| Difficulty filter | `activeFilters` Set, `applyDifficultyFilter()`, `initDifficultyFilter()` |
| Expand / Collapse All | `initExpandAll()`, `updateExpandAllBtn()` |
| Per-level mini bar | inline in `renderCurriculum()` + `refreshLevelHeader()` |
| Challenge notes | textarea `input` event inside `buildChallengeCard()` |
| Export / Import | `exportProgress()`, `importProgress(file)` |
| Light mode | `applyTheme(theme)`, `toggleTheme()` |

### `index.html` — static shell

Provides the sticky header skeleton (`.header-brand`, `.header-center` with progress bars + focus chip, `.theme-btn`), two `<section>` containers with their action bars (expand-all button, difficulty filter buttons), and the footer with export/import/reset. All curriculum and challenge DOM is injected by `app.js`.

### `style.css` — design system

- CSS custom properties for all colours and spacing; `--lvl-1` through `--lvl-5` for level accent colours.
- Level colour variants via `data-level` attribute selectors on `.level-block`.
- Challenge difficulty colours via `data-difficulty` selectors on `.challenge-card`.
- Light mode overrides in `[data-theme="light"]` block at the bottom of the file.

## Adding content

**New topic** — append to the relevant module's `topics` array. ID must be unique; use the `l<level>-<module-abbrev>-<n>` convention.

**New module** — append to the level's `modules` array. No CSS changes needed.

**New level** — append to `CURRICULUM` and add `data-level` CSS selectors in `style.css` for border colour, `.level-badge` colours, and `.level-mini-fill` background.

**New challenge** — append to `CHALLENGES`. Difficulty must be one of the four existing values (filter buttons are static in `index.html`). To add a new difficulty, also add a `.filter-btn` in `index.html` and a `[data-filter]` CSS rule.

## GitHub Pages

Already deployed. Pushing to `main` on `github.com/Cracksoldier/blender-sculpting-learning-path` updates the live site automatically (Pages is configured to serve from branch `main`, root `/`).
