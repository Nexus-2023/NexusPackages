### TokenInputMax Component

`TokenInputMax` is a React component that provides a user interface for selecting tokens and specifying an amount to transact. It includes an input field for entering the token amount and a button to set the maximum amount.

#### Usage

```jsx
import React from "react"
import TokenInputMax from "nexus-token-input"

const App = () => {
  const TokenSelecterProps = {
    // Populate with necessary token selector props
  }
  const TokenAmount = 0

  const handleToken = event => {
    // Handle the token amount input
  }

  const handleMaxClick = () => {
    // Handle the MAX button click
  }

  return (
    <TokenInputMax
      TokenSelecterProps={TokenSelecterProps}
      TokenAmount={TokenAmount}
      handleToken={handleToken}
      handleMaxClick={handleMaxClick}
    />
  )
}

export default App
```

#### Props

- **`TokenSelecterProps`**: Props to be passed to the `TokenSelecterDropdown` component for token selection.
- **`TokenAmount`**: The amount of tokens specified by the user.
- **`handleToken`**: Function to handle changes in the token amount input.
- **`handleMaxClick`**: Function to handle the "MAX" button click, which sets the token amount to the maximum available.
