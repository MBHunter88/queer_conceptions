import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import ResourceLibrary from '../src/pages/ResourceLibrary'

describe('Resource Library', () => {
    it('renders the title and page content correctly', () => {
      render(
        <MemoryRouter>
          <ResourceLibrary />
        </MemoryRouter>);
  
  
      expect(screen.getAllByText(/Resources/i)).toBeTruthy();
      expect(screen.getByText(/Our Resource Library is here to support you/i)).toBeTruthy();   
    });

    it('renders list of resources', () => {
        const resourceTitles = [
            "Family Equality",
            "Modern Fertility",
            "Queering Reproductive Justice: A Mini Toolkit",
            "Pride Angel",
            "Our Family Coalition",
            "The Center for Reproductive Rights",
            "Resolve: The National Infertility Association",
          ];

          resourceTitles.forEach((title) => {
            expect(screen.getAllByText(new RegExp(title, 'i'))).toBeTruthy();
          });
    })
  
  });