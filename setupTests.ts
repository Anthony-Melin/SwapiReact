import { beforeAll, afterAll, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// this ensure jest-dom can be used in tests
import '@testing-library/jest-dom/vitest'

import { worker } from './src/mocks/server'

beforeAll(() => {
    // place to start workers for tests
    worker.listen()
})

afterAll(() => {
    // place to stop workers for tests
    worker.close()
})

afterEach(() => {
    cleanup()
    worker.resetHandlers()
})
