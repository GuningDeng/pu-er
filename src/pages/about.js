import * as React from 'react'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import {
    headerPictureH1,
    headerPicture,
    headerTitle,
    headerDescription,
    headerDescriptionBtn,
    CTA,
    section,
    puErhs,
    subtitle,
    description
  
  } from '../page.module.css'

const AboutPage = ({
    data: {
        wpPage: {
            aboutPage: { headerAboutUs, mission }
        }
    }
}) => {
    const imageHeader = getImage(headerAboutUs.picture.localFile)
    const imageMission = getImage(mission.bannerPicture.localFile)
    return (
        <Layout>
            <div className={headerPictureH1}>
                <GatsbyImage 
                    className={headerPicture}
                    image={imageHeader}
                />
            </div>
            <div className={headerDescription}>
                <h1>{headerAboutUs.title}</h1>
                <div 
                    dangerouslySetInnerHTML={{
                        __html: headerAboutUs.description
                    }}
                />
            </div>
            <div>
                <GatsbyImage 
                    image={imageMission}
                />
                <h2>{mission.title}</h2>
                <div 
                    dangerouslySetInnerHTML={{
                        __html: mission.description
                    }}
                />
            </div>

        </Layout>
    )
}

export default AboutPage

export const query = graphql`
    query {
        wpPage(slug: {eq: "about-us"}) {
            aboutPage {
                headerAboutUs {
                    title
                    description
                    picture {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(quality: 100)
                            }
                        }
                    }
                }
                mission {
                    title
                    description
                    bannerPicture {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(quality: 100)
                            }
                        }
                    }
                }
            }
        }
    }
`