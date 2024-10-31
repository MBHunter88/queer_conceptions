import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PrivacyPolicy from '../src/pages/PrivacyPolicy';

describe('PrivacyPolicy Component', () => {
  it('renders the main heading and link to third-party', () => {
    // Render the PrivacyPolicy component
    render(<PrivacyPolicy />);

    expect(screen.getAllByRole('heading', { name: /Privacy Policy/i })).toBeTruthy();

    //check if specific text is rendered
    expect(screen.getByText(/At Queer Conceptions, we take your privacy seriously/i)).toBeTruthy();
    expect(screen.getByText(/The information provided by Queer Conceptions is intended to support your family-building journey/i)).toBeTruthy();
    expect(screen.getByText(/If you have any questions about how your data is used/i)).toBeTruthy();

    //check if the link to OpenAI's privacy policy is present
    const linkElement = screen.getByRole('link', { name: /Privacy Policy/i });
    expect(linkElement).toBeTruthy();
  });
});
