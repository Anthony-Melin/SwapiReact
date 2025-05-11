import { http, HttpResponse } from 'msw'

export default [
    http.get(`${import.meta.env.VITE_SWAPI_URL}/vehicles`, () => {
        return HttpResponse.json({
            count: 1,
            next: null,
            previous: null,
            results: [
                {
                    name: 'Sand Crawler',
                    url: 'https://swapi.dev/api/vehicles/4/',
                },
            ],
        })
    }),
    http.get(
        `${import.meta.env.VITE_SWAPI_URL}/vehicles/:id`,
        ({ params: { id } }) => {
            if (id === '4') {
                return HttpResponse.json({
                    created: '2025-05-10T18:21:59.795Z',
                    edited: '2025-05-10T18:21:59.795Z',
                    consumables: '2 months',
                    name: 'Sand Crawler',
                    cargo_capacity: '50000',
                    passengers: '30',
                    max_atmosphering_speed: '30',
                    crew: '46',
                    length: '36.8 ',
                    model: 'Digger Crawler',
                    cost_in_credits: '150000',
                    manufacturer: 'Corellia Mining Corporation',
                    vehicle_class: 'wheeled',
                    pilots: [],
                    films: [
                        'https://swapi.dev/api/films/1',
                        'https://swapi.dev/api/films/5',
                    ],
                    url: 'https://swapi.dev/api/vehicles/4',
                })
            }
            return new HttpResponse(null, { status: 404 })
        }
    ),
]
