declare module 'nexusnavbar' {
  import { ComponentType, ReactNode } from 'react';

  interface NavbarProps {
    list: Array<{ label: string; href: string }>;
    logo: string;
    endComponent?: ReactNode; // Updated to match the actual component type
    copyright?: ReactNode;    // Updated to match the actual component type
  }

  const ResponsiveAppBar: ComponentType<NavbarProps>;

  export default ResponsiveAppBar;
}