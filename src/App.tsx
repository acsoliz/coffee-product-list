/**
 * The main application component that sets up the product state context and renders the CoffeeProductView component.
 *
 * @returns {React.FC} The main application component.
 */

import React from "react";
import { CoffeeProductView } from "./views";
import { ProductStateContext } from "./state/ProductStateContext";
import { useLoadProducts } from "./hooks";

const App: React.FC = () => {
  const productState = useLoadProducts();
  return (
    <ProductStateContext.Provider value={productState}>
      <div className="min-h-screen text-gray-900 bg-blue-500">
        <CoffeeProductView />
      </div>
    </ProductStateContext.Provider >
  );
};

export default App;
