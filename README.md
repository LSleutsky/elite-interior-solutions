# Elite Interior Solutions

A pnpm workspace monorepo housing two independently deployable React Router 7 apps that share a
common UI, theme, and server layer.

## Apps

- **`apps/elite-basement-solutions`** (*`@elite/basement-solutions`*): basement waterproofing, mold
  remediation, and remodeling. Production: `www.elitebasementsolutions.com`.
- **`apps/elite-kitchens-bathrooms`** (*`@elite/kitchens-bathrooms`*): kitchen and bathroom
  remodeling. Production: `www.elitekitchensbathrooms.com`.

## Shared packages

- **`packages/ui`** (*`@elite/ui`*): shared layout, theme tokens, components, hooks, service-area
  data, and utilities. Brand-specific behavior is driven by each app's `site` config.
- **`packages/server`** (*`@elite/server`*): the Express app factory (`/api/contact`,
  `/api/images`) parameterized per app.
- **`packages/config`** (*`@elite/config`*): shared ESLint, Prettier, and TypeScript bases.

## Requirements

- Node `>=22`
- pnpm `11.7.0` (managed via Corepack: run `corepack enable` once)

## Development

```bash
pnpm install

pnpm basements   # Elite Basement Solutions  -> http://localhost:3000
pnpm kitchens    # Elite Interior Renewals -> http://localhost:3001
```

Both can run concurrently. Local environment variables are read from the workspace-root `.env`.

## Build

```bash
pnpm build              # both apps
pnpm build:basements    # one app
pnpm build:kitchens
```

## Quality

```bash
pnpm typecheck
pnpm lint
pnpm format
```

## Deployment

Each app ships its own `Dockerfile` and `docker-compose.yml` (build context is the repo root, so
the workspace and shared packages are available). Deploy one app without touching the other:
