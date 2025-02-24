import {type RouteConfig, index, route, layout} from '@react-router/dev/routes'

export default [
    index('./pages/Home.tsx'),
    layout('./layouts/Navigation.tsx', [
        route(':section', './pages/Explorer.tsx'),
        route(':section/:id', './pages/Description.tsx'),
    ]),
] satisfies RouteConfig
