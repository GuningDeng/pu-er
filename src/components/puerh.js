import * as React from "react"
import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import {
    wrapper,
    image,
    puerhInof,
    puerhName
} from "./puerh.module.css"

export const Puerh = ({ puErh, slug }) => {
    // const profile = getImage(purEth.puerhMeta.profilePicture.localFile)
    const profile = getImage(puErh.puerhMeta.profilePicture.localFile)

    return (
        <Link to={slug} className={wrapper}>
          <GatsbyImage
            className={image}
            image={profile}
            alt={puErh.puerhMeta.profilePicture.altText}
          />
          <div className={puerhInof}>
            {puErh.puerhMeta.name && (
                  <p>{puErh.puerhMeta.name}</p>
              )}
          </div>
        </Link>
          
        
        
    )
        
}

export default Puerh