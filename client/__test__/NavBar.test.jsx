import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '../src/components/NavBar';
import { useUser } from '../src/context/UserContext';
import { useModal } from '../src/context/ModalContext';

vi.mock('../src/context/UserContext', () => ({
    useUser: vi.fn(),
}));

vi.mock('../src/context/ModalContext', () => ({
    useModal: vi.fn(),
}));

describe('Navbar Component', () => {
    it('renders login and sign-up buttons when no user is logged in', () => {
        // Mock useUser to simulate no user logged in
        useUser.mockReturnValue({
            user: null,
            logout: vi.fn(),
        });

        // Mock useModal to handle modal states
        useModal.mockReturnValue({
            openSignUpModal: vi.fn(),
            openLoginModal: vi.fn(),
            isSignUpModalOpen: false,
            isLoginModalOpen: false,
            closeSignUpModal: vi.fn(),
            closeLoginModal: vi.fn(),
        });

        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        //checks if login and sign-up buttons are present
        expect(screen.getByRole('button', { name: /Login/i })).toBeTruthy();
        expect(screen.getByRole('button', { name: /Sign-Up/i })).toBeTruthy();
    });

    it('renders profile and logout buttons when user is logged in', () => {
        const mockUser = {
            name: 'Jane Doe',
            email: 'jane@example.com',
        };

        //Mock useUser to simulate a logged-in user
        useUser.mockReturnValue({
            user: mockUser,
            logout: vi.fn(),
        });

       
        useModal.mockReturnValue({
            openSignUpModal: vi.fn(),
            openLoginModal: vi.fn(),
            isSignUpModalOpen: false,
            isLoginModalOpen: false,
            closeSignUpModal: vi.fn(),
            closeLoginModal: vi.fn(),
        });

        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        //checks if profile and logout buttons are present
        expect(screen.getByText(/Welcome/i)).toBeTruthy();
        expect(screen.getByRole('button', { name: /Logout/i })).toBeTruthy();
    });
});
