## MoveFundsButton Component

MoveFundsButton is a customizable React button component designed for use in blockchain-related applications. It dynamically changes its appearance and behavior based on the the mode of operation (Deposit, Withdraw, or Unknown), and the progress of fund transfers.

### Usage

```jsx
import { MoveFundsButton } from "nexus-button"

function App() {
  const handleClick = () => {
    console.log("Smart contract Function called");
  };

  return (
    <div>
      <MoveFundsButton
        isConnected={true} // Replace with your connection logic
        destinationChain="Ethereum" // Destination chain name
        onClick={handleClick}
        mode="Deposit" // Can be "Deposit", "Withdraw", or "Unknown"
        transferring={false} // Replace with actual transferring status
        textColor="white"
        bgConnected="green"
        bgDisabled="gray"
        rounded="10px"
      />
    </div>
  );
}

export default App;
```
