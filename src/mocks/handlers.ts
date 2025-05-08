import { http, HttpResponse } from 'msw'
import { SWAPI_URL } from '@api/utils.ts'
import peopleHandlers from './peopleHandlers.ts'
import filmHandlers from './filmHandlers.ts'

export const handlers = [
    http.get(SWAPI_URL, () => {
        return HttpResponse.json({
            people: 'https://swapi.dev/api/people/',
            films: 'https://swapi.dev/api/films/',
        })
    }),
    ...peopleHandlers,
    ...filmHandlers,
]
