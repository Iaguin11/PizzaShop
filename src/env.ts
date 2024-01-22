import { z } from 'zod'

export interface ImportMeta {
  env: {
    VITE_API_URL: string
  }
}

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
})

export const env = envSchema.parse(import.meta)
