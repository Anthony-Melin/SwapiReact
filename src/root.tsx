import { PropsWithChildren } from 'react'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'

export const links = () => [
    {
        rel: 'icon',
        type: 'image/svg',
        href: './vite.svg',
    },
    {
        rel: 'stylesheet',
        type: 'text/css',
        href: './index.css'
    }
]

export const meta = () => [
    {
        charSet: 'UTF-8',
    },
    {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
    },
]

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <html lang="en">
            <head>
                <title>Swapi React</title>
                <Meta />
            </head>
            <body>
                <Links />
                {children}
                <Scripts />
                <ScrollRestoration />
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
