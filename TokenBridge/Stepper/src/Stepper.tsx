import * as React from "react"
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Divider,
} from "../node_modules/@mui/material/index"
import { VerticalLinearStepperProps } from "./type"
export function VerticalLinearStepper({
  activeStep,
  selectedToken,
  flowMode,
  bridgeFee,
  inputValue,
  SecondTokenIcon,
}: VerticalLinearStepperProps) {
  const steps = [
    {
      label: `Approve ${selectedToken.symbol} token spending`,
    },
    {
      label: `Sign ${flowMode} tx`,
    },
    {
      label: `Tx confirming...`,
    },
  ]

  return (
    <Box
      sx={{
        maxWidth: 400,
        width: "40rem",
        backgroundColor: "var(--popOverPanelBg)",
        borderRadius: "1rem",
        color: "white",
        zIndex: "10",
        padding: "1rem 1rem",
      }}
    >
      <div className=" flex flex-col space-y-4">
        <div className=" rounded-xl bg-[var(--primary)] px-4 py-4">
          <h1>Send</h1>

          <div className="flex justify-between items-center ">
            <h1 className="text-3xl font-semibold">
              {inputValue} {selectedToken.symbol}
            </h1>
            <img
              src={selectedToken.logo}
              width={40}
              height={40}
              className=""
              alt="Source Token image"
            />
          </div>
        </div>

        <div className=" rounded-xl bg-[var(--primary)] px-4 py-4">
          <h1>Recieve</h1>

          <div className="flex justify-between items-center ">
            <h1 className="text-3xl font-semibold">{inputValue} bETH</h1>
            <img
              src={SecondTokenIcon}
              width={40}
              height={40}
              className=""
              alt="Source Token image"
            />
          </div>
          <div className="flex  justify-end items-center ">
            {bridgeFee && (
              <h1 className=" text-xs mt-4 text-gray-400">
                Bridge Fee : {bridgeFee} ETH
              </h1>
            )}
          </div>
        </div>
      </div>

      <Divider sx={{ border: "1px solid #112C3E", my: "1rem" }} />
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              sx={{
                "& .MuiStepLabel-label": {
                  color: "var(--gray)", // Default color
                },
                ".MuiStepLabel-label.Mui-completed": {
                  color: "#068ef3", // Color when active
                },
                ".MuiStepLabel-label.Mui-active": {
                  color: "#068ef3", // Color when active
                },
              }}
            ></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}
