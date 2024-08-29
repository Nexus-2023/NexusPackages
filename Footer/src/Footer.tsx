import React from "react";
import { MainFooterProps, FooterProps } from "../src/types/Footer";
import {
  SocialLinks,
  Container as Box,
  LinkItem,
  Container as FooterContainer,
  LinkColumn as LinkColumns,
} from "./index";

// Footer Component
export const Footer: React.FC<FooterProps> = ({
  boxCount,
  position = [0, 1, 2],
  children,
  css,
  spacing,
}) => {
  return (
    <FooterContainer css={css} spacing={spacing}>
      {position.slice(0, boxCount).map((pos, index) => (
        <Box key={index}>{children[pos]}</Box>
      ))}
    </FooterContainer>
  );
};

// MainFooter Component
const MainFooter: React.FC<MainFooterProps> = ({
  boxCount,
  list,
  position,
}) => {
  return (
    <Footer boxCount={boxCount} position={position}>
      <>
        {list && list.links && list.links.length > 0 ? (
          <>
            {list.links.map((items, index) => (
              <React.Fragment key={index}>
                <LinkItem
                  text={items.text}
                  href={items.href}
                  target={items.target}
                  title={items.title}
                />
                {index !== list.links.length - 1 && "  |  "}
              </React.Fragment>
            ))}
          </>
        ) : (
          <h1>List is Undefined</h1>
        )}
      </>
      <div className="min-[900px]:flex hidden  font-medium">
        {list.copyright}
      </div>
      <div>
        <SocialLinks
          list={list.socialLinks || []}
          css="flex items-center justify-between space-x-5"
        />
      </div>
    </Footer>
  );
};

export default MainFooter;

// CustomFooter Component
export const CustomFooter: React.FC<MainFooterProps> = ({
  boxCount,
  list,
  position,
}) => {
  return (
    <Footer boxCount={boxCount} position={position}>
      <>
        <div className="flex flex-col space-y-4">
          {list.Logo}
          <p className="text-gray-400 min-[900px]:flex hidden ">
            {list.copyright}
          </p>
        </div>
      </>
      <div>
        {list && list.linkColumn && (
          <div className="flex space-x-16">
            {list.linkColumn.map((column, index) => (
              <LinkColumns
                key={index}
                heading={column.heading}
                list={column.list}
                css="space-y-4"
              />
            ))}
          </div>
        )}
      </div>
    </Footer>
  );
};
