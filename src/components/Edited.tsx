import { PropsWithChildren } from 'react'

type EditedProps = PropsWithChildren<{ value: string }>

const Edited = ({ value, ...restProps }: EditedProps) => {
    const date = new Date(value)
    return (
        <p data-testid="edited" {...restProps}>
            Edited: {date.toLocaleString('fr-FR')}
        </p>
    )
}

export default Edited
