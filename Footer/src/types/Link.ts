export interface AnimatedLinkProps {
  href: string;
  target?: string;
  title?: string;
  content: React.ReactNode;
  css?: string;
  style?: React.CSSProperties; // Add this line
}