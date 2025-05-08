import { http, HttpResponse } from 'msw'
import peopleHandlers from './peopleHandlers.ts'
import filmHandlers from './filmHandlers.ts'

export const handlers = [
    http.get(import.meta.env.VITE_SWAPI_URL, () => {
        return HttpResponse.json({
            people: `${import.meta.env.VITE_SWAPI_URL}/people/`,
            films: `${import.meta.env.VITE_SWAPI_URL}/films/`,
        })
    }),
    ...peopleHandlers,
    ...filmHandlers,
]
