import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import About from './About';

describe('About component', () => {
  it('renders without crashing', () => {
    render(<About />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('displays the correct content', () => {
    render(<About />);
    expect(
      screen.getByText(
        "I'm Nathan Levy, a Full-Stack Software Engineer with 5+ years of professional experience, based in Melbourne, Australia.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "My coding journey started at 13 with developing a video-game addon. Since then I've evolved into a lead developer working across diverse tech stacks and industries.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "I've built everything from fintech platforms and data pipelines to custom surveying applications, using technologies like React, Node.js, Python, AWS, and PostgreSQL.",
      ),
    ).toBeInTheDocument();
  });

  it('displays the headshot image', () => {
    render(<About />);
    const image = screen.getByAltText('Nathan Levy');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('headshot_short.png'));
  });

  it('has the correct layout', () => {
    render(<About />);
    const aboutSection = screen.getByText('About Me').closest('#about');
    expect(aboutSection).toBeInTheDocument();
    expect(aboutSection).toHaveStyle({
      display: 'flex',
      flexDirection: 'column',
    });
  });
});
