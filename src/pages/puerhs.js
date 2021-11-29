import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const PuerhsPage = ({
    data: {
        allWpPuErh: {
            edges
        }
    } 
}) => {
    return (
        <Layout pageTitle="Pu Erhs">
            {
                edges.map((item) => {
                    const puerh = item.node.puerhMeta
                    return <p key={item.node.id}>{puerh.name}.</p>
                })
            }

        </Layout>
    )
}

export const query = graphql`
    query {
        allWpPuErh {
            edges {
              node {
                id
                puerhMeta {
                  name
                }
              }
            }
        }
    }
`

export default PuerhsPage