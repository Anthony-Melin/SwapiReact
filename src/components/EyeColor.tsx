import { PropsWithChildren } from 'react'

type EyeColorProps = PropsWithChildren<{ value: string }>

const EyeColor = ({ value, ...restProps }: EyeColorProps) => {
    return (
        <p data-testid="eyecolor" {...restProps}>
            Eye color: {value}
        </p>
    )
}

export default EyeColor
