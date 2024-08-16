import React from 'react';

const FakeHelmet = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="helmet">{children}</div>
);

FakeHelmet.defaultProps = {};

export default FakeHelmet;
export { FakeHelmet as Helmet };
