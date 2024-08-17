import { eventHandler } from 'h3'

export const MOCKED_USER = {
  user: {
    role: 'admin',
    email: 'hi@sidebase.io',
    name: 'sidebase'
  }
}

// App-side mocks
export function useAuth() {
  return {
    data: ref(MOCKED_USER),
    status: ref('authenticated'),
    getSession: () => MOCKED_USER,
    signOut: () => {},
  }
}

// Server-side mocks
export const getServerSession = () => MOCKED_USER
export const NuxtAuthHandler = () => eventHandler(() => MOCKED_USER)
