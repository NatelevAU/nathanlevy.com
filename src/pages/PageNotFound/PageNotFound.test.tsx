import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import PageNotFound from './PageNotFound';

// Mock react-ga
vi.mock('react-ga', () => ({
  default: {
    pageview: vi.fn(),
  },
}));

// Mock react-helmet
vi.mock('react-helmet', () => {
  const FakeHelmet = ({ children }: { children: React.ReactNode }) => (
    <div data-testid="helmet">{children}</div>
  );
  FakeHelmet.defaultProps = {};
  return { default: FakeHelmet, Helmet: FakeHelmet };
});

describe('PageNotFound component', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <PageNotFound />
      </BrowserRouter>,
    );
    expect(screen.getByRole('heading', { name: 'Page Not Found' })).toBeInTheDocument();
  });

  it('displays the correct image', () => {
    render(
      <BrowserRouter>
        <PageNotFound />
      </BrowserRouter>,
    );
    const image = screen.getByAltText('Page Not Found Background');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('PageNotFound.gif'));
  });

  it('contains a home button', () => {
    render(
      <BrowserRouter>
        <PageNotFound />
      </BrowserRouter>,
    );
    const homeButton = screen.getByRole('button', { name: /home/i });
    expect(homeButton).toBeInTheDocument();
    expect(homeButton.closest('a')).toHaveAttribute('href', '/');
  });

  it('sets the correct meta tags', () => {
    render(
      <BrowserRouter>
        <PageNotFound />
      </BrowserRouter>,
    );
    const helmet = screen.getByTestId('helmet');
    expect(helmet).toContainHTML('<title>Page Not Found</title>');
    expect(helmet).toContainHTML('<meta name="robots" content="noindex" />');
  });
});
