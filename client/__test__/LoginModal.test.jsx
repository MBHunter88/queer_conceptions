import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import LoginModal from '../src/components/LoginModal';
import { useUser } from '../src/context/UserContext';
import { useModal } from '../src/context/ModalContext';

// Mocking the contexts used in LoginModal
vi.mock('../src/context/UserContext', () => ({
  useUser: vi.fn(),
}));

vi.mock('../src/context/ModalContext', () => ({
  useModal: vi.fn(),
}));

describe('LoginModal Component', () => {
  let loginMock;
  let closeLoginModalMock;

  beforeEach(() => {
    loginMock = vi.fn();
    closeLoginModalMock = vi.fn();

    useUser.mockReturnValue({
      login: loginMock,
    });

    useModal.mockReturnValue({
      isLoginModalOpen: true,
      closeLoginModal: closeLoginModalMock,
    });

    global.fetch = vi.fn();

    let store = {};
  global.localStorage = {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };

    // Mock console.error to be able to track error messages in the tests
    vi.spyOn(global.console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore console.error after each test
    global.console.error.mockRestore();
  });

  it('renders login modal when open', () => {
    render(<LoginModal />);
    expect(screen.getByText(/Please enter your login info below/i)).toBeTruthy();
    expect(screen.getByLabelText(/Email/i)).toBeTruthy();
    expect(screen.getByLabelText(/Password/i)).toBeTruthy();
  });

  it('displays error message when login fails', async () => {
    // Mock fetch response for failed login
    global.fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: 'Invalid credentials' }),
    });

    render(<LoginModal />);

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: 'wrongpassword' },
    });

    const loginButton = screen.getAllByRole('button', { name: /Login/i })
    fireEvent.click(loginButton[0]);

    await waitFor(() => {
      expect(loginMock).not.toHaveBeenCalled();
      expect(closeLoginModalMock).not.toHaveBeenCalled();
      expect(global.console.error).toHaveBeenCalledWith('Login failed:', 'Invalid credentials');
    });
  });
});
