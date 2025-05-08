import { PropsWithChildren } from 'react'

type CreatedProps = PropsWithChildren<{ value: string }>

const Created = ({ value, ...restProps }: CreatedProps) => {
    return (
        <p datatest-id="created" {...restProps}>
            Created: {value}
        </p>
    )
}

export default Created
