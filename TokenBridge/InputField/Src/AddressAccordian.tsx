import React from "react"
import { ExpandMore } from "@mui/icons-material"
import Tippy from "@tippyjs/react"
import "tippy.js/animations/scale.css"
import "tippy.js/themes/translucent.css"
import { AddressInput } from "./AddressInput"
import { AddressInputProps } from "./types/index"

export const AddressAccordian: React.FC<AddressInputProps> = ({
  label,
  address,
  handleAddress,
}) => {
  const [open, setOpen] = React.useState(false)
  const contentRef = React.useRef<HTMLDivElement>(null)
  return (
    <div className=" w-full max-w-[30rem] ">
      <>
        <div className="flex  justify-end  items-center -mr-2 -mt-1">
          Destination Address
          <Tippy
            content={`Custom address`}
            placement="right"
            animateFill={true}
            animation={"scale"}
            theme="translucent"
          >
            <button onClick={() => setOpen(!open)}>
              <ExpandMore
                sx={{ fontSize: 25 }}
                className={`ml-1 transition-all duration-300 ease-in ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </Tippy>
        </div>
        <div
          ref={contentRef}
          className={`overflow-hidden transition-all duration-300 ease-in-out`}
          style={{
            maxHeight: open ? `${contentRef.current?.scrollHeight}px` : "0px",
          }}
        >
          <AddressInput
            label={label}
            address={address}
            handleAddress={handleAddress}
          />
        </div>
      </>
    </div>
  )
}
