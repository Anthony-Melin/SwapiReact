import useSections from '@hooks/useSections.tsx'
import { Link, Outlet } from 'react-router'
import { urlParse } from '@api/utils.ts'

const Navigation = () => {
    const sections = useSections()
    return (
        <>
            <header>
                <Link to="/">
                    <strong>SwapiReact</strong>
                </Link>
                {Object.entries(sections).map(([sectionLabel, sectionUrl], index) => {
                    return (
                        <Link to={urlParse(sectionUrl)} key={sectionLabel} data-testid={`section-${index}`}>
                            {sectionLabel}
                        </Link>
                    )
                })}
            </header>
            <Outlet />
        </>
    )
}

export default Navigation
