import Header from '@natelev/header';
import * as React from 'react';
import { PageConfig } from 'src/config/PagesConfigTypes';

import MenuButton from './MenuButton';

interface TopHeaderProps {
  leftPages?: PageConfig[];
  middlePages?: PageConfig[];
  rightPages?: PageConfig[];
  logo?: React.FC;
  background?: string;
  transparent?: boolean;
}

const TopHeader: React.FC<TopHeaderProps> = ({
  leftPages = [],
  middlePages = [],
  rightPages = [],
  logo,
  background,
  transparent,
}) => {
  const firstElements = leftPages.map(page => {
    return function FirstElementComponent(props: any) {
      return <MenuButton {...props} key={page.name} page={page} />;
    };
  });

  const centerElements = middlePages.map(page => {
    return function CenterElementComponent(props: any) {
      return <MenuButton {...props} key={page.name} page={page} />;
    };
  });

  const lastElements = rightPages.map(page => {
    return function LastElementComponent(props: any) {
      return <MenuButton {...props} key={page.name} page={page} />;
    };
  });

  return (
    <div style={{ position: 'relative' }}>
      <Header
        logo={logo as any}
        firstElements={firstElements}
        middleElements={centerElements}
        lastElements={lastElements}
        backgroundColor={transparent || background ? 'transparent' : 'primary.main'}
        background={transparent ? undefined : background}
        textColor="white"
        highlightBackgroundColor="white"
        highlightTextColor="primary.main"
        headerType="top"
      />
    </div>
  );
};

export default TopHeader;
