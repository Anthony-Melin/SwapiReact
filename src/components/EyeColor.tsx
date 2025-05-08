import { PropsWithChildren } from 'react'

type EyeColorProps = PropsWithChildren<{ value: string }>

const EyeColor = ({ value, ...restProps }: EyeColorProps) => {
    return (
        <p datatest-id="eyecolor" {...restProps}>
            EyeColor: {value}
        </p>
    )
}

export default EyeColor
