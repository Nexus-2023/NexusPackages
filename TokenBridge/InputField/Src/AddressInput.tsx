import React from "react"
import { AddressInputProps } from "./types/index"

const AddressInput: React.FC<AddressInputProps> = ({
  label,
  address,
  handleAddress,
}) => {
  return (
    <div>
      <p
        style={{ fontSize: "1rem" }}
        className="text-white font-medium mb-2 ml-1"
      >
        {label}
      </p>
      <input
        value={address}
        onChange={handleAddress}
        style={{
          padding: "0.8rem",
          backgroundColor: "var(--AddressInputBg)",
          fontSize: "1rem",
          fontWeight: 500,
        }}
        type="text"
        placeholder="0x8a770B7700f941B..."
        className="w-full text-white border border-[var(--border)] rounded-[7px] outline-none   placeholder-opacity-75 placeholder:text-gray-500 placeholder:font-medium"
      />
    </div>
  )
}

export default AddressInput
