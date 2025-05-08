import { PropsWithChildren } from 'react'

type LabelDateFactoryProps = PropsWithChildren<{ value: string }>

const LabelDateFactory =
    (testid: string, label: string) =>
    ({ value, ...restProps }: LabelDateFactoryProps) => {
        const date = new Date(value)
        return (
            <p data-testid={testid} {...restProps}>
                {label}: {date.toLocaleString('fr-FR')}
            </p>
        )
    }

export default LabelDateFactory
