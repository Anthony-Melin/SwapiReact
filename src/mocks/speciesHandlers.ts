import { http, HttpResponse } from 'msw'

export default [
    http.get(`${import.meta.env.VITE_SWAPI_URL}/species`, () => {
        return HttpResponse.json({
            count: 1,
            next: null,
            previous: null,
            results: [
                {
                    name: 'Human',
                    url: 'https://swapi.dev/api/species/1/',
                },
            ],
        })
    }),
    http.get(
        `${import.meta.env.VITE_SWAPI_URL}/species/:id`,
        ({ params: { id } }) => {
            if (id === '1') {
                return HttpResponse.json({
                    created: '2025-05-10T18:21:59.794Z',
                    edited: '2025-05-10T18:21:59.794Z',
                    classification: 'mammal',
                    name: 'Human',
                    designation: 'sentient',
                    eye_colors: 'brown, blue, green, hazel, grey, amber',
                    people: [
                        'https://swapi.dev/api/people/66',
                        'https://swapi.dev/api/people/67',
                        'https://swapi.dev/api/people/68',
                        'https://swapi.dev/api/people/74',
                    ],
                    skin_colors: 'caucasian, black, asian, hispanic',
                    language: 'Galactic Basic',
                    hair_colors: 'blonde, brown, black, red',
                    homeworld: 'https://swapi.dev/api/planets/9',
                    average_lifespan: '120',
                    average_height: '180',
                    url: 'https://swapi.dev/api/species/1',
                })
            }
            return new HttpResponse(null, { status: 404 })
        }
    ),
]
