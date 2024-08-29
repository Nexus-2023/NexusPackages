import React from "react"

import { MoveFundsButtonProps } from "./types/type"
import Tippy from "../node_modules/@tippyjs/react/index"
import "node_modules/tippy.js/animations/scale.css"
import "node_modules/tippy.js/themes/translucent.css"
import { CircularProgress } from "../node_modules/@mui/material/index"

export const MoveFundsButton: React.FC<MoveFundsButtonProps> = ({
  isConnected,
  destinationChain,
  textColor = "white",
  bgConnected = "var(--secondary)",
  bgDisabled = "var(--depositButtonDisabled)",
  rounded = "20px",
  onClick,
  mode,
  transferring,
}) => {
  return (
    <>
      {mode === "Deposit" ? (
        <>
          <Tippy
            placement="top"
            animateFill={true}
            animation={"scale"}
            theme="translucent"
            content={
              isConnected
                ? `${mode} to ${destinationChain}`
                : " Please connect wallet"
            }
          >
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
          </Tippy>
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
