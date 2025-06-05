import { FC, PropsWithChildren } from 'react'

type ListValueProps = PropsWithChildren<{
    title: string
    item: string
    values: string[]
    Wrap?: FC<PropsWithChildren<{ value: string }>>
    testid: string
}>

const ListValue = ({
    title,
    item,
    values,
    Wrap = ({ value, ...props }) => <p {...props}>{value}</p>,
    testid,
    ...restProps
}: ListValueProps) => {
    return (
        <div data-testid={testid} {...restProps}>
            <p data-testid={`${testid}-title`}>{title}</p>
            {values.length === 0 ? (
                <p data-testid={`${testid}-empty`}>No {item} linked</p>
            ) : (
                <ul>
                    {values.map((value, index) => {
                        return (
                            <li key={`${testid}-${index}`}>
                                <Wrap
                                    data-testid={`${testid}-${index}`}
                                    value={value}
                                />
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default ListValue
