import { PropsWithChildren } from 'react'

type HomeWorldProps = PropsWithChildren<{ value: string }>

const HomeWorld = ({ value, ...restProps }: HomeWorldProps) => {
    return (
        <p data-testid="homeworld" {...restProps}>
            HomeWorld: {value}
        </p>
    )
}

export default HomeWorld
