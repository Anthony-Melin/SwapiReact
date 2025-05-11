import { PropsWithChildren } from 'react'

type ListValueProps = PropsWithChildren<{
    title: string
    item: string
    values: string[]
    testid: string
}>

const ListValue = ({
    title,
    item,
    values,
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
                            <li
                                key={`${testid}-${index}`}
                                data-testid={`${testid}-${index}`}
                            >
                                {value}
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default ListValue
