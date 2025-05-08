import { PropsWithChildren } from 'react'

type MassProps = PropsWithChildren<{ value: string }>

const Mass = ({ value, ...restProps }: MassProps) => {
    return (
        <p datatest-id="mass" {...restProps}>
            Mass: {value}
        </p>
    )
}

export default Mass
