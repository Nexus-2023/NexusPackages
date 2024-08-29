import React from "react"
import { Skeleton } from "@mui/material"
import { SkeletonLoaderProps } from "./types/type"

export default function SkeletonLoader({
  variant = "rounded",
  width = 500,
  height = 100,
  LoaderBgColor = "var(--skeletonLoaderBg)",
  borderRadius = "1rem",
  ContainerBgColor = "var(--primary)",
  LoaderForegroundColor = "var(--bg)",
}: SkeletonLoaderProps) {
  return (
    <div className="flex flex-col justify-center min-h-[70vh] -mt-[4rem] items-center">
      <div
        className="w-full items-center flex-col flex lg:max-w-[38rem] max-w-[40rem] h-full rounded-[21px] mt-4 px-6 py-8 text-white relative justify-between drop-shadow-custom"
        style={{
          backgroundColor: ContainerBgColor,
        }}
      >
        <div className="w-full">
          <Skeleton
            variant="text"
            sx={{
              fontSize: "1rem",
              backgroundColor: LoaderBgColor,
              maxWidth: "10rem",
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              fontSize: "1rem",
              backgroundColor: LoaderBgColor,
              maxWidth: "7rem",
            }}
          />
        </div>

        <div
          style={{
            padding: "1.5rem 2.5rem",
            backgroundColor: LoaderForegroundColor,
          }}
          className="relative flex rounded-[21px] mt-4 items-center"
        >
          <Skeleton
            variant={variant}
            width={width}
            height={height}
            sx={{
              backgroundColor: LoaderBgColor,
              borderRadius: borderRadius,
            }}
          />
        </div>
        <div
          style={{
            padding: "1rem 2.5rem",
            marginTop: "1.5rem",
            backgroundColor: LoaderForegroundColor,
          }}
          className="relative rounded-[21px] mt-4 items-center"
        >
          <Skeleton
            variant={variant}
            width={width}
            height={height}
            sx={{
              backgroundColor: LoaderBgColor,
              borderRadius: borderRadius,
            }}
          />
        </div>
        <div style={{ padding: "0rem 2rem", marginTop: "2rem" }}>
          <Skeleton
            variant={variant}
            width={width - 50}
            height={50}
            sx={{
              backgroundColor: LoaderBgColor,
              borderRadius: borderRadius,
            }}
          />
        </div>
      </div>
    </div>
  )
}
