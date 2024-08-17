import { getBrowser, setup, url } from '@nuxt/test-utils'

export async function renderPage(path: string) {
  const browser = await getBrowser()
  const page = await browser.newPage({})

  if (path) {
    await page.goto(url(path), { waitUntil: 'networkidle' })
    await page.waitForFunction(() => window.useNuxtApp?.())
  }

  return { page }
}

export function nuxtTestUtilSetup() {
  return setup({
    dev: true,
    server: true,
    browser: true,
    browserOptions: {
      type: 'chromium',
      // Switch to `false` to see how the browser automatically does things.
      launch: { headless: true },
    },
  })
}
