import { PropsWithChildren } from 'react'

type EditedProps = PropsWithChildren<{ value: string }>

const Edited = ({ value, ...restProps }: EditedProps) => {
    return (
        <p data-testid="edited" {...restProps}>
            Edited: {value}
        </p>
    )
}

export default Edited
