export const externalRoutes = {
  ECOSYSTEM: "https://www.optimism.io/apps/all" as const,
  DOCUMENTATION: "https://community.optimism.io/" as const,
  BLOCK_EXPLORER: "https://optimistic.etherscan.io/" as const,
  STATUS: "https://status.optimism.io/" as const,
  BUG_BOUNTY: "https://immunefi.com/bounty/optimism/" as const,
  GITHUB: "https://github.com/ethereum-optimism/" as const,
  DISCORD: "https://discord-gateway.optimism.io/" as const,
  TWITTER: "https://twitter.com/optimismPBC" as const,
  TWITCH: "https://www.twitch.tv/optimismpbc" as const,
  MEDIUM: "https://optimismpbc.medium.com/" as const,
  HELP: "https://help.optimism.io/" as const,
  ABOUT: "https://www.optimism.io/about" as const,
  CAREERS: "http://jobs.optimism.io/" as const,
  BRAND_ASSETS: "https://github.com/ethereum-optimism/brand-kit" as const,
  DUNE: "https://dune.xyz/optimismpbc/Optimism-Overview" as const,
  CANNY: "https://optimism.canny.io/bug-reports" as const,
};

export const networks = {
  OPTIMISM: "OPTIMISM",
};

export const infuraKey =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_INFURA_PUBLIC_KEY_PROD
    : process.env.REACT_APP_INFURA_PUBLIC_KEY_DEV;

export const chainIds = {
  MAINNET_L2: 10,
};

export const chainMap: { [network: string]: string } = {
  10: "Optimism",
};
