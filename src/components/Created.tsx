import { PropsWithChildren } from 'react'

type CreatedProps = PropsWithChildren<{ value: string }>

const Created = ({ value, ...restProps }: CreatedProps) => {
    return (
        <p data-testid="created" {...restProps}>
            Created: {value}
        </p>
    )
}

export default Created
