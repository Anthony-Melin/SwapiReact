import type { Config } from '@react-router/dev/dist/config'
import { loadEnv } from 'vite'

const env = loadEnv(process.env.NODE_ENV, process.cwd())

export default {
    ssr: false,
    appDirectory: './src',
    basename: env.VITE_BASE_URL,
} satisfies Config
