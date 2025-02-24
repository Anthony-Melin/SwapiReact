import { PropsWithChildren } from 'react'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'

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
    return <Outlet />
}

export default Root
