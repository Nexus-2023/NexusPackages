export interface LinkItemProps {
  href: string
  target?: string
  title: string
  icon?: React.ReactNode
  text?: string
}

export interface ColLinkItem {
  href: string
  target?: string
  title: string
  icon?: React.ReactNode
  text?: string
  heading?: string
}
export interface FooterContentType {
  copyright?: string
  Logo?: React.ReactNode
  links?: LinkItemProps[]
  socialLinks?: LinkItemProps[]
  linkColumn?: SocialLinksProps[]
}

export interface SocialLinksProps {
  list: LinkItemProps[]
  css?: string
  hoverColor?: string
  heading?: string
}
export interface CustomContent {
  children?: React.ReactNode
}

export interface ContainerProps {
  css?: string
  children: React.ReactNode
  spacing?: string
}
export interface MainFooterProps {
  list: FooterContentType
  boxCount: number
  position: number[]
}

export interface FooterProps {
  boxCount: number
  position: number[]
  children: React.ReactNode[]
  css?: string
  spacing?: string
}
