# For Shubh - A Memory Gift (Single Page)

A premium, respectful romantic memory website - built as a gentle gift (not a pressure proposal).

## Tech

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

## If `npm install` fails on Windows (path length / OneDrive)

If you see errors about missing files or very deep `node_modules` paths, use a temporary drive letter so installs run with a shorter path:

```powershell
subst X: "C:\Users\dk358\OneDrive\Desktop\forme"
cd X:\
npm install
npm run dev
```

To remove it later:

```powershell
subst X: /d
```

## Customize later (optional)

- Edit all written content in `src/lib/content.ts`
- Edit site title/description in `src/app/layout.tsx`
- Update section styling in `src/app/globals.css` and `src/components/*`
- Add background music by placing an MP3 at `public/audio/bgm.mp3` (the site shows a Play button; browsers require a user tap/click to start audio)

## Build for production

```bash
npm run build
npm start
```
