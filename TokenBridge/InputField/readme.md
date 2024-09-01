# AddressAccordian Component

AddressAccordian is a React component that provides an expandable section for entering an address, designed to improve user experience by allowing users to show or hide the address input field as needed.

## usage

```
import { AddressAccordian } from "nexus-token-input-field"

function App() {
  const handleAddressChange = (newAddress) => {
    console.log("New Address:", newAddress);
  };

  return (
    <div>
      <AddressAccordian
        label="Enter Address"
        address="0x123..."
        handleAddress={handleAddressChange}
      />
    </div>
  );
}

export default App;

```
