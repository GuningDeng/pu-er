import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'
import Puerh from '../../components/puerh'
import {
    headerPictureH1,
    headerPicture,
    headerTitle,
    headerDescription,
    headerDescriptionBtn,
    CTA,
    section,
    puErhs,
    puerthsTitleH2,
    subtitle,
    description
  
  } from '../../page.module.css'

const PuerhsPage = ({
    data: {
        allWpPuErh: {
            edges: puerhsInfo
        },
        wpPage: {
            puerhsPage
        }
    } 
}) => {
    const image = getImage(puerhsPage.populaireProducten.picture.localFile)
    return (
        <Layout pageTitle="Pu Erhs">
            <div className={headerPictureH1}>
                <GatsbyImage 
                    className={headerPicture}
                    image={image}
                    alt={puerhsPage.populaireProducten.picture.altText}
                />
            </div>
            <div>
                <h2 className={puerthsTitleH2}>Ons Producten</h2>
                <div
                    className={headerDescription} 
                    dangerouslySetInnerHTML={{
                        __html: puerhsPage.populaireProducten.description,
                    }}
                />
                <div className={section}>
                    <h2 className={subtitle}>{puerhsPage.populaireProducten.title}</h2>
                    <div className={puErhs}>
                        {
                            puerhsInfo.map(({ node: puErh }) => (
                                <Puerh key={puErh.id} slug={`${puErh.slug}`} puErh={puErh} />

                            ))
                        }
                    </div>
                </div>
            </div>
            {/* {
                edges.map((item) => {
                    const puerh = item.node.puerhMeta
                    const slug = item.node.slug
                    return (
                        <Link to={`/puerhs/${slug}`}>
                            <p key={item.node.id}>{puerh.name}.</p>
                        </Link>
                    )
                })
            } */}

        </Layout>
    )
}

export const query = graphql`
    query {
        wpPage(slug: {eq: "puerhs"}) {
            puerhsPage{
                populaireProducten {
                    description
                    title
                    picture {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(quality: 100, placeholder: BLURRED)
                            }
                        }
                    }
                }
            }
        }
        allWpPuErh {
            edges {
                node {
                    id
                    slug
                    puerhMeta {
                        name
                        profilePicture {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData(
                                        placeholder:BLURRED
                                    )
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export default PuerhsPage