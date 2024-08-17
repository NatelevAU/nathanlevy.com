import { render } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';

import Portfolio from './Portfolio';

describe('ResumeGenerator component', () => {
  it('renders without crashing', () => {
    render(<Portfolio />);
    // TODO Add expects
  });

  it('has the correct styling', () => {
    render(<Portfolio />);
    // TODO Add tests
  });
});
