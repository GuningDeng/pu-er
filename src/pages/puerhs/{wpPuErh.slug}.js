import * as React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import {
    header,
    puerhHeaderPicture,
    puerhHeaderInfo,
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

const PuerhPage = ({
    data: {
        wpPuErh: {
            puerhMeta: puerh,
            catalogues: { nodes: catalogues }

        }
    }
}) => {
    const image = getImage(puerh.profilePicture.localFile)

    return (
        <Layout pageTitle="Pu Erhs Template">
            <div className={header}>
                <div >
                    <GatsbyImage
                        className={puerhHeaderPicture}
                        image={image}
                        alt={puerh.profilePicture.altText}
                    />
                </div>
                <div className={puerhHeaderInfo}>
                    {puerh.name && <h3>{puerh.name}</h3>}
                    <div>
                        {catalogues.map((catalogue, i) => (
                            <span key={i}>
                                {catalogue.name} {i + 1 < catalogues.length && "- "}
                            </span>
                        ))}
                    </div>
                    <h1>
                        {puerh.name}
                    </h1>
                    <p>
                        <span>Prijs:</span> {puerh.price}
                    </p>
                    <p>
                        <span>Gewicht:</span> {puerh.weight}
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: puerh.description }} />
                    <p>
                        <span>Inweektijd:</span> {puerh.steepingTime}
                    </p>
                    <p>
                        <span>Weektemperatuur:</span> {puerh.steepingTemperature}
                    </p>
                    <p>
                        <span>Bladeren Per 500ml 17oz Theepot:</span> {puerh.leavesPer500ml17ozTeapot}
                    </p>
                    <p>
                        <span>Weektemperatuur:</span> {puerh.tablespoons500ml17Oz}
                    </p>
                    <p>
                        <span>Weektemperatuur:</span> {puerh.harvestYear}
                    </p>
                    <p>
                        <span>Weektemperatuur:</span> {puerh.teaSeason}
                    </p>
                    <p>
                        <span>Weektemperatuur:</span> {puerh.teaRegion}
                    </p>
                    <p>
                        <span>Weektemperatuur:</span> {puerh.teaCaffeineContent}
                    </p>
                    <p>
                        <span>Weektemperatuur:</span> {puerh.glutenFree}
                    </p>
                </div>
            </div>
            {/* <div>
                <GatsbyImage 
                    image={image}
                    alt={puerh.profilePicture.altText}
                />
                <h3>{puerh.name}</h3>
                <div dangerouslySetInnerHTML={{__html: puerh.description}} />
                <p>Steeping Time: {puerh.steepingTime}</p>
            </div> */}
        </Layout>
    )
}

export const query = graphql`
query($id: String) {
    wpPuErh(id: {eq: $id}) {
        catalogues {
            nodes {
              name
            }
        }
        puerhMeta {
            name
            description
            steepingTime
            steepingTemperature
            leavesPer500ml17ozTeapot
            tablespoons500ml17Oz
            harvestYear
            teaSeason
            teaRegion
            teaCaffeineContent
            glutenFree
            profilePicture {
                localFile {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                    }
                }
                altText
            }
            pictures {
                picture1 {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED)
                        }
                    }
                    altText
                }
                picture2 {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED)
                        }
                    }
                    altText
                }
                picture3 {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED)
                        }
                    }
                    altText
                }
            }
            price
            weight
        }
        
    }    
}
`

export default PuerhPage
