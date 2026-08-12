# Grid Locator

This is a React component that visualizes an object's position and direction on a 5x5 grid, built with Material UI and documented with Storybook.

The grid follows a South-West coordinate system: (0,0) is the bottom-left corner. Position and direction are provided as a single string, e.g. `"1,1 NORTH"`.

## Tech Stack
- React + TypeScript (Vite)
- Material UI
- Storybook
- Vitest + React Testing Library

## Getting Started

```bash
npm install
npm run dev          # run the app
npm run storybook    # view component stories/docs
npm test             # run unit tests
npm run build        # production build
npm run lint         # lint check