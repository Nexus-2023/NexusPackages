declare module "moveFundButton" {
  import { ComponentType, ReactNode } from "react"

  interface MoveFundsButtonProps {
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

  const MoveFundButton: ComponentType<MoveFundsButtonProps>

  export default MoveFundButton
}
