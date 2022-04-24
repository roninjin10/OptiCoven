import { BigNumber } from "@ethersproject/bignumber";
import { AbstractConnector } from "@web3-react/abstract-connector";

export interface TokenListItem {
  chainId: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
  extensions: {
    optimismBridgeAddress: string;
  };
}

export interface WalletInfo {
  connector?: AbstractConnector;
  name: string;
  iconURL: string;
  description: string;
  href: string | null;
  color: string;
  primary?: true;
  mobile?: true;
  mobileOnly?: true;
}

export interface NetworkItem {
  text: string;
  icon: string;
  chainId: number;
  selected?: boolean;
}

export interface NetworkItemV2 {
  text: string;
  icon?: string;
  type: string;
  chainId?: number;
}

export interface ExternalBridge {
  name: string;
  icon: string;
  link: string;
  urlText: string;
  chains?: { [key: number]: Set<string> };
  type?: string;
}
