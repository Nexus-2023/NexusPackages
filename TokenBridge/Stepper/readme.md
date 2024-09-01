## VerticalLinearStepper Component

`VerticalLinearStepper` is a React component designed to provide a vertical stepper UI for blockchain transactions. It visually guides users through a multi-step process such as approving token spending, signing transactions, and waiting for confirmation.

### Usage

```jsx
import React from "react"
import { VerticalLinearStepper } from "nexus-stepper"

function App() {
  const activeStep = 1 // Replace with your logic to manage active step
  const selectedToken = { symbol: "ETH", logo: "path-to-logo" } // Replace with your token data
  const flowMode = "Deposit" // Can be "Deposit" or "Withdraw"
  const bridgeFee = "0.01" // Example bridge fee
  const inputValue = 1.5 // Replace with the input amount
  const SecondTokenIcon = "path-to-second-token-logo" // Replace with the second token logo

  return (
    <div>
      <VerticalLinearStepper
        activeStep={activeStep}
        selectedToken={selectedToken}
        flowMode={flowMode}
        bridgeFee={bridgeFee}
        inputValue={inputValue}
        SecondTokenIcon={SecondTokenIcon}
      />
    </div>
  )
}

export default App
```

### Props

- `activeStep`: The current step in the stepper. Should be a number indicating the active step.
- `selectedToken`: Object containing information about the selected token, including its `symbol` and `logo`.
- `flowMode`: The mode of operation, either `"Deposit"` or `"Withdraw"`.
- `bridgeFee`: Optional bridge fee for the transaction. Should be a string or number.
- `inputValue`: The amount of tokens to be sent or received.
- `SecondTokenIcon`: The image source URL for the second token icon.
