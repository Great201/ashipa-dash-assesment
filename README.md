# Ashipa Electric — Audits & Sites Dashboard

Angular dashboard built to match the Ashipa Electric Corp. audit overview design. The implementation focuses on visual fidelity, Angular Material components, Bootstrap grid layout, and signal-driven state management for pagination.

## Stack
- Angular 21 (standalone components + signals + new template control flow)
- Angular Material (MatTable, MatButton, MatIcon, MatCard)
- Bootstrap 5 (layout/grid)

## Development

```bash
npm install
npm run start
```

Open `http://localhost:4200`.

## Production build

```bash
npm run build -- --configuration production
```

Build output is written to `dist/ashipa/browser`.

## Docker (bonus)

```bash
docker build -t ashipa-dashboard .
docker run --rm -p 8080:80 ashipa-dashboard
```

Open `http://localhost:8080`.

## Design fidelity notes
- Sidebar, topbar, cards, and tables are tuned to match spacing, typography, and shadows from the provided design.
- Metric card icons are SVGs loaded from `/public` for 1:1 shape fidelity.
- Pagination is implemented with signals (page index + page size) and updates reactively.
- If the “Console/Body” font is provided, it can be dropped into `/public/fonts` and wired in `src/styles.css`.

## Project structure (high level)
- `src/app/components/` — sidebar, topbar, metrics, and reusable table components
- `src/app/services/audit-data.service.ts` — mock data service for the two tables
- `src/styles.css` — global theme tokens and base styles
