import { PropsWithChildren } from 'react'

type EyeColorProps = PropsWithChildren<{ value: string }>

const EyeColor = ({ value, ...restProps }: EyeColorProps) => {
    return (
        <p data-testid="eyecolor" {...restProps}>
            EyeColor: {value}
        </p>
    )
}

export default EyeColor
