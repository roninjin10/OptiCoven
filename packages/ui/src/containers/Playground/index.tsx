import React, { useState } from "react"
// @ts-ignore
import { Grid } from "react-styled-flexboxgrid"

import Info from "../Info"
import Sandbox from "../Sandbox"
import Card from "../../components/Card"
import Section from "../../components/Section"
import ethers from 'ethers'

import * as S from "./styled"
import { Mainnet, Optimism } from "@usedapp/core"
import { infuraKey } from "../../constants"

export const readOnlyProviders = {
  [Mainnet.chainId]: new ethers.providers.InfuraProvider(
    Mainnet.chainId,
    infuraKey
  ),
  [Optimism.chainId]: new ethers.providers.InfuraProvider(
    Optimism.chainId,
    infuraKey
  ),
};

const Playground: React.FC = () => {
  const [file, setFile] = useState<string | undefined>()

  return (
    <Section>
      <Grid>
        <S.Wrapper>
          <Card>
            <Sandbox file={file} />
          </Card>
          <Card>
            <Info />
          </Card>
        </S.Wrapper>
      </Grid>
    </Section>
  )
}

export default Playground
