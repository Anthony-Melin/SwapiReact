import { PropsWithChildren } from 'react'

type MassProps = PropsWithChildren<{ value: string }>

const Mass = ({ value, ...restProps }: MassProps) => {
    return (
        <p data-testid="mass" {...restProps}>
            Mass: {value}
        </p>
    )
}

export default Mass
