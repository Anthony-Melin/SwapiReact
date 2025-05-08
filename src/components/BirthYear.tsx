import { PropsWithChildren } from 'react'

type BirthYearProps = PropsWithChildren<{ value: string }>

const BirthYear = ({ value, ...restProps }: BirthYearProps) => {
    return (
        <p data-testid="birthyear" {...restProps}>
            Birth year: {value}
        </p>
    )
}

export default BirthYear
