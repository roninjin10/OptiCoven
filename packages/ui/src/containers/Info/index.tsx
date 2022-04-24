import React from "react"
import { useDropzone } from "react-dropzone"
// @ts-ignore
import { Row, Col } from "react-styled-flexboxgrid"

import { APP_TITLE, APP_DESCRIPTION, APP_LINKS } from "../../helpers/const"

import Button, { ButtonColor, ButtonSize } from "../../components/Button"
import * as S from "./styled"
import { Optimism, useEthers } from "@usedapp/core"
import { SUPPORTED_WALLETS } from "../../web3/connectors"

const Info: React.FC<{}> = ({}) => {
  const [witch, setWitch] = React.useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setWitch(event.target.value as string)
  }
  const { activate, account, chainId, library } = useEthers()
  console.log({ account, chainId })
  const handleWallet = async (connector: any) => {
    if (connector) {
      try {
        await activate(connector)
      } catch (err: any) {
        console.log(err)
      }
    }
  }
  const switchToOptimism = async () => {
    await library?.send("wallet_addEthereumChain", [
      {
        chainId: "0x" + Optimism.chainId.toString(16),
        chainName: Optimism.chainName,
        rpcUrls: ["https://mainnet.optimism.io"],
        nativeCurrency: {
          name: "Optimistic ETH",
          symbol: "ETH",
          decimals: 18,
        },
      },
    ])
    await library?.send("wallet_switchEthereumChain", [
      {
        chainId: `0x${Optimism.chainId.toString(16)}`,
      },
    ])
  }
  return (
    <S.Wrapper>
      <Row middle="xs" center="xs">
        <Col xs={12}>
          <h1>{APP_TITLE}</h1>
          {false && <p>{APP_DESCRIPTION}</p>}
          <S.Links>
            {APP_LINKS.map((item, i) => (
              <a href={item.href} target="_blank" rel="noreferrer" key={i}>
                {item.icon}
                <span>{item.title}</span>
              </a>
            ))}
          </S.Links>
          <S.Divider />
          {!account && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {Object.values(SUPPORTED_WALLETS).map((wallet, index) => (
                <Button
                  key={index}
                  $color={ButtonColor.White}
                  $size={ButtonSize.Md}
                  onClick={() => handleWallet(wallet.connector)}
                >
                  <img
                    style={{ width: "30px", height: "30px", paddingRight: "4px" }}
                    alt="wallet-img"
                    src={wallet.iconURL}
                  />
                  <span>{wallet.name}</span>
                </Button>
              ))}
              <S.Hint>or drag and drop your file here</S.Hint>
            </div>
          )}
          {account && chainId !== Optimism.chainId && (
            <Button $color={ButtonColor.Red} $size={ButtonSize.Lg} onClick={() => switchToOptimism()}>
              <span>SWITCH TO OPTIMISM</span>
            </Button>
          )}
          {account && chainId !== Optimism.chainId && (
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={witch}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          )}
        </Col>
      </Row>
    </S.Wrapper>
  )
}

export default Info
