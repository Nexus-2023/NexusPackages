import React from "react";
import { SocialLinksProps, LinkItemProps } from "../src/types/Footer";
import { AnimatedLink } from "./Link";

export const LinkColumns: React.FC<SocialLinksProps> = ({
  list,
  css = '',
  heading,
  hoverColor = "var(--secondary)",
}) => {
  return (
    <div className={`flex flex-col ${css}`}>
      {heading && <p className="sm:text-lg text-sm text-gray-400">{heading}</p>}

      <div className="space-y-3 flex flex-col">
        {list.map((item: LinkItemProps, index: number) => (
          <AnimatedLink
            key={index}
            href={item.href || "#"}
            target={item.target || "_blank"}
            title={item.title || ""}
            content={item.icon || item.text || ""}
            css={`sm:text-base text-sm ${css}`}
            style={{ color: hoverColor }} // Apply hover color correctly
          />
        ))}
      </div>
    </div>
  );
};

export default LinkColumns;
