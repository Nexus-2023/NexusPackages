import React from "react";
import { SocialLinksProps, LinkItemProps } from "../src/types/Footer";
import { AnimatedLink } from "./Link";

export const SocialLinks: React.FC<SocialLinksProps> = ({
  list,
  css = "",
  hoverColor = "var(--secondary)",
}) => {
  return (
    <div className={css}>
      {list.map((item: LinkItemProps, index: number) => (
        <AnimatedLink
          key={index}
          href={item.href}
          target={item.target || "_blank"}
          title={item.title || ""}
          content={item.icon || item.text || ""}
          css={`text-sm hover:text-[${hoverColor}] ${css}`}
        />
      ))}
    </div>
  );
};

export default SocialLinks;