import { http, HttpResponse } from 'msw'

export default [
    http.get(`${import.meta.env.VITE_SWAPI_URL}/starships`, () => {
        return HttpResponse.json({
            count: 1,
            next: null,
            previous: null,
            results: [
                {
                    name: 'CR90 corvette',
                    url: 'https://swapi.dev/api/starships/2/',
                },
            ],
        })
    }),
    http.get(
        `${import.meta.env.VITE_SWAPI_URL}/starships/:id`,
        ({ params: { id } }) => {
            if (id === '2') {
                return HttpResponse.json({
                    created: '2025-05-10T18:21:59.797Z',
                    edited: '2025-05-10T18:21:59.797Z',
                    consumables: '1 year',
                    name: 'CR90 corvette',
                    cargo_capacity: '3000000',
                    passengers: '600',
                    max_atmosphering_speed: '950',
                    crew: '30-165',
                    length: '150',
                    model: 'CR90 corvette',
                    cost_in_credits: '3500000',
                    manufacturer: 'Corellian Engineering Corporation',
                    pilots: [],
                    MGLT: '60',
                    starship_class: 'corvette',
                    hyperdrive_rating: '2.0',
                    films: [
                        'https://swapi.dev/api/films/1',
                        'https://swapi.dev/api/films/3',
                        'https://swapi.dev/api/films/6',
                    ],
                    url: 'https://swapi.dev/api/starships/2',
                })
            }
            return new HttpResponse(null, { status: 404 })
        }
    ),
]
