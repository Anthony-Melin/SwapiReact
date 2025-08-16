import React from 'react'
import ReactDOM from 'react-dom/client'
import { HydratedRouter } from 'react-router/dom'
import { SectionContext } from '@hooks/useSections.tsx'
import { NamesContext } from '@hooks/useNames.tsx'
import getFetch from '@api/getFetch.ts'
import Root from '@api/root.types.ts'

const enableMocking = async () => {
    if (import.meta.env.VITE_MSW) {
        const { worker } = await import('./mocks/browser')
        return worker.start()
    }
    return
}

enableMocking().then(async () => {
    const root = await getFetch<Root>()
    ReactDOM.hydrateRoot(
        document,
        <React.StrictMode>
            <SectionContext value={root.sections}>
                <NamesContext value={root.names}>
                    <HydratedRouter />
                </NamesContext>
            </SectionContext>
        </React.StrictMode>
    )
})
