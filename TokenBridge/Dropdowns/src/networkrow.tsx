import { TokenRowProps } from "../src/types/Dropdown";
import Image, { StaticImageData } from "next/image";
import { AnimatedLink } from "./Link";
import React from "react";

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
      <div className="relative flex space-x-5">
        <div className="flex items-center">
          <Image src={logo} width={45} height={45} alt="Token Icon" />
        </div>

        <div className="w-[70%]">
          <div style={{ fontSize: "1.2rem" }} className="text-md">
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
              className="text-ellipsis max-w-[14rem] overflow-hidden"
            >
              <AnimatedLink
                href={`${explorer}/address/${tokenAddress}`}
                target="_blank"
                className="hover:text-[var(--secondary)]"
                content={tokenAddress}
              />
            </div>
          )}
        </div>
        
        <div
          style={{ fontSize: "0.9rem" }}
          className="h-max max-w-[5rem] overflow-clip text-ellipsis"
        >
          {balance} {symbol}
        </div>
      </div>
    </div>
  );
};

interface NetworkRowProps {
  chainID: number;
  name: string;
  logo: StaticImageData;
  nativeToken: string;
  onClick?: () => void;
}

export const NetworkRow: React.FC<NetworkRowProps> = ({
  name,
  logo,
  nativeToken,
  chainID,
  onClick,
}) => {
  return (
    <div
      className="rounded-[16px] mb-6 mt-4 hover:bg-slate-900 bg-[var(--primary)] duration-300 ease-in-out cursor-pointer"
      style={{ padding: "1rem" }}
      onClick={onClick}
    >
      <div className="relative flex space-x-5">
        <div className="flex items-center">
          <Image src={logo} width={35} height={35} alt="Token Icon" />
        </div>

        <div className="w-[70%]">
          <div
            style={{ fontSize: "1.2rem" }}
            className="text-md flex items-center"
          >
            {name}{" "}
            <div className="text-gray-500 text-[14px] items-center mt-[0.1rem] ml-2">
              {chainID}
            </div>
          </div>

          <div style={{ fontSize: "0.8rem", color: "var(--gray)" }}>
            {nativeToken} is the native gas token
          </div>
        </div>
      </div>
    </div>
  );
};
