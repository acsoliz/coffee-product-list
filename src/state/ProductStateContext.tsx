import { createContext, useContext } from "react";
import { ProductState } from "../models/ProductState";

export const ProductStateContext = createContext<ProductState | null>(null);

/*
 * Custom hook to access global state
*/
export const useProductState = () => {
  const context = useContext(ProductStateContext);
  if (!context) {
    throw new Error("useProductState must be used within a ProductStateProvider");
  }
  return context;
};