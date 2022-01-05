import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import {
    headerPictureH1,
    headerPicture,
    headerDescription,
    socials,
    facebook,
    linkedin
  
  } from '../page.module.css'

const contactPage = ({ 
    data: {
        wpPage: {
            contactPage: { headerContact, companyInformation, }
        }
    }
 }) => {
    const image = getImage(headerContact.picture.localFile)
    return (
        <Layout>
            <div className={headerPictureH1}>
                <GatsbyImage 
                    className={headerPicture}
                    image={image}
                />
            </div>
            <div>
                <div className={headerDescription}>
                    <h1>{headerContact.title}</h1>
                    <div 
                        dangerouslySetInnerHTML={{
                            __html: headerContact.description
                        }}
                    />
                    <br></br>
                    <p><span><strong>Tel: </strong></span>{companyInformation.phoneNumber}</p>
                    <p><span><strong>E-mail: </strong></span>{companyInformation.email}</p>
                    <p><span><strong>Adres: </strong></span>{`${companyInformation.address} ${companyInformation.postcode}  ${companyInformation.city}`}</p>
                    <div className={socials}>
                        Volg ons:
                        <a className={facebook} target="_blank" href={companyInformation.socials.facebook} rel="noreferrer">
                            {" "}
                        </a>
                        <a className={linkedin} target="_blank" href={companyInformation.socials.linkedin} rel="noreferrer">
                            {" "}
                        </a>
                    </div>
                </div>
                
            </div>
        </Layout>
    )
}

export default contactPage

export const query = graphql`
    query {
        wpPage(slug: {eq: "contact-us"}) {
            contactPage {
                headerContact {
                    description
                    title
                    picture {
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
                companyInformation {
                    address
                    city
                    email
                    phoneNumber
                    postcode
                    socials {
                        facebook
                        linkedin
                    }
                }
            }
        }
        
    }
`
