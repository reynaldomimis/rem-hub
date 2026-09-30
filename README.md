# REM.Hub

REM.Hub is a team-built frontend hub for presenting our apps and selected digital resources in one place. Visitors can open categories, view an app’s stored details, and continue to its Google Play listing or another external destination.

## Current catalog

- **Injector Origin** — Android app with a Google Play destination.
- **e-Bookora** — educational eBook resource.
- **Minty AI: Art Prompt Presets** — published Android prompt-reference library with a Google Play destination. It helps creators browse and copy prompt formulas for external AI tools; it is not an image generator.
- **Movies** — category ready for future entries.

## Features

- Client-side category routes for Injectors, Books, Movies, and SOFTWARE / APK.
- Responsive Swiper cards that open an app-details modal.
- Direct Google Play and external resource links.
- Explicit empty states for categories without entries.
- Responsive navigation, footer links, and a static terms/privacy modal.

## Tech stack

- React 19 and React DOM 19
- JavaScript / JSX
- React Router 7
- Create React App (`react-scripts` 5)
- Tailwind CSS 3 and custom CSS
- Swiper 11
- npm

## Project scope

The catalog is currently stored in local JavaScript arrays. REM.Hub has no backend, database, user authentication, payment processing, or REST API integration in this repository. Download and install actions open external destinations; REM.Hub does not host or process files through its own server.

## Run locally

```bash
npm install
npm start
```

Create a production build with:

```bash
npm run build
```

## Links

- [Project website](https://rem-hub.vercel.app)
- [Minty AI on Google Play](https://play.google.com/store/apps/details?id=com.upreyvan.mintyai)
