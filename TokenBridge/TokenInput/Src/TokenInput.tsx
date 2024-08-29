import React from "react"
import { TokenInputMaxProps } from "./types/index"
import TokenSelecterDropdown from "./Tokenselector"
import Tippy from "@tippyjs/react"
import "tippy.js/animations/scale.css"
import "tippy.js/themes/translucent.css"

export const TokenInputMax: React.FC<TokenInputMaxProps> = ({
  TokenSelecterProps,
  TokenAmount,
  handleToken,
  handleMaxClick,
}) => {
  return (
    <div className="flex w-full">
      <TokenSelecterDropdown {...TokenSelecterProps} />

      <input
        style={{
          padding: "0.95rem",
          backgroundColor: "var(--tokenInputBg)",
        }}
        type="number"
        placeholder="Enter Amount"
        className="w-full  text-gray-200 border border-[var(--border)] outline-none"
        value={TokenAmount}
        onChange={handleToken}
      />

      <Tippy
        content={`Input Max Balance`}
        placement="right"
        animateFill={true}
        animation={"scale"}
        theme="translucent"
      >
        <button
          onClick={handleMaxClick}
          style={{
            padding: "0.95rem",
            backgroundColor: "var(--tokenInputBg)",
          }}
          className="px-4 py-2 bg-[var(--tokenInputBg)] text-[var(--tokenInputText)] rounded-l-none rounded-r-[7px] border border-[var(--border)] focus:outline-none"
        >
          MAX
        </button>
      </Tippy>
    </div>
  )
}
