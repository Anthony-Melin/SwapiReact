import { PropsWithChildren } from 'react'
import {
    Link,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from 'react-router'
import { urlParse } from '@api/utils.ts'
import useSections from '@hooks/useSections.tsx'

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Swapi React</title>
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export const HydrateFallback = () => {
    return <div />
}

export const ErrorBoundary = () => {
    return <div />
}

const Root = () => {
    const sections = useSections()
    return (
        <>
            <header>
                <Link to="/">
                    <strong>SwapiReact</strong>
                </Link>
                {Object.entries(sections).map(([sectionLabel, sectionUrl]) => {
                    return (
                        <Link to={urlParse(sectionUrl)} key={sectionLabel}>
                            {sectionLabel}
                        </Link>
                    )
                })}
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Root
