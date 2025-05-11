import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createRoutesStub } from 'react-router'
import Description, { clientLoader } from '@pages/Description.tsx'

describe('Description', () => {
    const Stub = createRoutesStub([
        {
            path: "/:section/:id",
            Component: Description,
            loader: clientLoader,
            HydrateFallback: () => <div data-testid="fallback" />,
            ErrorBoundary: () => <div data-testid="error" />
        },
    ])

    const renderDescription = (sufixUrl: string) => {
        render(<Stub initialEntries={[sufixUrl]} />)
    }

    describe('people 1', () => {
        beforeEach(() => {
            renderDescription('/people/1')
        })

        it('should match snapshot', async () => {
            expect(await screen.findByTestId('description-page')).toMatchSnapshot()
        })

        it('should render properties', async () => {
            expect(await screen.findByTestId('height')).toHaveTextContent('Height: 172')

            expect(await screen.findByTestId('mass')).toHaveTextContent('Mass: 77')

            expect(await screen.findByTestId('haircolor')).toHaveTextContent('Hair color: blond')

            expect(await screen.findByTestId('skincolor')).toHaveTextContent('Skin color: fair')

            expect(await screen.findByTestId('eyecolor')).toHaveTextContent('Eye color: blue')

            expect(await screen.findByTestId('birthyear')).toHaveTextContent('Birth year: 19BBY')

            expect(await screen.findByTestId('gender')).toHaveTextContent('Gender: male')

            expect(await screen.findByTestId('homeworld')).toHaveTextContent('Home world: https://swapi.dev/api/planets/1/')

            expect(await screen.findByTestId('film-title')).toHaveTextContent('Films')
            expect(await screen.findByTestId('film-0')).toHaveTextContent('https://swapi.dev/api/films/1/')
            expect(await screen.findByTestId('film-1')).toHaveTextContent('https://swapi.dev/api/films/2/')
            expect(await screen.findByTestId('film-2')).toHaveTextContent('https://swapi.dev/api/films/3/')
            expect(await screen.findByTestId('film-3')).toHaveTextContent('https://swapi.dev/api/films/6/')

            expect(await screen.findByTestId('species-title')).toHaveTextContent('Species')
            expect(await screen.findByTestId('species-empty')).toHaveTextContent('No species linked')

            expect(await screen.findByTestId('vehicle-title')).toHaveTextContent('Vehicles')
            expect(await screen.findByTestId('vehicle-0')).toHaveTextContent('https://swapi.dev/api/vehicles/14/')
            expect(await screen.findByTestId('vehicle-1')).toHaveTextContent('https://swapi.dev/api/vehicles/30/')

            expect(await screen.findByTestId('starship-title')).toHaveTextContent('Starships')
            expect(await screen.findByTestId('starship-0')).toHaveTextContent('https://swapi.dev/api/starships/12/')
            expect(await screen.findByTestId('starship-1')).toHaveTextContent('https://swapi.dev/api/starships/22/')

            expect(await screen.findByTestId('created')).toHaveTextContent('Created: 09/12/2014 14:50:51')

            expect(await screen.findByTestId('edited')).toHaveTextContent('Edited: 20/12/2014 22:17:56')

        })
    })
})
