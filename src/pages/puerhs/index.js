import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'

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
                    const slug = item.node.slug
                    return (
                        <Link to={`/puerhs/${slug}`}>
                            <p key={item.node.id}>{puerh.name}.</p>
                        </Link>
                    )
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
                slug
                puerhMeta {
                  name
                }
              }
            }
        }
    }
`

export default PuerhsPage