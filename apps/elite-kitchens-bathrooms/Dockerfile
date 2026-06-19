# syntax=docker/dockerfile:1
# Build context is the repository root (see docker-compose.yml) so the pnpm
# workspace and shared packages are available to the build.

FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /workspace

FROM base AS build
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm --filter @elite/kitchens-bathrooms build
# Bundle the app and its workspace deps (prod only) into a self-contained /app.
RUN pnpm --filter @elite/kitchens-bathrooms deploy --legacy --prod /app

FROM base AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app ./
COPY --from=build /workspace/apps/elite-kitchens-bathrooms/build ./build
EXPOSE 3000
CMD ["node", "--import", "tsx", "server.ts"]
