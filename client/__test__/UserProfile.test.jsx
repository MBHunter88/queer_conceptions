import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import { useUser } from '../src/context/UserContext'; 
import UserProfile from '../src/pages/UserProfile';


// Mock the useUser hook
vi.mock('../src/context/UserContext', () => ({
  useUser: vi.fn(),
}));

describe('UserProfile Component', () => {
  it('renders "Please log in to view your profile" when user is not logged in', () => {
    //user set to null
    useUser.mockReturnValue({
      user: null,
      setUser: vi.fn(),
      login: vi.fn(),
      logout: vi.fn(),
    });

    render(
      <MemoryRouter>
        <UserProfile />
      </MemoryRouter>
    );

    expect(screen.getByText(/Please log in to view your profile/i)).toBeTruthy();
  });

  it('renders user profile when user is logged in', () => {
    const mockUser = {
      name: 'Jane Doe',
      pronouns: 'she/her',
      email: 'jane@example.com',
      location: 'Test Location',
      family_structure: 'Single',
      age: 30,
      has_partner: false,
    };

  //use mock user for assertation
    useUser.mockReturnValue({
      user: mockUser,
      setUser: vi.fn(),
      login: vi.fn(),
      logout: vi.fn(),
    });

    render(
      <MemoryRouter>
        <UserProfile />
      </MemoryRouter>
    );

   
    expect(screen.getByText(/Welcome Jane Doe/i)).toBeTruthy();
    expect(screen.getByText(/Email: jane@example.com/i)).toBeTruthy();
    expect(screen.getByText(/Location: Test Location/i)).toBeTruthy();
    expect(screen.getByText(/Family Building Plan: Single/i)).toBeTruthy();
    expect(screen.getByText(/Age: 30/i)).toBeTruthy();
  });
});
