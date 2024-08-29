import React, { Fragment } from "react"
import {
  Popover,
  Transition,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react"
import { NetworkSelectorProps } from "../src/types/index"
import { Close } from "@mui/icons-material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { NetworkRow } from "./networkrow"
import { NetworkChainType } from "../src/types/index" 

interface NetworkSelecterDropdownProps extends NetworkSelectorProps {
  selectedNetwork: NetworkChainType
  toolTipContent: string
  sourceChain: boolean
  selectedSourceNetwork: NetworkChainType
  whiteListedChains:number[];
}

interface PopoverRenderProps {
  open: boolean;
  close: () => void;
}

const NetworkSelecterDropdown: React.FC<NetworkSelecterDropdownProps> = ({
  NetworkChainList,
  selectedNetwork,
  handleChainClick,
  toolTipContent,
  sourceChain,
  selectedSourceNetwork,
  whiteListedChains
}) => {

  return (
    <Popover>
      {({ open, close }: PopoverRenderProps) => (
        <>
            <PopoverButton
              style={{
                padding: "0.62rem",
                minWidth: "9rem",
                display: "flex",
                backgroundColor: `${sourceChain ? "var(--sourceDropdownBg)" : "var(--destinationDropdownBg)"}`,
                borderRadius: "10px",
              }}
              className={`flex focus:outline-none items-center ${sourceChain ? "var(--sourceDropdownBg)" : "var(--destinationDropdownBg)"}`}
              aria-label="Options"
            >
              <span style={{ fontSize: "1rem" }} className="text-white ml-2">
                {sourceChain ? <>From: </> : <>To : </>}

                {NetworkChainList[selectedNetwork.chainID].name}
              </span>

              <ExpandMoreIcon
                sx={{ color: "white", fontSize: 25 }}
                className={`ml-1 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
              />
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
              className={` absolute z-10 w-full max-w-[30rem] border-[var(--border)] rounded-[7px] shadow-lg overflow-y-auto max-h-[24rem]  `}
              style={{
                top: `${sourceChain ? "calc(30%)" : "4rem"}`,
                left: 40,
                padding: "2rem",
                paddingTop: "1rem",
                backgroundColor: "var(--popOverPanelBg)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Select Network</div>
                <div>
                  <PopoverButton className="hover:rotate-90 ease-in  duration-200">
                    <Close />
                  </PopoverButton>
                </div>
              </div>

              {sourceChain ? (
                <>
                  {whiteListedChains.map((chainId, index) => (
                    <NetworkRow
                      key={index}
                      logo={NetworkChainList[chainId].logo}
                      name={NetworkChainList[chainId].name}
                      nativeToken={NetworkChainList[chainId].nativeToken}
                      chainID={NetworkChainList[chainId].chainID}
                      onClick={() => {
                        handleChainClick(NetworkChainList[chainId], close)
                      }}
                    />
                  ))}
                </>
              ) : (
                <>
                  {selectedSourceNetwork.partnerChainIDs.map(
                    (chainId, index) => (
                      <NetworkRow
                        key={index}
                        logo={NetworkChainList[chainId].logo}
                        name={NetworkChainList[chainId].name}
                        nativeToken={NetworkChainList[chainId].nativeToken}
                        chainID={NetworkChainList[chainId].chainID}
                        onClick={() =>
                          handleChainClick(NetworkChainList[chainId], close)
                        }
                      />
                    )
                  )}
                </>
              )}
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default NetworkSelecterDropdown
