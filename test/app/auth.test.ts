import { describe, it } from 'vitest'
import { expect } from '@playwright/test'
import { $fetch } from '@nuxt/test-utils/e2e'
import { nuxtTestUtilSetup, renderPage } from '../utils'

import { MOCKED_USER } from '../mocks/auth'

// Prepare environment for testing
await nuxtTestUtilSetup()

describe('client-side authentication', () => {
  it('status is "authenticated"', async () => {
    const { page } = await renderPage('/')
    await expect(page.getByTestId('status')).toHaveText('authenticated')
  }, 1000 * 60 * 3)

  it(`name is "${MOCKED_USER.user.name}"`, async () => {
    const { page } = await renderPage('/')
    await expect(page.getByTestId('name')).toHaveText(MOCKED_USER.user.name)
  }, 1000 * 60 * 3)

  it(`email is "${MOCKED_USER.user.email}"`, async () => {
    const { page } = await renderPage('/')
    await expect(page.getByTestId('email')).toHaveText(MOCKED_USER.user.email)
  }, 1000 * 60 * 3)

  it(`role is "${MOCKED_USER.user.role}"`, async () => {
    const { page } = await renderPage('/')
    await expect(page.getByTestId('role')).toHaveText(MOCKED_USER.user.role)
  }, 1000 * 60 * 3)
})

describe('server-side authentication', async () => {
  it('session matches user', async () => {
    const sessionRes = await $fetch('/api/session')
    expect(sessionRes).toStrictEqual(MOCKED_USER)
  }, 1000 * 60 * 3)
})
