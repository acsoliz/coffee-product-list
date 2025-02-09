// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import { CoffeeList } from '../../src/components';
import { AdminContext } from '../../src/state/AdminContext';

describe('CoffeeList Component', () => {
  const mockProducts = [
    {
      id: '1',
      name: 'Café Espresso',
      description: 'Fuerte y aromático',
      price: 5,
      imageUrl: 'http:www.test-url.com',
    },
    {
      id: '2',
      name: 'Café Latte',
      description: 'Suave y cremoso',
      price: 4,
      imageUrl: 'http:www.test-url.com',
    },
  ];

  test('Display product list correctly', () => {
    render(
      <CoffeeList products={mockProducts} onEdit={vi.fn()} onDelete={vi.fn()} />
    );

    expect(screen.getByText('Café Espresso')).toBeInTheDocument();
    expect(screen.getByText('Café Latte')).toBeInTheDocument();
  });

  test('Executes the delete function when Delete is clicked', () => {
    const deleteMock = vi.fn();

    render(
      <AdminContext.Provider value={{ isAdmin: true }}>
        <CoffeeList
          products={mockProducts}
          onEdit={vi.fn()}
          onDelete={deleteMock}
        />
      </AdminContext.Provider>
    );

    fireEvent.click(screen.getAllByText('Delete')[0]); // Click the delete button of the first product

    expect(deleteMock).toHaveBeenCalledWith('1');
  });
});
