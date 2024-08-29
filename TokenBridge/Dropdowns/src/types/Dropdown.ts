import { StaticImageData } from "next/image"
export interface TokenRowProps {
  name: string;
  symbol: string;
  balance: string;
  logo: StaticImageData;
  native?: boolean;
  tokenAddress?: string;
  network?: string;
  explorer?: string;
  onClick?: () => void; // Add this line
}

