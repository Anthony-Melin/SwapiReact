import { LoaderFunctionArgs, useLoaderData } from 'react-router'
import getFetch from '@api/getFetch.ts'
import Details from '@api/details.types.ts'
import LabelValue from '../components/LabelValue.tsx'
import LabelDate from '../components/LabelDate.tsx'
import ListValue from '../components/ListValue.tsx'

export const clientLoader = async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url)
    return {
        details: await getFetch<Details>(url.pathname, request.signal),
    }
}

const Description = () => {
    const {
        details: { name, title, ...restKeys },
    } = useLoaderData() as Awaited<ReturnType<typeof clientLoader>>
    return (
        <main id="description-page" data-testid="description-page">
            <h1>{name || title}</h1>
            {Object.entries(restKeys).map(([key, value]) => {
                if (typeof value === 'string') {
                    if (key === 'height') {
                        return (
                            <LabelValue
                                key={key}
                                label="Height"
                                value={value}
                                testid="height"
                            />
                        )
                    } else if (key === 'mass') {
                        return (
                            <LabelValue
                                key={key}
                                label="Mass"
                                value={value}
                                testid="mass"
                            />
                        )
                    } else if (key === 'hair_color') {
                        return (
                            <LabelValue
                                key={key}
                                label="Hair color"
                                value={value}
                                testid="haircolor"
                            />
                        )
                    } else if (key === 'skin_color') {
                        return (
                            <LabelValue
                                key={key}
                                label="Skin color"
                                value={value}
                                testid="skincolor"
                            />
                        )
                    } else if (key === 'eye_color') {
                        return (
                            <LabelValue
                                key={key}
                                label="Eye color"
                                value={value}
                                testid="eyecolor"
                            />
                        )
                    } else if (key === 'birth_year') {
                        return (
                            <LabelValue
                                key={key}
                                label="Birth year"
                                value={value}
                                testid="birthyear"
                            />
                        )
                    } else if (key === 'gender') {
                        return (
                            <LabelValue
                                key={key}
                                label="Gender"
                                value={value}
                                testid="gender"
                            />
                        )
                    } else if (key === 'homeworld') {
                        return (
                            <LabelValue
                                key={key}
                                label="Home world"
                                value={value}
                                testid="homeworld"
                            />
                        )
                    } else if (key === 'created') {
                        return (
                            <LabelDate
                                key={key}
                                label="Created"
                                value={value}
                                testid="created"
                            />
                        )
                    } else if (key === 'edited') {
                        return (
                            <LabelDate
                                key={key}
                                label="Edited"
                                value={value}
                                testid="edited"
                            />
                        )
                    } else if (key === 'release_date') {
                        return (
                            <LabelValue
                                key={key}
                                label="Release date"
                                value={value}
                                testid="releasedate"
                            />
                        )
                    } else if (key === 'producer') {
                        return (
                            <LabelValue
                                key={key}
                                label="Producer"
                                value={value}
                                testid="producer"
                            />
                        )
                    } else if (key === 'director') {
                        return (
                            <LabelValue
                                key={key}
                                label="Director"
                                value={value}
                                testid="director"
                            />
                        )
                    } else if (key === 'climate') {
                        return (
                            <LabelValue
                                key={key}
                                label="Climate"
                                value={value}
                                testid="climate"
                            />
                        )
                    } else if (key === 'surface_water') {
                        return (
                            <LabelValue
                                key={key}
                                label="Surface has water"
                                value={value}
                                remap={{'1': 'yes', '0': 'no'}}
                                testid="surface_water"
                            />
                        )
                    } else if (key === 'diameter') {
                        return (
                            <LabelValue
                                key={key}
                                label="Diameter"
                                value={value}
                                testid="diameter"
                            />
                        )
                    } else if (key === 'rotation_period') {
                        return (
                            <LabelValue
                                key={key}
                                label="Period of rotation"
                                value={value}
                                testid="rotation_period"
                            />
                        )
                    } else if (key === 'terrain') {
                        return (
                            <LabelValue
                                key={key}
                                label="Terrain"
                                value={value}
                                testid="terrain"
                            />
                        )
                    } else if (key === 'gravity') {
                        return (
                            <LabelValue
                                key={key}
                                label="Gravity"
                                value={value}
                                testid="gravity"
                            />
                        )
                    } else if (key === 'orbital_period') {
                        return (
                            <LabelValue
                                key={key}
                                label="Orbital period"
                                value={value}
                                testid="orbital_period"
                            />
                        )
                    } else if (key === 'population') {
                        return (
                            <LabelValue
                                key={key}
                                label="Population"
                                value={value}
                                testid="population"
                            />
                        )
                    } else if (key === 'classification') {
                        return (
                            <LabelValue
                                key={key}
                                label="Classification"
                                value={value}
                                testid="classification"
                            />
                        )
                    } else if (key === 'designation') {
                        return (
                            <LabelValue
                                key={key}
                                label="Designation"
                                value={value}
                                testid="designation"
                            />
                        )
                    } else if (key === 'eye_colors') {
                        return (
                            <LabelValue
                                key={key}
                                label="Eye colors"
                                value={value}
                                testid="eye_colors"
                            />
                        )
                    } else if (key === 'skin_colors') {
                        return (
                            <LabelValue
                                key={key}
                                label="Skin colors"
                                value={value}
                                testid="skin_colors"
                            />
                        )
                    } else if (key === 'language') {
                        return (
                            <LabelValue
                                key={key}
                                label="Language"
                                value={value}
                                testid="language"
                            />
                        )
                    } else if (key === 'hair_colors') {
                        return (
                            <LabelValue
                                key={key}
                                label="Hair colors"
                                value={value}
                                testid="hair_colors"
                            />
                        )
                    } else if (key === 'average_lifespan') {
                        return (
                            <LabelValue
                                key={key}
                                label="Average lifespan"
                                value={value}
                                testid="average_lifespan"
                            />
                        )
                    } else if (key === 'average_height') {
                        return (
                            <LabelValue
                                key={key}
                                label="Average height"
                                value={value}
                                testid="average_height"
                            />
                        )
                    }
                } else if (typeof value === 'number') {
                    return (
                        <LabelValue
                            key={key}
                            label="Episode"
                            value={value.toString()}
                            testid="episode"
                        />
                    )
                } else if (value instanceof Array) {
                    const values = value.filter((v) => typeof v === 'string')
                    if (key === 'films') {
                        return (
                            <ListValue
                                key={key}
                                title="Films"
                                item="film"
                                values={values}
                                testid="film"
                            />
                        )
                    } else if (key === 'species') {
                        return (
                            <ListValue
                                key={key}
                                title="Species"
                                item="species"
                                values={values}
                                testid="species"
                            />
                        )
                    } else if (key === 'vehicles') {
                        return (
                            <ListValue
                                key={key}
                                title="Vehicles"
                                item="vehicle"
                                values={values}
                                testid="vehicle"
                            />
                        )
                    } else if (key === 'starships') {
                        return (
                            <ListValue
                                key={key}
                                title="Starships"
                                item="starship"
                                values={values}
                                testid="starship"
                            />
                        )
                    } else if (key === 'characters') {
                        return (
                            <ListValue
                                key={key}
                                title="Characters"
                                item="character"
                                values={values}
                                testid="character"
                            />
                        )
                    } else if (key === 'people') {
                        return (
                            <ListValue
                                key={key}
                                title="Peoples"
                                item="people"
                                values={values}
                                testid="people"
                            />
                        )
                    }
                }
            })}
        </main>
    )
}

export default Description
