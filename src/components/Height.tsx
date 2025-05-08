import { PropsWithChildren } from 'react'

type HeightProps = PropsWithChildren<{ value: string }>

const Height = ({ value, ...restProps }: HeightProps) => {
    return (
        <p data-testid="height" {...restProps}>
            Height: {value}
        </p>
    )
}

export default Height
