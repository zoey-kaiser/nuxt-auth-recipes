import { getServerSession } from '#auth'

export default defineEventHandler((event) => {
  return getServerSession(event)
})
