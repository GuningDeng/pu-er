import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import {
    container,
    nav,
    siteTitle,
    siteTitleSpan,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'
import Footer from './footer'

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
            wpPage(slug: {eq: "contact-us"}){
                contactPage {
                    companyInformation {
                        address
                        city
                        postcode
                        socials {
                            facebook
                            linkedin
                        }
                    }
                }
            }
        }
    `)

    return (
        <>
        <div className={container}>
            <title>{data.site.siteMetadata.title}</title>
            <nav className={nav}>
                <header className={siteTitle}>
                    {data.site.siteMetadata.title}<span className={siteTitleSpan}>*</span>
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
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>

        <Footer 
            siteTitle={data.site.siteMetadata.title}
            companyInfo={data.wpPage.contactPage.companyInformation}
        />
        </>
    )
}

export default Layout