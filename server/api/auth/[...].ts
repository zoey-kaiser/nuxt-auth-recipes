import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  secret: process.env.AUTH_SECRET,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: '(hint: jsmith)' },
        password: { label: 'Password', type: 'password', placeholder: '(hint: hunter2)' },
      },
      authorize(credentials: any) {
        console.warn('ATTENTION: You should replace this with your real providers or credential provider logic! The current setup is not safe')
        const user = { id: '1', name: 'J Smith', username: 'jsmith', password: 'hunter2' }

        if (credentials?.username === user.username && credentials?.password === user.password) {
          return user
        }
        else {
          console.error('Warning: Malicious login attempt registered, bad credentials provided')
          return null
        }
      },
    }),
  ],
})
