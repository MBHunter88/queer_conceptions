import React, { useState } from 'react';
import { render, screen, fireEvent, waitFor, renderHook, act} from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import PlanForm from '../src/components/PlanForm';
import { useUser } from '../src/context/UserContext';

// Mock Ant Design's Modal
vi.mock('antd', async () => {
    const actual = await vi.importActual('antd');
    return {
      ...actual,
      Modal: {
        ...actual.Modal,
        warning: ({ content, onOk }) => {
          const ConfirmModal = ({ onOk }) => (
            <div data-testid="modal-content">
              <p>{content}</p>
              <button onClick={onOk}>OK</button>
            </div>
          );
          render(<ConfirmModal onOk={onOk} />);
        },
      },
    };
  });

  // Mock fetch to simulate different responses
global.fetch = vi.fn();

vi.mock('../src/context/UserContext', () => ({
  useUser: vi.fn(),
}));

describe('PlanForm Component', () => {
  it('renders "Start Conception Plan" button when no plan is present', () => {
    // Mock useUser with no plan and a logged-in user
    useUser.mockReturnValue({
      user: {
        user_id: '1',
        age: 30,
        location: 'Test Location',
        family_structure: 'Single',
        has_partner: false,
        plan: null, 
      },
    });

    render(
      <MemoryRouter>
        <PlanForm />
      </MemoryRouter>
    );

    expect(screen.getByRole('button', { name: /Start Conception Plan/i })).toBeTruthy();
  });


  it('displays a warning modal if "Start Conception Plan" is clicked and no user is logged in', async () => {
    // Mock useUser with no logged-in user
    useUser.mockReturnValue({
      user: null,
    });

  render(
      <MemoryRouter>
        <PlanForm />
      </MemoryRouter>
    );

    // Click on "Start Conception Plan"
    const startPlan = screen.getAllByRole('button', { name: /Start Conception Plan/i })
    fireEvent.click(startPlan[1]);

    await waitFor(() => {
        const modalContent = screen.getByTestId('modal-content');
        expect(modalContent).toBeTruthy();
        expect(screen.getByText(/Please sign up or login to generate your conception plan/i)).toBeTruthy();
    });
  });

  it('renders the generated plan when the plan is created', () => {
    // Mock useUser with a user and a generated plan
    useUser.mockReturnValue({
      user: {
        user_id: '1',
        age: 30,
        location: 'Test Location',
        family_structure: 'Single',
        has_partner: false,
        plan: {
          generated_plan: {
            title: 'My Conception Plan',
            timeline: '6 months',
            steps: [
              {
                title: 'Step 1',
                timeframe: 'Week 1',
                sub_steps: ['Do this', 'Then do that'],
              },
            ],
          },
        },
      },
    });

    render(
      <MemoryRouter>
        <PlanForm />
      </MemoryRouter>
    );

    // Verify that the generated plan is rendered
    expect(screen.getByText(/My Conception Plan/i)).toBeTruthy();
    expect(screen.getByText(/Timeline:/i)).toBeTruthy();
    expect(screen.getByText(/6 months/i)).toBeTruthy();
  });
});
