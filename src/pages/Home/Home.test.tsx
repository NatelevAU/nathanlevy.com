import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import Home from './Home';

// Mock react-ga
vi.mock('react-ga', () => ({
  default: {
    pageview: vi.fn(),
  },
}));

// Mock the config values
vi.mock('../config/Config', () => ({
  emailAddress: 'test@example.com',
  githubUrl: 'https://github.com/test',
  linkedinUrl: 'https://linkedin.com/in/test',
}));

describe('Home component', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText('Nathan Levy')).toBeInTheDocument();
  });

  it('displays the correct subtitle', () => {
    render(<Home />);
    expect(screen.getByText(/Software Engineer|Web Developer|Dog Lover/)).toBeInTheDocument();
  });

  it('contains social media buttons', () => {
    render(<Home />);
    expect(screen.getByTestId('GitHubIcon')).toBeInTheDocument();
    expect(screen.getByTestId('LinkedInIcon')).toBeInTheDocument();
    expect(screen.getByTestId('EmailIcon')).toBeInTheDocument();
  });

  it('displays the workstation image', () => {
    render(<Home />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', expect.stringContaining('workstation'));
  });
});
