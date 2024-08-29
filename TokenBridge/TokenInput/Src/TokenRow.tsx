import { TokenRowProps } from "./types/index"
import Image, { StaticImageData } from "../node_modules/next/image"
import { AnimatedLinkProps } from "./types/index"
import Link from "../node_modules/next/link"
import React from "react"

export const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href,
  target,
  css = "hover:text-[var(--secondary)]",
  content,
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={`duration-300 ease-in-out ${css}`}
    >
      {content}
    </Link>
  )
}

export const TokenRow: React.FC<TokenRowProps> = ({
  name,
  symbol,
  balance,
  logo,
  native,
  tokenAddress,
  network,
  explorer,
  onClick,
}) => {
  return (
    <div
      className="rounded-[16px] mb-6 mt-4 hover:bg-slate-900 bg-[var(--primary)] duration-300 ease-in-out cursor-pointer"
      style={{ padding: "1rem" }}
      onClick={onClick}
    >
      <div className="relative flex space-x-5 ">
        <div className="flex items-center">
          <Image src={logo} width={45} height={45} alt="Token Icon" />
        </div>

        <div className="w-[70%]  ">
          <div style={{ fontSize: "1.2rem" }} className="text-md ">
            {symbol}{" "}
            <span style={{ color: "var(--lightGray)" }} className="text-sm">
              {name}
            </span>
          </div>

          {native && (
            <div style={{ fontSize: "0.8rem", color: "var(--gray)" }}>
              Native token on {network}
            </div>
          )}

          {tokenAddress && (
            <div
              style={{ fontSize: "0.8rem", color: "var(--gray)" }}
              className="text-ellipsis  max-w-[14rem] overflow-hidden"
            >
              <AnimatedLink
                href={`${explorer}/address/${tokenAddress}`}
                target={"_blank"}
                css={"hover:text-[var(--secondary)]"}
                content={tokenAddress}
              />
            </div>
          )}
        </div>
        <div
          style={{ fontSize: "0.9rem" }}
          className="h-max max-w-[5rem]  overflow-clip text-ellipsis"
        >
          {balance} {symbol}
        </div>
      </div>
    </div>
  )
}
