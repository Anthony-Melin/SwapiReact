import { PropsWithChildren } from 'react'

type HairColorProps = PropsWithChildren<{ value: string }>

const HairColor = ({ value, ...restProps }: HairColorProps) => {
    return (
        <p datatest-id="haircolor" {...restProps}>
            Hair color: {value}
        </p>
    )
}

export default HairColor
