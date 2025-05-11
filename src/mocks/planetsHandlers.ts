import { http, HttpResponse } from 'msw'

export default [
    http.get(`${import.meta.env.VITE_SWAPI_URL}/planets`, () => {
        return HttpResponse.json({
            count: 1,
            next: null,
            previous: null,
            results: [
                {
                    name: 'Tatooine',
                    url: 'https://swapi.dev/api/planets/1/',
                },
            ],
        })
    }),
    http.get(
        `${import.meta.env.VITE_SWAPI_URL}/planets/:id`,
        ({ params: { id } }) => {
            if (id === '1') {
                return HttpResponse.json({
                    created: '2025-05-10T18:21:59.792Z',
                    edited: '2025-05-10T18:21:59.792Z',
                    climate: 'arid',
                    surface_water: '1',
                    name: 'Tatooine',
                    diameter: '10465',
                    rotation_period: '23',
                    terrain: 'desert',
                    gravity: '1 standard',
                    orbital_period: '304',
                    population: '200000',
                    url: 'https://swapi.dev/api/planets/1',
                })
            }
            return new HttpResponse(null, { status: 404 })
        }
    ),
]
