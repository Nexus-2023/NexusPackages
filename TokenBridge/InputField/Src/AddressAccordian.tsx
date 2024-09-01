import React from "react"
import { ExpandMore } from "@mui/icons-material"
import AddressInput from "./AddressInput"
import { AddressInputProps } from "./types/index"

const AddressAccordian: React.FC<AddressInputProps> = ({
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
          <button onClick={() => setOpen(!open)}>
            <ExpandMore
              sx={{ fontSize: 25 }}
              className={`ml-1 transition-all duration-300 ease-in ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
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

export default AddressAccordian
