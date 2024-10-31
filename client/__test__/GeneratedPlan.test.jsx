import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import GeneratedPlan from '../src/components/GeneratedPlan';
import { useUser } from '../src/context/UserContext';

// Mock the useUser hook from the UserContext
vi.mock('../src/context/UserContext', () => ({
    useUser: vi.fn(),
}));

describe('GeneratedPlan Component', () => {
    it('renders Empty component when no user is present', () => {
        // Mock useUser to return no user
        useUser.mockReturnValue({
            user: null,
        });

        render(<GeneratedPlan />);
        
        expect(screen.getByText(/No plan available. Please generate your conception plan to view it here./i)).toBeTruthy();
    });


    it('renders the generated plan when user has a plan', () => {
        const mockUser = {
            name: 'Jane Doe',
            email: 'jane@example.com',
            plan: {
                generated_plan: {
                    title: 'My Conception Plan',
                    timeline: '6 months',
                    steps: [
                        {
                            title: 'Consult Doctor',
                            timeframe: 'Month 1',
                            sub_steps: ['Book an appointment', 'Discuss family history'],
                        },
                        {
                            title: 'Health Check-Up',
                            timeframe: 'Month 2',
                            sub_steps: ['Complete necessary tests', 'Follow doctor’s recommendations'],
                        },
                    ],
                },
            },
        };

        // Mock useUser to return a user with a plan
        useUser.mockReturnValue({
            user: mockUser,
        });

        render(<GeneratedPlan />);

        //check if the generated plan is rendered
        expect(screen.getByText(/My Conception Plan/i)).toBeTruthy();
        expect(screen.getByText(/Timeline:/i)).toBeTruthy();
        expect(screen.getByText(/6 months/i)).toBeTruthy();
        expect(screen.getByText(/Step 1: Consult Doctor/i)).toBeTruthy();
        expect(screen.getByText(/Step 2: Health Check-Up/i)).toBeTruthy();
        expect(screen.getByText(/Book an appointment/i)).toBeTruthy();
        expect(screen.getByText(/Discuss family history/i)).toBeTruthy();
    });
});
