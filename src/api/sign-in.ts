import { api } from '@/lib/axios'

export interface SignInBoyd {
  email: string
}

export async function signIn({ email }: SignInBoyd) {
  await api.post('/authenticate', { email })
}
