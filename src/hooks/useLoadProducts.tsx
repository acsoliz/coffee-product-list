import { useEffect } from "react";
import { useZustandProductState } from '../state/implementations/ZustandProductState';

export const useLoadProducts = () => {
  const productState = useZustandProductState();

  useEffect(() => {
    productState.loadProducts();
  }, []);

  return productState;
};