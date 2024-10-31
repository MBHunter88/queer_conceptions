import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import ChatPage from '../src/pages/ChatPage';
import { useUser } from '../src/context/UserContext';

// Mock the useUser hook
vi.mock('../src/context/UserContext', () => ({
    useUser: vi.fn(),
  }))

describe('ChatPage Component', () => {
    it('renders the page title and introductory text and chat now button with no logged in user', () => {
        //user set to null
        useUser.mockReturnValue({
          user: null,
          setUser: vi.fn(),
          login: vi.fn(),
          logout: vi.fn(),
        });
    
        render(
          <MemoryRouter>
            <ChatPage />
          </MemoryRouter>
        );
    
        expect(screen.getAllByText(/Virtual Doula/i)).toBeTruthy();
        const chatNowButton = screen.getByRole('button', { name: /Chat Now/i });
        expect(chatNowButton).toBeTruthy();
      });;

  it('renders the Chatbot component when user is logged in', () => {
    const mockUser = {
      name: 'Jane Doe',
      pronouns: 'she/her',
      email: 'jane@example.com',
      location: 'Test Location',
      family_structure: 'Single',
      age: 30,
      has_partner: false,
    };

    useUser.mockReturnValue({
        user: mockUser,
        setUser: vi.fn(),
        login: vi.fn(),
        logout: vi.fn(),
      });

     render(
    <MemoryRouter>
    <ChatPage />
    </MemoryRouter>
);

    // Check if the Chatbot component is rendered
    expect(screen.getByPlaceholderText(/Ask me anything/i)).toBeTruthy();
  });
});
