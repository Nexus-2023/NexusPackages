import React from "react"

import { CircularProgress } from "@mui/material"

interface MoveFundsButtonProps {
  isConnected: boolean
  textColor?: string
  destinationChain: string
  bgConnected?: string
  bgDisabled?: string
  rounded?: string
  onClick: any
  transferring: boolean
  mode: "Deposit" | "Withdraw" | "Unknown"
}

function MoveFundsButton({
  isConnected,
  destinationChain,
  textColor = "white",
  bgConnected = "var(--secondary)",
  bgDisabled = "var(--depositButtonDisabled)",
  rounded = "20px",
  onClick,
  mode,
  transferring,
}: MoveFundsButtonProps) {
  return (
    <>
      {mode === "Deposit" ? (
        <>
          <button
            style={{
              padding: "0.7rem 1rem",
              width: "100%",
              color: textColor,
              backgroundColor: isConnected ? bgConnected : bgDisabled,
              borderRadius: rounded,
              cursor:
                isConnected && transferring === false
                  ? "pointer"
                  : "not-allowed",
              maxWidth: "35rem",
            }}
            className="focus:outline-none"
            onClick={onClick}
          >
            {transferring ? (
              <div className="flex items-center justify-center space-x-3">
                <h1>Transferring </h1>
                <CircularProgress sx={{ color: "white" }} size={20} />
              </div>
            ) : (
              <>{mode} Amount</>
            )}
          </button>
        </>
      ) : (
        <>
          <button
            style={{
              padding: "0.7rem 1rem",
              width: "100%",
              color: textColor,
              backgroundColor: bgDisabled,
              borderRadius: rounded,
              cursor: "not-allowed",
              maxWidth: "35rem",
            }}
            className="focus:outline-none"
          >
            Withdrawals will be enabled soon
          </button>
        </>
      )}
    </>
  )
}

export default MoveFundsButton
