import * as React from 'react'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to my Website!">
      <p>Hello, please be kind to me.</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage