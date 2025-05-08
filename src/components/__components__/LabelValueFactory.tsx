import { PropsWithChildren } from 'react'

type LabelValueFactoryProps = PropsWithChildren<{ value: string }>

const LabelValueFactory =
    (testid: string, label: string) =>
    ({ value, ...restProps }: LabelValueFactoryProps) => {
        return (
            <p data-testid={testid} {...restProps}>
                {label}: {value}
            </p>
        )
    }

export default LabelValueFactory
