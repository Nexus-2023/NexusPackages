# NetworkSelecterDropdown

## Overview

The `NetworkSelecterDropdown` component is a customizable dropdown menu for selecting a blockchain network. It uses Headless UI's `Popover` for the dropdown functionality and Material UI icons for enhanced user interaction. The component can be configured to differentiate between source and destination chains, showing only the relevant networks.

## USAGE

```jsx
import React from "react";
import NetworkSelecterDropdown from "./NetworkSelecterDropdown";

const App = () => {
  const networkList = {
    1: { chainID: 1, name: "Ethereum", logo: "eth-logo.png", nativeToken: "ETH" },
    2: { chainID: 2, name: "Binance Smart Chain", logo: "bsc-logo.png", nativeToken: "BNB" },
    // Add more networks as needed
  };

  const handleChainClick = (selectedChain, closePopover) => {
    console.log("Selected Chain:", selectedChain);
    closePopover(); // Close the dropdown after selection
  };

  const selectedNetwork = networkList[1]; // Default to Ethereum
  const selectedSourceNetwork = networkList[1]; // Default source network

  return (
    <div className="App">
      <NetworkSelecterDropdown
        NetworkChainList={networkList}
        selectedNetwork={selectedNetwork}
        handleChainClick={handleChainClick}
        toolTipContent="Select your network"
        sourceChain={true}
        selectedSourceNetwork={selectedSourceNetwork}
        whiteListedChains={[1, 2]} // Only Ethereum and BSC are whitelisted
      />
    </div>
  );
};

export default App;
```
