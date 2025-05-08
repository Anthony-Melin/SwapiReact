import { PropsWithChildren } from 'react'

type HairColorProps = PropsWithChildren<{ value: string }>

const HairColor = ({ value, ...restProps }: HairColorProps) => {
    return (
        <p data-testid="haircolor" {...restProps}>
            Hair color: {value}
        </p>
    )
}

export default HairColor
