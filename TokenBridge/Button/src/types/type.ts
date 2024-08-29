export interface MoveFundsButtonProps {
  isConnected: boolean
  textColor?: string
  destinationChain: string
  bgConnected?: string
  bgDisabled?: string
  rounded?: string
  onClick: any
  transferring: boolean
  mode: "Deposit" | "Withdraw" | "Unknown"
}
