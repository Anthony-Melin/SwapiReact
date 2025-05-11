import { PropsWithChildren } from 'react'

type LabelDateProps = PropsWithChildren<{
    label: string
    value: string
    testid: string
}>

const LabelDate = ({ label, value, testid, ...restProps }: LabelDateProps) => {
    const date = new Date(value)
    return (
        <p data-testid={testid} {...restProps}>
            {label}: {date.toLocaleString('fr-FR')}
        </p>
    )
}

export default LabelDate
