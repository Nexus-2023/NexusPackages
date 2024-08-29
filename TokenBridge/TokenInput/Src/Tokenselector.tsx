import React, { Fragment } from "react"
import {
  Popover,
  Transition,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react/dist/index"

import Image, { StaticImageData } from "next/image"
import { TokenSelectorProps } from "./types/index"
import { Close, ExpandMore } from "@mui/icons-material"
import { TokenRow } from "./TokenRow"
import Tippy from "@tippyjs/react"
import "tippy.js/animations/scale.css"
import "tippy.js/themes/translucent.css"

const TokenSelecterDropdown: React.FC<TokenSelectorProps> = ({
  TokenList,
  dispatch,
  selectedToken,
  selectedNetwork,
  selectedSourceBalance,
  setSelectedToken,
}) => {
  const handleTokenClick = (
    token: {
      name: string
      symbol: string
      logo: StaticImageData
      native: boolean
      tokenAddress?: string
      balance: string
    },
    close: () => void
  ) => {
    console.log(`Token clicked:`, token)
    dispatch(setSelectedToken(token))
    console.log(`token.balance:`, token.balance)
    console.log(`selectedSourceBalance:`, selectedSourceBalance)
    close()
  }

  return (
    <Tippy
      content={`Select Token`}
      placement="bottom"
      animateFill={true}
      animation={"scale"}
      theme="translucent"
    >
      <Popover>
        {({ open, close }) => (
          <>
            <PopoverButton
              style={{
                padding: "0.7rem",
                minWidth: "9rem",
                display: "flex",
                backgroundColor: "var(--tokenInputBg)",
                border: "1px solid var(--border)",
              }}
              className="flex rounded-l-[7px] focus:outline-none border border-[var(--border)] items-center"
              aria-label="Options"
            >
              <div className=" flex items-center justify-center">
                <Image
                  src={selectedToken.logo.src}
                  width={35}
                  height={35}
                  alt="ethereum Icon"
                />

                <span
                  style={{ fontSize: "1rem" }}
                  className="text-[var(--tokenInputText)] font-regular ml-2 mt-1"
                >
                  {selectedToken.symbol || "ETH"}
                </span>

                <ExpandMore
                  sx={{ color: "var(--tokenInputText)", fontSize: 25 }}
                  className={`ml-1 transition-transform duration-300 ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </PopoverButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel
                className="absolute z-10 w-full max-w-[30rem] border-[var(--border)] rounded-[7px] shadow-lg  max-h-[31rem] overflow-y-auto"
                style={{
                  top: "calc(30%)",
                  left: 40,
                  padding: "2rem",
                  backgroundColor: "var(--popOverPanelBg)",
                }}
              >
                <div className="absolute right-6 top-3">
                  <PopoverButton className="hover:rotate-90 ease-in duration-200">
                    <Close />
                  </PopoverButton>
                </div>
                Select Token
                {TokenList.map((token, index) => (
                  <TokenRow
                    key={index}
                    balance={token.balance}
                    symbol={token.symbol}
                    logo={token.logo}
                    name={token.name}
                    native={token.native}
                    tokenAddress={token.tokenAddress}
                    network={selectedNetwork.name}
                    explorer={selectedNetwork.explorerUrl}
                    onClick={() => handleTokenClick(token, close)}
                  />
                ))}
              </PopoverPanel>
            </Transition>
          </>
        )}
      </Popover>
    </Tippy>
  )
}

export default TokenSelecterDropdown
