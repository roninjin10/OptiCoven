import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import COINBASE_LOGO from "../wallet/coinbaseWalletIcon.png";
import IMTOKEN_LOGO from "../wallet/coinbaseWalletIcon.png";
import METAMASK_LOGO from "../wallet/metamask.png";
import WALLETCONNECT_LOGO from "../wallet/walletConnect.png";
import OPTIMISM_LOGO from "../network/optimism-32@3x.png";
import OPTIMISM from "../network/optimism-24@3x.png";
import { chainIds, infuraKey } from "../constants";

const RPC_URLS: { [chainId: number]: string } = {
  [chainIds.MAINNET_L2]: `https://mainnet.infura.io/v3/${infuraKey}`,
};

export const injected = new InjectedConnector({});

export const network = new NetworkConnector({
  urls: Object.fromEntries(
    Object.values<number>(chainIds).map((i) => [i, RPC_URLS[i]])
  ),
  defaultChainId: chainIds.MAINNET_L2,
});

export const networks  = {
  10: { text: "Optimism", icon: OPTIMISM, chainId: 10 },
} as const;

export const toNetworks = {
  10: { text: "Optimism", icon: OPTIMISM, chainId: 10 },
} as const;

export const walletconnect = new WalletConnectConnector({
  supportedChainIds: Object.values(chainIds),
  /**
   * todo: talk to Pedro about getting our own bridge
   */
  bridge: "https://zora.bridge.walletconnect.org",
  qrcode: true,
  rpc: {
    10: "https://mainnet.optimism.io",
    69: "https://kovan.optimism.io",
  },
  signingMethods: ["wallet_addEthereumChain"],
  qrcodeModalOptions: {
    mobileLinks: ["rainbow", "metamask", "imtoken", "ledger"],
  },
});

const getInjectedWalletParams = () => {
  const params = {
    connector: injected,
    name: "",
    href: "",
    description: "",
    color: "",
    iconURL: "",
  };

  if ((window as any).imToken) {
    params.name = "imToken Wallet";
    params.iconURL = IMTOKEN_LOGO;
  } else if ((window as any).ethereum?.isCoinbaseWallet) {
    params.name = "Coinbase Wallet";
    params.iconURL = COINBASE_LOGO;
  } else {
    params.name = "MetaMask";
    params.iconURL = METAMASK_LOGO;
    params.href = "https://metamask.app.link/dapp/gateway.optimism.io";
  }
  return params;
};

const walletlink = new WalletLinkConnector({
  url: RPC_URLS[chainIds.MAINNET_L2],
  appName: "Optimism Gateway",
  appLogoUrl: OPTIMISM_LOGO,
});

export const SUPPORTED_WALLETS = {
  INJECTED: getInjectedWalletParams(),
  WALLET_CONNECT: {
    connector: walletconnect,
    name: "WalletConnect",
    iconURL: WALLETCONNECT_LOGO,
    description: "",
    href: null,
    mobile: true,
    color: "",
  },
  COINBASE_WALLET: {
    connector: walletlink,
    name: "Coinbase Wallet",
    iconURL: COINBASE_LOGO,
    description: "",
    href: "https://go.cb-w.com/FmdxZwaiOhb",
    mobile: true,
    color: "",
  },
} as const;

// Clear WalletLink from local storage when browser refreshes, else it will open automatically every time
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  [
    "-walletlink:https://www.walletlink.org:session:linked",
    "-walletlink:https://www.walletlink.org:session:id",
    "-walletlink:https://www.walletlink.org:session:secret",
    "-walletlink:https://www.walletlink.org:version",
  ].forEach((item) => {
    this.localStorage.removeItem(item);
  });
});
