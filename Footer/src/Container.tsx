import React from 'react';

type FooterContainerProps = {
  children: React.ReactNode;
  css?: string;
  spacing?: string;
};

const FooterContainer: React.FC<FooterContainerProps> = ({ children, css = '', spacing = '' }) => {
  return (
    <div className={`mt-5 flex w-full items-center justify-center p-2 text-white ${css}`}>
      <div className={`w-full justify-center ${spacing} flex`}>
        {children}
      </div>
    </div>
  );
};

export default FooterContainer;
