// Overwrite @sidebase/nuxt-auth with the mocked module when running tests
const mockAuthModule = process.env.VITEST ? ['./test/mocks/setup.ts'] : []

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-17',
  modules: ['@sidebase/nuxt-auth', ...mockAuthModule],
  typescript: {
    shim: false
  },
})
