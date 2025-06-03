import { http, HttpResponse } from 'msw'

const mocks = {
    root: {
        section1: 'api/section1/',
        section2: 'api/section2/',
    },
    section1: {
        page1: {
            count: 4,
            next: '/api/section1/?page=2',
            previous: null,
            results: [
                {
                    name: 'Item 1 of section 1',
                    url: '/api/section1/1/',
                },
                {
                    name: 'Item 2 of section 1',
                    url: '/api/section1/2/',
                },
            ],
        },
        page2: {
            count: 4,
            next: null,
            previous: '/api/section1/?page=1',
            results: [
                {
                    title: 'Item 3 of section 1',
                    url: '/api/section1/3/',
                },
                {
                    title: 'Item 4 of section 1',
                    url: '/api/section1/4/',
                },
            ],
        },
        item1: {
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            hair_color: 'blond',
            skin_color: 'fair',
            eye_color: 'blue',
            birth_year: '19BBY',
            gender: 'male',
            homeworld: '/api/homeworld/1/',
            films: [
                '/api/films/1/',
                '/api/films/2/',
            ],
            species: [
                '/api/species/14/',
                '/api/species/30/',
            ],
            vehicles: [
                '/api/vehicles/14/',
                '/api/vehicles/30/',
            ],
            starships: [
                '/api/starships/12/',
                '/api/starships/22/',
            ],
            created: '2014-12-09T13:50:51.644000Z',
            edited: '2014-12-20T21:17:56.891000Z',
            url: '/api/section1/1',
            episode_id: 4,
            opening_crawl: "It is a period of civil war.",
            director: 'George Lucas',
            producer: 'Gary Kurtz, Rick McCallum',
            release_date: '1977-05-25',
            characters: [
                '/api/characters/1/',
                '/api/characters/2/',
            ],
            climate: 'arid',
            surface_water: '1',
            diameter: '10465',
            rotation_period: '23',
            terrain: 'desert',
            gravity: '1 standard',
            orbital_period: '304',
            population: '200000',
            classification: 'mammal',
            designation: 'sentient',
            eye_colors: 'brown, blue, green, hazel, grey, amber',
            people: [
                '/api/people/66',
                '/api/people/67',
            ],
            skin_colors: 'caucasian, black, asian, hispanic',
            language: 'Galactic Basic',
            hair_colors: 'blonde, brown, black, red',
            average_lifespan: '120',
            average_height: '180',
            consumables: '1 year',
            cargo_capacity: '3000000',
            passengers: '600',
            max_atmosphering_speed: '950',
            crew: '30-165',
            length: '150',
            model: 'CR90 corvette',
            cost_in_credits: '3500000',
            manufacturer: 'Corellian Engineering Corporation',
            MGLT: '60',
            starship_class: 'corvette',
            hyperdrive_rating: '2.0',
            vehicle_class: 'wheeled',
            pilots: [
                "/api/pilots/1",
                "/api/pilots/2"
            ],
        },
        item2: {
            title: 'R2D2',
            films: [],
            species: [],
            vehicles: [],
            starships: [],
            characters: [],
            people: [],
            pilots: [],
            surface_water: '0'
        },
    },
}

export const handlers = [
    http.get('/api.json', () => HttpResponse.json(mocks.root)),
    http.get('/api/section1.json', () => HttpResponse.json(mocks.section1.page1)),
    http.get('/api/section1/page/1.json', () => HttpResponse.json(mocks.section1.page1)),
    http.get('/api/section1/page/2.json', () => HttpResponse.json(mocks.section1.page2)),
    http.get('/api/section1/1.json', () => HttpResponse.json(mocks.section1.item1)),
    http.get('/api/section1/2.json', () => HttpResponse.json(mocks.section1.item2)),
    http.all('/api/*', () => new HttpResponse(null, { status: 404 })),
]
