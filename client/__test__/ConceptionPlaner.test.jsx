import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import ConceptionPlanner from '../src/pages/ConceptionPlanner';
import { useUser } from '../src/context/UserContext';

vi.mock('../src/context/UserContext', () => ({
    useUser: vi.fn(),
  }));
  
  describe('ConceptionPlanner Component', () => {
    it('renders the main title and introductory text', () => {
      // Mock useUser to provide a user object or null
      useUser.mockReturnValue({
        user: null,
        setUser: vi.fn(),
        login: vi.fn(),
        logout: vi.fn(),
      });
  
      render(
        <MemoryRouter>
          <ConceptionPlanner />
        </MemoryRouter>
      );
  
      // Check if the main title and description text are rendered
      expect(screen.getByText(/Planning Starts Here.../i)).toBeTruthy();
      expect(screen.getByText(/Let's start building your personalized conception plan/i)).toBeTruthy();
    });
  
    it('renders the PlanForm component when user is logged in', () => {
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
         <ConceptionPlanner/>
        </MemoryRouter>
      );
  
      const startButton = screen.getAllByRole('button', { name: /Start Conception Plan/i });
      fireEvent.click(startButton[0]);
     
      expect(screen.findByTestId('plan-form')).toBeTruthy();
    });
  });