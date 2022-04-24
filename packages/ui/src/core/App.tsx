import React from "react"

import Layout from "./Layout"

import Header from "../containers/Header"
import Playground from "../containers/Playground"
import Footer from "../containers/Footer"
import Main from "../components/Main"
import { DAppProvider } from "@usedapp/core"

const App: React.FC = () => {
  return (
    <DAppProvider config={{
      
    }}>
    <Layout>
      <Main>
        <Header />
        <Playground />
        <Footer />
      </Main>
    </Layout>
    </DAppProvider>
  )
}

export default App
