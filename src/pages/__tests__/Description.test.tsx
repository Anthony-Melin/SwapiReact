import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createRoutesStub } from 'react-router'
import Description, { clientLoader } from '@pages/Description.tsx'

describe('Description', () => {
    const Stub = createRoutesStub([
        {
            path: '/:section/:id',
            Component: Description,
            loader: clientLoader,
            HydrateFallback: () => <div data-testid="fallback" />,
            ErrorBoundary: () => <div data-testid="error" />,
        },
    ])

    const renderDescription = (sufixUrl: string) => {
        render(<Stub initialEntries={[sufixUrl]} />)
    }

    it('should render people 1', async () => {
        renderDescription('/people/1')

        expect(await screen.findByTestId('height')).toHaveTextContent(
            'Height: 172'
        )

        expect(await screen.findByTestId('mass')).toHaveTextContent('Mass: 77')

        expect(await screen.findByTestId('haircolor')).toHaveTextContent(
            'Hair color: blond'
        )

        expect(await screen.findByTestId('skincolor')).toHaveTextContent(
            'Skin color: fair'
        )

        expect(await screen.findByTestId('eyecolor')).toHaveTextContent(
            'Eye color: blue'
        )

        expect(await screen.findByTestId('birthyear')).toHaveTextContent(
            'Birth year: 19BBY'
        )

        expect(await screen.findByTestId('gender')).toHaveTextContent(
            'Gender: male'
        )

        expect(await screen.findByTestId('homeworld')).toHaveTextContent(
            'Home world: https://swapi.dev/api/planets/1/'
        )

        expect(await screen.findByTestId('film-title')).toHaveTextContent(
            'Films'
        )
        expect(await screen.findByTestId('film-0')).toHaveTextContent(
            'https://swapi.dev/api/films/1/'
        )
        expect(await screen.findByTestId('film-1')).toHaveTextContent(
            'https://swapi.dev/api/films/2/'
        )
        expect(await screen.findByTestId('film-2')).toHaveTextContent(
            'https://swapi.dev/api/films/3/'
        )
        expect(await screen.findByTestId('film-3')).toHaveTextContent(
            'https://swapi.dev/api/films/6/'
        )

        expect(await screen.findByTestId('species-title')).toHaveTextContent(
            'Species'
        )
        expect(await screen.findByTestId('species-empty')).toHaveTextContent(
            'No species linked'
        )

        expect(await screen.findByTestId('vehicle-title')).toHaveTextContent(
            'Vehicles'
        )
        expect(await screen.findByTestId('vehicle-0')).toHaveTextContent(
            'https://swapi.dev/api/vehicles/14/'
        )
        expect(await screen.findByTestId('vehicle-1')).toHaveTextContent(
            'https://swapi.dev/api/vehicles/30/'
        )

        expect(await screen.findByTestId('starship-title')).toHaveTextContent(
            'Starships'
        )
        expect(await screen.findByTestId('starship-0')).toHaveTextContent(
            'https://swapi.dev/api/starships/12/'
        )
        expect(await screen.findByTestId('starship-1')).toHaveTextContent(
            'https://swapi.dev/api/starships/22/'
        )

        expect(await screen.findByTestId('created')).toHaveTextContent(
            'Created: 09/12/2014 14:50:51'
        )

        expect(await screen.findByTestId('edited')).toHaveTextContent(
            'Edited: 20/12/2014 22:17:56'
        )

        expect(await screen.findByTestId('description-page')).toMatchSnapshot()
    })

    it('should render film 1', async () => {
        renderDescription('/films/1')

        expect(await screen.findByTestId('episode')).toHaveTextContent('4')

        expect(await screen.findByTestId('created')).toHaveTextContent(
            'Created: 10/05/2025 20:21:59'
        )

        expect(await screen.findByTestId('edited')).toHaveTextContent(
            'Edited: 10/05/2025 20:21:59'
        )
    })

    it('should render planet 1', async () => {
        renderDescription('/planets/1')

        expect(await screen.findByTestId('climate')).toHaveTextContent('Climate: arid')

        expect(await screen.findByTestId('surface_water')).toHaveTextContent('Surface has water: yes')

        expect(await screen.findByTestId('diameter')).toHaveTextContent('Diameter: 10465')

        expect(await screen.findByTestId('rotation_period')).toHaveTextContent('Period of rotation: 23')

        expect(await screen.findByTestId('terrain')).toHaveTextContent('Terrain: desert')

        expect(await screen.findByTestId('gravity')).toHaveTextContent('Gravity: 1 standard')

        expect(await screen.findByTestId('orbital_period')).toHaveTextContent('Orbital period: 304')

        expect(await screen.findByTestId('population')).toHaveTextContent('Population: 200000')

        expect(await screen.findByTestId('created')).toHaveTextContent(
            'Created: 10/05/2025 20:21:59'
        )

        expect(await screen.findByTestId('edited')).toHaveTextContent(
            'Edited: 10/05/2025 20:21:59'
        )
    })

    it('should render species 1', async () => {
        renderDescription('/species/1')

        expect(await screen.findByTestId('classification')).toHaveTextContent('Classification: mammal')

        expect(await screen.findByTestId('designation')).toHaveTextContent('Designation: sentient')

        expect(await screen.findByTestId('eye_colors')).toHaveTextContent('Eye colors: brown, blue, green, hazel, grey, amber')

        expect(await screen.findByTestId('skin_colors')).toHaveTextContent('Skin colors: caucasian, black, asian, hispanic')

        expect(await screen.findByTestId('language')).toHaveTextContent('Language: Galactic Basic')

        expect(await screen.findByTestId('hair_colors')).toHaveTextContent('Hair colors: blonde, brown, black, red')

        expect(await screen.findByTestId('homeworld')).toHaveTextContent('Home world: https://swapi.dev/api/planets/9')

        expect(await screen.findByTestId('average_lifespan')).toHaveTextContent('Average lifespan: 120')

        expect(await screen.findByTestId('average_height')).toHaveTextContent('Average height: 180')

        expect(await screen.findByTestId('created')).toHaveTextContent(
            'Created: 10/05/2025 20:21:59'
        )

        expect(await screen.findByTestId('edited')).toHaveTextContent(
            'Edited: 10/05/2025 20:21:59'
        )

        expect(await screen.findByTestId('people-title')).toHaveTextContent(
            'Peoples'
        )

        expect(await screen.findByTestId('people-0')).toHaveTextContent(
            'https://swapi.dev/api/people/66'
        )

        expect(await screen.findByTestId('people-1')).toHaveTextContent(
            'https://swapi.dev/api/people/67'
        )

        expect(await screen.findByTestId('people-2')).toHaveTextContent(
            'https://swapi.dev/api/people/68'
        )

        expect(await screen.findByTestId('people-3')).toHaveTextContent(
            'https://swapi.dev/api/people/74'
        )
    })

    it('should render starship 2', async () => {
        renderDescription('/starships/2')

        expect(await screen.findByTestId('consumables')).toHaveTextContent('Consumables: 1 year')

        expect(await screen.findByTestId('cargo_capacity')).toHaveTextContent('Cargo capacity: 3000000')

        expect(await screen.findByTestId('passengers')).toHaveTextContent('Passengers: 600')

        expect(await screen.findByTestId('max_atmosphering_speed')).toHaveTextContent('Max atmosphering speed: 950')

        expect(await screen.findByTestId('crew')).toHaveTextContent('Crew: 30-165')

        expect(await screen.findByTestId('length')).toHaveTextContent('Length: 150')

        expect(await screen.findByTestId('model')).toHaveTextContent('Model: CR90 corvette')

        expect(await screen.findByTestId('cost_in_credits')).toHaveTextContent('Cost in credits: 3500000')

        expect(await screen.findByTestId('manufacturer')).toHaveTextContent('Manufacturer: Corellian Engineering Corporation')

        expect(await screen.findByTestId('starship_class')).toHaveTextContent('Starship class: corvette')

        expect(await screen.findByTestId('hyperdrive_rating')).toHaveTextContent('Hyperdrive rating: 2.0')

        expect(await screen.findByTestId('created')).toHaveTextContent(
            'Created: 10/05/2025 20:21:59'
        )

        expect(await screen.findByTestId('edited')).toHaveTextContent(
            'Edited: 10/05/2025 20:21:59'
        )

        expect(await screen.findByTestId('film-title')).toHaveTextContent(
            'Films'
        )
        expect(await screen.findByTestId('film-0')).toHaveTextContent(
            'https://swapi.dev/api/films/1'
        )
        expect(await screen.findByTestId('film-1')).toHaveTextContent(
            'https://swapi.dev/api/films/3'
        )
        expect(await screen.findByTestId('film-2')).toHaveTextContent(
            'https://swapi.dev/api/films/6'
        )
    })

    it('should render vehicle 4', async () => {
        renderDescription('/vehicles/4')

        expect(await screen.findByTestId('consumables')).toHaveTextContent('Consumables: 2 months')

        expect(await screen.findByTestId('cargo_capacity')).toHaveTextContent('Cargo capacity: 50000')

        expect(await screen.findByTestId('passengers')).toHaveTextContent('Passengers: 30')

        expect(await screen.findByTestId('max_atmosphering_speed')).toHaveTextContent('Max atmosphering speed: 30')

        expect(await screen.findByTestId('crew')).toHaveTextContent('Crew: 46')

        expect(await screen.findByTestId('length')).toHaveTextContent('Length: 36.8')

        expect(await screen.findByTestId('model')).toHaveTextContent('Model: Digger Crawler')

        expect(await screen.findByTestId('cost_in_credits')).toHaveTextContent('Cost in credits: 150000')

        expect(await screen.findByTestId('manufacturer')).toHaveTextContent('Manufacturer: Corellia Mining Corporation')

        expect(await screen.findByTestId('vehicle_class')).toHaveTextContent('Vehicle class: wheeled')

        expect(await screen.findByTestId('created')).toHaveTextContent(
            'Created: 10/05/2025 20:21:59'
        )

        expect(await screen.findByTestId('edited')).toHaveTextContent(
            'Edited: 10/05/2025 20:21:59'
        )

        expect(await screen.findByTestId('film-title')).toHaveTextContent(
            'Films'
        )
        expect(await screen.findByTestId('film-0')).toHaveTextContent(
            'https://swapi.dev/api/films/1'
        )
        expect(await screen.findByTestId('film-1')).toHaveTextContent(
            'https://swapi.dev/api/films/5'
        )
    })
})
