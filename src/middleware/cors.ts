import cors from "cors"

const ACCEPTED_ORIGINS = [
  'http://localhost:4200',
  'http://localhost:9876'
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}): cors.CorsOptions => ({
  origin: (origin: string | undefined, callback: (arg0: Error | null, arg1?: boolean) => void) => {
    if (acceptedOrigins.includes(origin as string) || !origin) return callback(null, true)
    return callback(new Error('Not allowed by CORS'))
  },
  methods: ['GET'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
})