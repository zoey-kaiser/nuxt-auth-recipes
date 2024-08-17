# Mocking with Vitest: `@sidebase/nuxt-auth`

In order to run end-to-end or component tests with Vitest, you will need to create a "mocked" version of the NuxtAuth composables for the test to interact with. In some cases if you are using the `local` or `refresh` provider with a Full-Stack application, you can also directly interact with your authentication API and mock the reponses inside your backend.

You can read the full guide [here](https://auth.sidebase.io/recipes/official/mocking-with-vitest).

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

### Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

Test the application
```bash
pnpm test
```

### Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```
