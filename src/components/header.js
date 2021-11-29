import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header>
            {data.site.siteMetadata.title}
        </header>
    )

}

export default Header