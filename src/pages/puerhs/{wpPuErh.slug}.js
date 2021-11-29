import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"

const PuerhPage = ({
    data: {
        wpPuErh: {
            puerhMeta: puerh
        }
    }
}) => {
    return (
        <Layout pageTitle="Pu Erhs Template">
            <div>
                <h3>{puerh.name}</h3>
                <div dangerouslySetInnerHTML={{__html: puerh.description}} />
                <p>Steeping Time: {puerh.steepingTime}</p>
            </div>
        </Layout>
    )
}

export const query = graphql`
query($id: String) {
    wpPuErh(id: {eq: $id}) {
        puerhMeta {
            name
            description
            steepingTime
            steepingTemperature
            leavesPer500ml17ozTeapot
            harvestYear
            teaRegion
            tablespoons500ml17Oz
            teaCaffeineContent
            glutenFree
            weight
            price
        }
    }    
}
`

export default PuerhPage
