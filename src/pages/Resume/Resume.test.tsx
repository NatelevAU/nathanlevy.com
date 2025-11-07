import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import Resume from './Resume';

describe('Resume component', () => {
  it('renders without crashing', () => {
    render(<Resume />);
    const iframe = screen.getByTitle('Resume');
    expect(iframe).toBeInTheDocument();
  });

  it('has the correct src attribute', () => {
    render(<Resume />);
    const iframe = screen.getByTitle('Resume');
    expect(iframe).toHaveAttribute('src', expect.stringContaining('registry.jsonresume.org'));
  });

  it('has the correct styling', () => {
    render(<Resume />);
    const iframe = screen.getByTitle('Resume');
    const styles = getComputedStyle(iframe);

    expect(styles.width).toBe('100%');
    expect(styles.height).toBe('100%');
    expect(styles.border).toBe('');
  });
});
