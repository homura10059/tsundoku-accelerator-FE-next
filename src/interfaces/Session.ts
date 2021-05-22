import { Session } from 'next-auth/client'

export type SessionProps = {
  session?: Session
  loading: boolean
}
