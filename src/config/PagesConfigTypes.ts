import { ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
};

export type PageConfig = {
  component: React.FC;
  layout?: React.FC<LayoutProps>;
  name: string;
  path: string;
  redirectPaths?: string[];
  longName?: string;
  background?: string;
  customImage?: React.FC;
  customImageHighlighted?: React.FC;
  customStyles?: React.CSSProperties;
  onClick?: () => void;
  highlight?: 'never' | 'auto' | 'always';
  permission?: 'no-auth' | 'auth' | 'user';
  maxWidth?: boolean;
};
