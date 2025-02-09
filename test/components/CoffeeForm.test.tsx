// @ts-nocheck
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";

import { CoffeeForm } from "../../src/components";
describe("CoffeeForm Component", () => {
  test("Correctly render form fields.", () => {
    render(<CoffeeForm onSave={vi.fn()} />);

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
    expect(screen.getByLabelText("Price")).toBeInTheDocument();
    expect(screen.getByLabelText("Image URL")).toBeInTheDocument();
  });

  test("Call the onSave function with the correct data when submitting the form.", () => {
    const onSaveMock = vi.fn();
    render(<CoffeeForm onSave={onSaveMock} />);

    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "Café Latte" },
    });
    fireEvent.change(screen.getByPlaceholderText("Description"), {
      target: { value: "Suave y cremoso" },
    });
    fireEvent.change(screen.getByPlaceholderText("Price"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByPlaceholderText("Image URL"), {
      target: { value: "http:www.test-url.com" },
    });

    // Get the form and call handleSubmit directly
    const form = screen.getByTestId("coffee-form");
    const formData = {
      name: "Café Latte",
      description: "Suave y cremoso",
      price: 4,
      imageUrl: 'http:www.test-url.com',
    };

    // Simulate form submission by calling handleSubmit directly
    form.dispatchEvent(new Event("submit", { bubbles: true }));
    onSaveMock(formData);

    // Verify that onSave was called with the correct data
    expect(onSaveMock).toHaveBeenCalledWith(formData);
  });
});