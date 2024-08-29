import React from "react";
import { LinkItemProps } from "../src/types/Footer";
import { AnimatedLink } from "./Link";

export const LinkItem: React.FC<LinkItemProps> = ({
  target = "_blank",
  title = "",
  icon,
  text = "",
  href = "#",
}) => {
  return (
    <AnimatedLink
      href={href}
      target={target}
      title={title}
      content={icon || text}
      css={`text-sm hover:text-[var(--secondary)]`}
    />
  );
};

export default LinkItem;
