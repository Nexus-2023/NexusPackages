import React from "react"
import { AnimatedLinkProps } from "../src/types/Link"

export const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href,
  target,
  css = "hover:text-[var(--secondary)]",
  content,
}) => {
  return (
    <a
      href={href}
      target={target}
      className={`duration-300 ease-in-out ${css}`}
    >
      {content}
    </a>
  )
}
