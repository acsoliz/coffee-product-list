// @ts-nocheck
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { CoffeeProductView } from "../../src/views/CoffeeProductView";
import { ProductStateContext } from "../../src/state/ProductStateContext";

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
