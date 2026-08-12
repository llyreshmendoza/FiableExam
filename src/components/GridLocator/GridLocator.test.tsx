import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GridLocator } from './GridLocator';

describe('GridLocator', () => {
  it('renders a 5x5 grid (25 cells)', () => {
    render(<GridLocator placement="1,1 NORTH" />);
    const cells = screen.getAllByTestId(/^cell-\d-\d$/);
    expect(cells).toHaveLength(25);
  });

  it('renders the marker at the South-West origin (0,0)', () => {
    render(<GridLocator placement="0,0 NORTH" />);
    const cell = screen.getByTestId('cell-0-0');
    expect(cell).toContainElement(screen.getByTestId('marker'));
  });
});