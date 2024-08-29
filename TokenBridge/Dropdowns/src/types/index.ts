import { StaticImageData } from "next/image"

export interface TokenSelectorProps {
  TokenList: TokenType[]
}

export type NetworkChainType = {
  chainID: number
  name: string
  logo: StaticImageData
  explorerUrl: string
  partnerChainIDs: number[]
  nativeToken: string
  testnet: boolean
  tokens: TokenType[]
}

export type TokenType = {
  name: string
  symbol: string
  logo: StaticImageData
  balance: string
  native: boolean
  tokenAddress?: string
  abi?: any
}

export interface NetworkChainListType {
  [chainId: number]: NetworkChainType
}

// Interface for the props that the NetworkSelecterDropdown component will receive
export interface NetworkSelectorProps {
  NetworkChainList: NetworkChainListType
  selectedNetwork: NetworkChainType // New prop for the selected token
  // handleTokenClick: (token: Token, close: () => void) => void
  handleChainClick: (chain: NetworkChainType, close: () => void) => void
}
