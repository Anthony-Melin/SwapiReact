import { PropsWithChildren } from 'react'

type ListValueFactoryProps = PropsWithChildren<{ values: string[] }>

const ListValueFactory =
    (testid: string, title: string, item: string) =>
    ({ values, ...restProps }: ListValueFactoryProps) => {
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

export default ListValueFactory
