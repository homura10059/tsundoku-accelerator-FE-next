import { Session } from 'next-auth'

export type SessionProps = {
  session?:Session
  loading: boolean
}