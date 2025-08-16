import { beforeEach, describe, expect, it } from 'vitest'
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

    const expectLink = async (testid: string, href: string, label: string) => {
        const element = await screen.findByTestId(testid)
        expect(element).toHaveAttribute('href', href)
        expect(element).toHaveTextContent(label)
    }

    describe('section 1 / item 1', () => {
        beforeEach(() => {
            renderDescription('/section1/1')
        })

        it('should render consumables', async () => {
            expect(await screen.findByTestId('consumables')).toHaveTextContent(
                'Consumables: 1 year'
            )
        })

        it('should render cargo_capacity', async () => {
            expect(
                await screen.findByTestId('cargo_capacity')
            ).toHaveTextContent('Cargo capacity: 3000000')
        })

        it('should render passengers', async () => {
            expect(await screen.findByTestId('passengers')).toHaveTextContent(
                'Passengers: 600'
            )
        })

        it('should render max_atmosphering_speed', async () => {
            expect(
                await screen.findByTestId('max_atmosphering_speed')
            ).toHaveTextContent('Max atmosphering speed: 950')
        })

        it('should render crew', async () => {
            expect(await screen.findByTestId('crew')).toHaveTextContent(
                'Crew: 30-165'
            )
        })

        it('should render length', async () => {
            expect(await screen.findByTestId('length')).toHaveTextContent(
                'Length: 150'
            )
        })

        it('should render model', async () => {
            expect(await screen.findByTestId('model')).toHaveTextContent(
                'Model: CR90 corvette'
            )
        })

        it('should render cost_in_credits', async () => {
            expect(
                await screen.findByTestId('cost_in_credits')
            ).toHaveTextContent('Cost in credits: 3500000')
        })

        it('should render manufacturer', async () => {
            expect(await screen.findByTestId('manufacturer')).toHaveTextContent(
                'Manufacturer: Corellian Engineering Corporation'
            )
        })

        it('should render vehicle_class', async () => {
            expect(
                await screen.findByTestId('vehicle_class')
            ).toHaveTextContent('Vehicle class: wheeled')
        })

        it('should render created date', async () => {
            expect(await screen.findByTestId('created')).toHaveTextContent(
                'Created: 09/12/2014 14:50:51'
            )
        })

        it('should render edited date', async () => {
            expect(await screen.findByTestId('edited')).toHaveTextContent(
                'Edited: 20/12/2014 22:17:56'
            )
        })

        it('should render films', async () => {
            expect(await screen.findByTestId('film-title')).toHaveTextContent(
                'Films'
            )
            await expectLink('film-0', '/films/1', 'film 1')
            await expectLink('film-1', '/films/2', 'film 2')
        })

        it('should render height', async () => {
            expect(await screen.findByTestId('height')).toHaveTextContent(
                'Height: 172'
            )
        })

        it('should render starships', async () => {
            expect(
                await screen.findByTestId('starship-title')
            ).toHaveTextContent('Starships')
            await expectLink('starship-0', '/starships/12', 'starship 12')
            await expectLink('starship-1', '/starships/22', 'starship 22')
        })

        it('should render vehicles', async () => {
            expect(
                await screen.findByTestId('vehicle-title')
            ).toHaveTextContent('Vehicles')
            await expectLink('vehicle-0', '/vehicles/14', 'vehicle 14')
            await expectLink('vehicle-1', '/vehicles/30', 'vehicle 30')
        })

        it('should render species', async () => {
            expect(
                await screen.findByTestId('species-title')
            ).toHaveTextContent('Species')
            await expectLink('species-0', '/species/14', 'species 14')
            await expectLink('species-1', '/species/30', 'species 30')
        })

        it('should render mass', async () => {
            expect(await screen.findByTestId('mass')).toHaveTextContent(
                'Mass: 77'
            )
        })

        it('should render haircolor', async () => {
            expect(await screen.findByTestId('haircolor')).toHaveTextContent(
                'Hair color: blond'
            )
        })

        it('should render skincolor', async () => {
            expect(await screen.findByTestId('skincolor')).toHaveTextContent(
                'Skin color: fair'
            )
        })

        it('should render eyecolor', async () => {
            expect(await screen.findByTestId('eyecolor')).toHaveTextContent(
                'Eye color: blue'
            )
        })

        it('should render birthyear', async () => {
            expect(await screen.findByTestId('birthyear')).toHaveTextContent(
                'Birth year: 19BBY'
            )
        })

        it('should render gender', async () => {
            expect(await screen.findByTestId('gender')).toHaveTextContent(
                'Gender: male'
            )
        })

        it('should render homeworld', async () => {
            await expectLink('homeworld', '/homeworld/1', 'Home world: homeworld 1')
        })

        it('should render climate', async () => {
            expect(await screen.findByTestId('climate')).toHaveTextContent(
                'Climate: arid'
            )
        })

        it('should render surface_water', async () => {
            expect(
                await screen.findByTestId('surface_water')
            ).toHaveTextContent('Surface has water: yes')
        })
        it('should render', async () => {
            expect(await screen.findByTestId('diameter')).toHaveTextContent(
                'Diameter: 10465'
            )
        })
        it('should render rotation_period', async () => {
            expect(
                await screen.findByTestId('rotation_period')
            ).toHaveTextContent('Period of rotation: 23')
        })
        it('should render terrain', async () => {
            expect(await screen.findByTestId('terrain')).toHaveTextContent(
                'Terrain: desert'
            )
        })
        it('should render gravity', async () => {
            expect(await screen.findByTestId('gravity')).toHaveTextContent(
                'Gravity: 1 standard'
            )
        })
        it('should render orbital_period', async () => {
            expect(
                await screen.findByTestId('orbital_period')
            ).toHaveTextContent('Orbital period: 304')
        })
        it('should render population', async () => {
            expect(await screen.findByTestId('population')).toHaveTextContent(
                'Population: 200000'
            )
        })
        it('should render classification', async () => {
            expect(
                await screen.findByTestId('classification')
            ).toHaveTextContent('Classification: mammal')
        })
        it('should render designation', async () => {
            expect(await screen.findByTestId('designation')).toHaveTextContent(
                'Designation: sentient'
            )
        })
        it('should render eye_colors', async () => {
            expect(await screen.findByTestId('eye_colors')).toHaveTextContent(
                'Eye colors: brown, blue, green, hazel, grey, amber'
            )
        })
        it('should render skin_colors', async () => {
            expect(await screen.findByTestId('skin_colors')).toHaveTextContent(
                'Skin colors: caucasian, black, asian, hispanic'
            )
        })
        it('should render language', async () => {
            expect(await screen.findByTestId('language')).toHaveTextContent(
                'Language: Galactic Basic'
            )
        })
        it('should render hair_colors', async () => {
            expect(await screen.findByTestId('hair_colors')).toHaveTextContent(
                'Hair colors: blonde, brown, black, red'
            )
        })
        it('should render average_lifespan', async () => {
            expect(
                await screen.findByTestId('average_lifespan')
            ).toHaveTextContent('Average lifespan: 120')
        })
        it('should render average_height', async () => {
            expect(
                await screen.findByTestId('average_height')
            ).toHaveTextContent('Average height: 180')
        })

        it('should render director', async () => {
            expect(await screen.findByTestId('director')).toHaveTextContent(
                'Director: George Lucas'
            )
        })

        it('should render producer', async () => {
            expect(await screen.findByTestId('producer')).toHaveTextContent(
                'Producer: Gary Kurtz, Rick McCallum'
            )
        })

        it('should render characters', async () => {
            expect(
                await screen.findByTestId('character-title')
            ).toHaveTextContent('Characters')
            await expectLink('character-0', '/characters/1', 'character 1')
            await expectLink('character-1', '/characters/2', 'character 2')
        })

        it('should render people', async () => {
            expect(
                await screen.findByTestId('people-title')
            ).toHaveTextContent('Peoples')
            await expectLink('people-0', '/people/66', 'people 66')
            await expectLink('people-1', '/people/67', 'people 67')
        })
    })

    describe('section 1 / item 2', () => {
        beforeEach(() => {
            renderDescription('/section1/2')
        })

        it('should render starships', async () => {
            expect(
                await screen.findByTestId('starship-title')
            ).toHaveTextContent('Starships')
            expect(
                await screen.findByTestId('starship-empty')
            ).toHaveTextContent('No starship linked')
        })

        it('should render vehicles', async () => {
            expect(
                await screen.findByTestId('vehicle-title')
            ).toHaveTextContent('Vehicles')
            expect(
                await screen.findByTestId('vehicle-empty')
            ).toHaveTextContent('No vehicle linked')
        })

        it('should render species', async () => {
            expect(
                await screen.findByTestId('species-title')
            ).toHaveTextContent('Species')
            expect(
                await screen.findByTestId('species-empty')
            ).toHaveTextContent('No species linked')
        })

        it('should render characters', async () => {
            expect(
                await screen.findByTestId('character-title')
            ).toHaveTextContent('Characters')
            expect(
                await screen.findByTestId('character-empty')
            ).toHaveTextContent('No character linked')
        })

        it('should render people', async () => {
            expect(await screen.findByTestId('people-title')).toHaveTextContent(
                'People'
            )
            expect(await screen.findByTestId('people-empty')).toHaveTextContent(
                'No people linked'
            )
        })

        it('should render surface_water', async () => {
            expect(
                await screen.findByTestId('surface_water')
            ).toHaveTextContent('Surface has water: no')
        })
    })
})
