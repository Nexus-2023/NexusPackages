// import { ChainSelectorProps } from "."
import { StaticImageData } from "../../node_modules/next/image"

export interface TokenRowProps {
  name: string
  symbol: string
  balance: string
  logo: StaticImageData
  native?: boolean
  tokenAddress?: string
  network?: string
  explorer?: string
  onClick?: () => void
}

export interface AnimatedLinkProps {
  href: string
  target: string
  css?: string
  title?: string
  content: any
}

export interface TokenInputMaxProps {
  TokenSelecterProps: TokenSelectorProps
  TokenAmount: number
  handleToken: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleMaxClick: () => void
}

export interface AddressInputProps {
  label: string
  address: `0x${string}` | undefined
  handleAddress: any
}

type SelectedNetwork = {
  chainID: number
  name: string
  nativeToken: string
  testnet: boolean
  logo: StaticImageData
  explorerUrl: string
  partnerChainIDs: number[]
  tokens: TokenType[]
}

interface SelectedTokenState {
  balance: string
  name: string
  symbol: string
  logo: StaticImageData
  native: boolean
  tokenAddress?: string
}
export interface TokenSelectorProps {
  TokenList: TokenType[]
  dispatch: any
  selectedToken: SelectedTokenState
  selectedNetwork: SelectedNetwork
  selectedSourceBalance: any
  setSelectedToken: any
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
