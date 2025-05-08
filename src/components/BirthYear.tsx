import { PropsWithChildren } from 'react'

type BirthYearProps = PropsWithChildren<{ value: string }>

const BirthYear = ({ value, ...restProps }: BirthYearProps) => {
    return (
        <p data-testid="birthyear" {...restProps}>
            BirthYear: {value}
        </p>
    )
}

export default BirthYear
