import * as React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import {
    header,
    puerhHeaderPicture,
    puerhHeaderInfo,
    puerhDescription,
    puerhPictures,
    puerhPicture,
    puerhDetails,
    puerhDetail
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
    const image1 = getImage(puerh.pictures.picture1.localFile)
    const image2 = getImage(puerh.pictures.picture2.localFile)
    const image3 = getImage(puerh.pictures.picture3.localFile)

    return (
        <Layout pageTitle="Pu Erh Template">
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
                        <span>Prijs:</span> <strong> {puerh.price}</strong>
                    </p>
                    <br></br>
                    <p>
                        <span>Gewicht:</span> <strong>{puerh.weight}</strong>
                    </p>
                    <div
                        className={puerhDescription}
                        dangerouslySetInnerHTML={{ __html: puerh.description }}
                    />

                </div>
            </div>
            <div className={puerhPictures}>
                <GatsbyImage
                    className={puerhPicture}
                    image={image1}
                    alt={puerh.pictures.picture1.altText}
                />
                <GatsbyImage
                    className={puerhPicture}
                    image={image2}
                    alt={puerh.pictures.picture2.altText}
                />
                <GatsbyImage
                    className={puerhPicture}
                    image={image3}
                    alt={puerh.pictures.picture3.altText}
                />

            </div>
            <div className={puerhDetails}>
                <h2>Details</h2>
                <p>
                    <span className={puerhDetail}><strong>Inweektijd:</strong></span> {puerh.steepingTime}
                </p>
                <p>
                    <span className={puerhDetail}><strong>Weektemperatuur:</strong></span> {puerh.steepingTemperature}
                </p>
                <p>
                    <span className={puerhDetail}><strong>Bladeren Per 500ml 17oz Theepot:</strong></span> {puerh.leavesPer500ml17ozTeapot}
                </p>
                <p>
                    <span className={puerhDetail}><strong>Eetlepels 500ml17Oz:</strong></span> {puerh.tablespoons500ml17Oz}
                </p>
                <p>
                    <span className={puerhDetail}><strong>Oogstjaar:</strong></span> {puerh.harvestYear}
                </p>
                <p>
                    <span className={puerhDetail}><strong>Thee seizoen:</strong></span> {puerh.teaSeason}
                </p>
                <p>
                    <span className={puerhDetail}><strong>Thee Regio:</strong></span> {puerh.teaRegion}
                </p>
                <p>
                    <span className={puerhDetail}><strong>Thee Cafeïne Inhoud:</strong></span> {puerh.teaCaffeineContent}
                </p>
                <p>
                    <span className={puerhDetail}><strong>Glutenvrij:</strong></span> {puerh.glutenFree}
                </p>
            </div>
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
