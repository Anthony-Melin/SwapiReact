import { ClientLoaderFunctionArgs, useLoaderData } from 'react-router'
import getFetch from '@api/getFetch.ts'
import Details from '@api/types/details.ts'
import Height from '../components/Height.tsx'
import Mass from '../components/Mass.tsx'
import HairColor from '../components/HairColor.tsx'
import SkinColor from '../components/SkinColor.tsx'
import EyeColor from '../components/EyeColor.tsx'
import BirthYear from '../components/BirthYear.tsx'
import Gender from '../components/Gender.tsx'
import HomeWorld from '../components/HomeWorld.tsx'
import Created from '../components/Created.tsx'
import Edited from '../components/Edited.tsx'
import Films from "../components/Films.tsx";
import Species from "../components/Species.tsx";
import Vehicules from "../components/Vehicules.tsx";
import Starships from "../components/Starships.tsx";
import Characters from "../components/Characters.tsx";
import ReleaseDate from "../components/ReleaseDate.tsx";
import Producer from "../components/Producer.tsx";
import Director from "../components/Director.tsx";

export const clientLoader = async ({ request }: ClientLoaderFunctionArgs) => {
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
        <main id="description-page">
            <h1>{name || title}</h1>
            {Object.entries(restKeys).map(([key, value]) => {
                if (typeof value === 'string') {
                    if (key === 'height') {
                        return <Height key={key} value={value} />
                    } else if (key === 'mass') {
                        return <Mass key={key} value={value} />
                    } else if (key === 'hair_color') {
                        return <HairColor key={key} value={value} />
                    } else if (key === 'skin_color') {
                        return <SkinColor key={key} value={value} />
                    } else if (key === 'eye_color') {
                        return <EyeColor key={key} value={value} />
                    } else if (key === 'birth_year') {
                        return <BirthYear key={key} value={value} />
                    } else if (key === 'gender') {
                        return <Gender key={key} value={value} />
                    } else if (key === 'homeworld') {
                        return <HomeWorld key={key} value={value} />
                    } else if (key === 'created') {
                        return <Created key={key} value={value} />
                    } else if (key === 'edited') {
                        return <Edited key={key} value={value} />
                    } else if (key === 'release_date') {
                        return <ReleaseDate key={key} value={value} />
                    } else if (key === 'producer') {
                        return <Producer key={key} value={value} />
                    } else if (key === 'director') {
                        return <Director key={key} value={value} />
                    }
                } else if (value instanceof Array) {
                    const values = value.filter((v) => typeof v === 'string')
                    if (key === 'films') {
                        return <Films key={key} values={values} />
                    } else if (key === 'species') {
                        return <Species key={key} values={values} />
                    } else if (key === 'vehicles') {
                        return <Vehicules key={key} values={values} />
                    } else if (key === 'starships') {
                        return <Starships key={key} values={values} />
                    } else if (key === 'characters') {
                        return <Characters key={key} values={values} />
                    }
                }
            })}
        </main>
    )
}

export default Description
