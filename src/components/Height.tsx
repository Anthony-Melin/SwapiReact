import { PropsWithChildren } from 'react'

type HeightProps = PropsWithChildren<{ value: string }>

const Height = ({ value, ...restProps }: HeightProps) => {
    return (
        <p {...restProps}>
            Height: {value}
        </p>
    )
}

export default Height
