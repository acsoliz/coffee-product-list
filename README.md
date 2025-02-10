# Coffee Product List

Implemented in React, this project renders a list of products (diferents types of coffee).

## Main Description
Coffee Product List is a web application developed in React that allows users to add, edit and delete coffee products. Products are stored in LocalStorage for data persistence.


## Stack
- **React 18**: Main library for UI
- **Zustand**: Global state management 
- **Tailwind CSS**: Optimized style and responsive design
- **Ant Design**: Prebuilt UI componentes 
- **Vite**: Fast and efficient build
- **TypeScript**: Static typing for robustness
- **Vitest + Testing Library**: Unit and integration testing
- **ESLint y Prettier**: Clean and standardized code maintenance


## Documentation outlining design choices and test strategy

## Application design
This section outlines the design approach taken for the application, detailing the organization of components and the rationale behind design decisions.


### Product Management
The application allows users to add, edit, and delete coffee products. This functionality is managed through a combination of React components and Zustand for state management.

### Data Persistence
LocalStorage is used to persist product data between sessions. When the application loads, it checks for existing products in LocalStorage and loads them. If no products are found, default products are loaded.

### Global State using Zustand
Zustand manages the product list efficiently and allows easy expansion for future improvements (e.g. external API).

### Modern and Responsive Interface
- **Ant Design**: Provides an attractive and accessible UI.
- **Tailwind CSS**: Used for custom styles.

## Unit Test Implementation

### Tools Used
- **Vitest**: Fast and modern testing framework.
- **React Testing Library**: User interaction simulation.


### Testing Strategy
The main components, hooks, and views are tested to ensure the application functions correctly and to prevent unexpected errors. This includes testing the rendering of components, the functionality of hooks, and the overall behavior of views.


Main components, hooks and views are tested to ensure correct execution of the application and avoid unexpected errors.

### Test examples
- **CoffeeList test**
  - ✔ Check that product list renders correctly.
  - ✔ Confirm that the "Delete" button calls the correct function.

- **CoffeeForm test**
  - ✔ Correctly render form fields.
  - ✔ Call the onSave function with the correct data when submitting the form.

- **Hook useLoadProducts test**
  - ✔ Check correct load products from localStorage
  - ✔ Check that default products are loaded if localStorage is empty


- **Main view test**
  - ✔ Render without errors

## How to Execute the Project

### Clone the Repository

```sh
git clone https://github.com/acsoliz/coffee-product-list.git

```

### Access the project folder

```sh 
cd coffee-product-list

```

### Install Dependencies

```sh
npm install

```

### Run in Development Mode

```sh
npm run dev

```

### Run tests

```sh
npm run test

```
