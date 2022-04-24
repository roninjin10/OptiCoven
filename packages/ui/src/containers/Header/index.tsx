import React from "react"
// @ts-ignore
import { Grid } from "react-styled-flexboxgrid"

import { LOGO_NAME, LOGO, LOGO_WIDTH } from "../../helpers/const"

import * as S from "./styled"

import OPTIMISM_LOGO from "../../network/optimism-24@3x.png"
const Header: React.FC = () => {
  return (
    <S.Wrapper>
      <Grid>
        <S.Logo href="/">
          <span>{LOGO_NAME}</span>
          <img
            style={{ paddingTop: "4px", width: "30px", height: "30px", paddingRight: "4px" }}
            alt="wallet-img"
            src={OPTIMISM_LOGO}
          />
        </S.Logo>
      </Grid>
    </S.Wrapper>
  )
}

export default Header
