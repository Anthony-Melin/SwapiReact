import { PropsWithChildren } from 'react'

type CreatedProps = PropsWithChildren<{ value: string }>

const Created = ({ value, ...restProps }: CreatedProps) => {
    const date = new Date(value)
    return (
        <p data-testid="created" {...restProps}>
            Created: {date.toLocaleString('fr-FR')}
        </p>
    )
}

export default Created
