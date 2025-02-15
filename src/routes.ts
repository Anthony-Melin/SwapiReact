import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
    index('./pages/Home.tsx'),
    route(':section', './pages/Explorer.tsx'),
    route(':section/:id', './pages/Description.tsx'),
] satisfies RouteConfig
