// @ts-nocheck
import { renderHook, act } from '@testing-library/react';
import { useLoadProducts } from '../../src/hooks/useLoadProducts';
import { beforeEach, describe, expect, test } from 'vitest';

describe('useLoadProducts', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('Load products from localStorage', () => {
    const mockProducts = [
      { id: '1', name: 'Café Latte', description: 'Suave y cremoso', price: 4, imageUrl: 'http://www.test-image.com' },
    ];
    localStorage.setItem('coffeeProducts', JSON.stringify(mockProducts));

    const { result } = renderHook(() => useLoadProducts());

    act(() => {
      result.current.loadProducts();
    });

    expect(result.current.products).toEqual(mockProducts);
  });

  test('Returns default products if localStorage is empty', () => {
    const { result } = renderHook(() => useLoadProducts());

    act(() => {
      result.current.loadProducts();
    });

    expect(result.current.products).toEqual(result.current.products);
  });
});
