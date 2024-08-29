type TokenType = {
  balance: string
  name: string
  symbol: string
  logo: any
  native: boolean
  tokenAddress?: string
}
export interface VerticalLinearStepperProps {
  onStepChange: (step: number) => void
  bridgeFee: string
  inputValue: number
  activeStep: any
  selectedToken: TokenType
  flowMode: "Deposit" | "Withdraw" | "Unknown"
  SecondTokenIcon: any
}
