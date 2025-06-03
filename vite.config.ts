/// <reference types="vitest/config" />
import { defineConfig, loadEnv } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())
    return {
        plugins: [!process.env.VITEST && reactRouter()],
        base: env.VITE_BASE_URL,
        test: {
            globals: false,
            environment: 'jsdom',
            include: ['./src/**/*.test.*'],
            exclude: ['**/__snapshots__/**'],
            setupFiles: 'setupTests.ts',
            coverage: {
                all: true,
                include: ['**/src/**'],
                exclude: [
                    '**/*.test.*',
                    '**/*.types.*',
                    '.react-router/**',
                    'src/mocks/**',
                    './src/root.tsx',
                    './src/routes.ts',
                    './src/entry.client.tsx',
                    './src/react-router.config.ts',
                    './src/vite-env.d.ts',
                ],
            },
        },
        resolve: {
            alias: {
                '@api': path.resolve(__dirname, './src/api'),
                '@components': path.resolve(__dirname, './src/components'),
                '@hooks': path.resolve(__dirname, './src/hooks'),
                '@pages': path.resolve(__dirname, './src/pages'),
            },
        },
    }
})
