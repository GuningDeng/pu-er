import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import {
  imageLocal
} from '../page.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcom to Pu Erh!">
    <p>
      <span role="img" aria-label="Party popper emojis">
        🎉🎉🎉
      </span>
      <br></br>
    </p>
    <StaticImage
      alt="randomzed image"
      src="https://picsum.photos/800/600"
    />
    <br></br>
    <StaticImage 
    className={imageLocal}
      alt="Local Image"
      src="../images/pexels-69.jpeg"
    />
    </Layout>
  )
}

export default IndexPage
