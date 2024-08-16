import { render, screen } from '@testing-library/react';
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
      screen.getByText("I'm Nathan Levy, a Software Engineer based in Melbourne, Australia."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("I've been coding since I was 13, when I created my own Minecraft plugin."),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Since then, I've launched websites, created games, developed APIs, and more!",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Recently, I've been focusing on full-stack web development."),
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
