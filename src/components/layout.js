import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import {
    container,
    nav,
    siteTitle,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle,children }) => {
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
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <nav className={nav}>
                <header className={siteTitle}>
                    {data.site.siteMetadata.title}
                </header>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/">Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/puerhs">Pu Erhs</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout