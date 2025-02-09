/**************************************************************************
 * The main application component that sets up the product state context
 * and renders the CoffeeProductView component.
 *
 * @returns {React.FC} The main application component.
 **************************************************************************/

import React from 'react';
import { CoffeeProductView } from './views';
import { ProductStateContext } from './state/ProductStateContext';
import { useLoadProducts } from './hooks';
import { AdminProvider } from './state/AdminContext';

const App: React.FC = () => {
  const productState = useLoadProducts();
  return (
    <AdminProvider>
      <ProductStateContext.Provider value={productState}>
        <div className="min-h-screen text-gray-900 bg-gray-800">
          <CoffeeProductView />
        </div>
      </ProductStateContext.Provider>
    </AdminProvider>
  );
};

export default App;
