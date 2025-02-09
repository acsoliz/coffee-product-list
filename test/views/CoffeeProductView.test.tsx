// @ts-nocheck
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { CoffeeProductView } from "../../src/views/CoffeeProductView";
import { ProductStateContext } from "../../src/state/ProductStateContext";

/* simulating the useModal hook */
vi.mock("../src/hooks/useModal", () => ({
  useModal: () => ({
    isModalVisible: false,
    editingProduct: null,
    showModal: vi.fn(),
    hideModal: vi.fn(),
    setEditingProduct: vi.fn(),
  }),
}));

describe("CoffeeProductView Component", () => {
  test("Render without errors", () => {
    render(
      <ProductStateContext.Provider value={{ products: [], deleteProduct: vi.fn() }}>
        <CoffeeProductView />
      </ProductStateContext.Provider>
    );

    expect(screen.getByRole("heading", { name: /coffee-shop/i })).toBeInTheDocument();
  });
});
