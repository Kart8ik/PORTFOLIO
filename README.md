# Shri Karthik – Portfolio

A modular, data-driven developer portfolio built with React + Vite. The UI relies on reusable components (Shadcn UI, Framer Motion, Tailwind utilities) while every content section is hydrated from lightweight data modules. Add or edit data inside `src/data` and the relevant components render the new entries automatically—no component code changes needed.

## Highlights
- **Data-first architecture** – projects, experience, skills, and blog links live in dedicated files inside `src/data`. Pages map over those arrays/objects and render corresponding components (`ProjectBox`, `ExperienceBox`, `SkillBadge`, `BlogBox`) without extra wiring.
- **Reusable UI primitives** – cards, badges, buttons, and alert dialogs come from Shadcn UI and sit in `src/components/ui`, keeping styling consistent.
- **Motion-rich navigation** – views are routed via `react-router-dom` and animated with Framer Motion to keep transitions smooth.
- **Responsive experience guardrails** – `DesktopPrompt` nudges visitors on small screens while `ParticlesBackground` adds ambient motion on desktop.
- **Optional Instagram gallery** – configure a token once in `src/config/instagram.js` / `.env` and the `useInstagramFeed` hook hydrates the gallery or gracefully fails when unconfigured.

## Project Structure
```text
.
├── public/                 # Static files (favicons, resume, manifest)
├── src/
│   ├── assets/             # Logos, skill icons, project imagery, gifs
│   ├── components/
│   │   ├── ui/             # Shadcn UI primitives (Card, Button, etc.)
│   │   └── *.jsx           # Feature components (ProjectBox, SkillBadge…)
│   ├── config/instagram.js # Central place for Instagram credentials
│   ├── data/               # <-- The content layer
│   │   ├── BlogsData.jsx       (array of blog entries)
│   │   ├── ExperienceData.jsx  (array of roles)
│   │   ├── ProjectsData.jsx    (array of portfolios items)
│   │   └── SkillsData.jsx      (category → skills map)
│   ├── hooks/useInstagramFeed.js
│   ├── pages/              # Route-level sections (Skills, Projects, etc.)
│   ├── App.jsx             # Route definitions + transitions
│   └── main.jsx            # Vite bootstrapper
├── package.json
└── vite.config.js
```

## Content Pipeline (`src/data`)
Every page imports its data source and maps it straight into components:
- `Projects.jsx` → `projects` from `ProjectsData.jsx` → `<ProjectBoxComplex {...project} />`
- `Experience.jsx` → `experience` array → `<ExperienceBoxComplex {...role} />`
- `Skills.jsx` → `skills` object → category cards full of `<SkillBadge />`
- `Blogs.jsx` → `blogs` array → `<BlogBox {...blog} />`

Because the components expect consistent shapes, you only edit the data files to add new content:
1. Drop any required media into `src/assets` (icons or project images).
2. Add a new entry inside the relevant `src/data/*.jsx` file.
3. The next page load automatically renders the new card with proper layout, CTAs, icons, and animations.

> Tip: `SkillBadge` looks up icons using keys defined in `skillsData`. When introducing a new badge, place its PNG in `src/assets`, import it inside `SkillBadge.jsx`, and register the key in the `skills` map.

## Instagram Feed Configuration
`src/hooks/useInstagramFeed.js` now talks to the Vercel function at `/api/instagram`, which keeps the long-lived Instagram token on the server. Configure it via project/environment settings:

- `INSTAGRAM_ACCESS_TOKEN` (Vercel environment variable) – long-lived Instagram Basic Display token refreshed every ~60 days.
- `VITE_INSTAGRAM_MEDIA_LIMIT` (optional) – override how many posts are requested.
- `VITE_INSTAGRAM_USERNAME` (optional) – controls the linked profile handle/URL.
- `VITE_INSTAGRAM_DISABLED=true` – flip this on if you want to hide the gallery entirely.

Local testing goes through `vercel dev` so the function can read `INSTAGRAM_ACCESS_TOKEN`:

```bash
INSTAGRAM_ACCESS_TOKEN=xxx vercel dev
```

If the serverless function fails (missing token, rate limit, etc.), the hook surfaces the error state so the gallery hides without crashing the rest of the site.

## Getting Started
```bash
git clone https://github.com/Kart8ik/PORTFOLIO
cd PORTFOLIO
npm install
npm run dev
```
Visit the printed localhost URL (default `http://localhost:5173`). Hot Module Replacement keeps UI + data edits instant.

### Available Scripts
- `npm run dev` – start Vite with HMR.
- `npm run build` – production build with optimized assets.
- `npm run preview` – locally serve the production build.
- `npm run lint` – run ESLint with the shared config.

## Deployment
The app is optimized for static hosting (Vercel, Netlify, GitHub Pages). For Vercel:
1. Push the repo to GitHub.
2. Import into Vercel, set the build command to `npm run build`, and output directory to `dist/`.
3. Add the Instagram env variables in the Vercel project settings.

## Customization Checklist
- **Branding** – update `src/assets/profile.png`, favicons in `public/`, and hero copy in `src/pages/First.jsx`.
- **Sections** – add/edit entries in `src/data` to keep every section synchronized.
- **Badges** – extend `SkillBadge.jsx` when introducing new tech stacks.
- **Animations** – tweak transitions in each page’s `pageVariants`/`pageTransition` objects for different pacing.

By separating data, presentation, and configuration this portfolio stays easy to extend—drop in new entries, swap assets, or disable integrations without touching the underlying components.
