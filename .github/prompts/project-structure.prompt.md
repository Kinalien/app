# Instructions

This project is a monorepo for `Kinalien` app - a pet care application with social interactions to share the care.
The project has the following structure:

- `packages/config` is a folder with shared configs between all folders: linter configuration, `tsconfig.json`, Tailwind CSS v4 theme, and icons collection.
- `packages/app` is the back end of the project. It's Hono.js app that can be deployed as Bun app, Deno or to Cloudflare workers. Hono.js helps with the differences between hosting platforms. It uses TypeScript for type safety. It uses `valibot` to validate request forms and inputs. It uses `drizzle` ORM for Database schema and queries. The DB is Postgres, with `pglite` when developing locally. The `app` uses `@solidjs/start` for the web interface, with Solid.js UI components defined in `packages/ui`. The `app` is using `arctic` and `@oslojs` packages to handle authentication.
- `packages/e2e` is a setup for e2e testing of the `app`, can be ignored for now as the tests are missing.
- `packages/native` holds the sources for the React Native app.
- `packages/ui` holds the sources for the component library of the Solid.js webapp from `packages/app`. These are "atoms" of the design system, separated into `ui` package to host the docs separately. Every component aims to use TailwindCSS v4, but when complex CSS is required, uses CSS modules. The classes are combined using `tailwind-merge` and `tailwind-variants`.
