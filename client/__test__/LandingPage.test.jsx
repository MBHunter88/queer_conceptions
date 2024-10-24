import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage';
import { describe, it, expect } from 'vitest';


describe('LandingPage Component', () => {
  it('renders the landing page content correctly', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>);


    expect(screen.getAllByText(/Queer Conceptions/i)).toBeTruthy();
    expect(screen.getByRole('link', { name: /Start here/i })).toBeTruthy();
    expect(screen.getByRole('link', { name: /Explore/i })).toBeTruthy();
  });

});