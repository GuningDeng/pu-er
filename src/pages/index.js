import * as React from "react"
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { graphql, Link } from "gatsby"

import Puerh from "../components/puerh"
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

const IndexPage = ({
  data: {
    wpPage: { homePage }
  }
}) => {
  const image = getImage(homePage.headerHome.picture.localFile)
  return (
    <Layout pageTitle="Welcom to Pu Erh*!">
      <div>
        <div className={headerPictureH1}>
          <GatsbyImage
            className={headerPicture}
            image={image}
            alt={homePage.headerHome.picture.altText}
          />
          <div className={headerTitle}>
            <h1>{homePage.headerHome.title}</h1>
          </div>
        </div>
        <div className={headerDescription}>
          <div
            dangerouslySetInnerHTML={{
              __html: homePage.headerHome.description,
            }}
          />
          <div className={headerDescriptionBtn}>
            <a target="_blank" href={homePage.callToAction.link} className={CTA}>
              {homePage.callToAction.linkText}
            </a>
          </div>
        </div>
      </div>
      <div className={section}>
        <h2 className={subtitle}>{homePage.featuredPuErhs.title}</h2>
        <p className={description}>{homePage.featuredPuErhs.description}</p>
        <div className={puErhs}>
          {
            homePage.featuredPuErhs.puErhs.map(puErh => (
              <Puerh key={puErh.id} slug={`puErhs/${puErh.slug}`} puErh={puErh} />
            ))
          }
          
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query{
  wpPage(slug: {eq: "home"}){
    homePage {
      headerHome {
				description
        title
        picture {
					altText
          localFile {
						childImageSharp {
	            gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      callToAction {
        link
        linkText
      }
      featuredPuErhs {
        puErhs {
					... on WpPuErh {
            id
            slug
            puerhMeta {
              name
              profilePicture {
                altText
                localFile {
                  childImageSharp {
										gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
                  }
                }
              }
            }            
          }
        }
        description
        title
      }
    } 
  }
}
`

export default IndexPage
