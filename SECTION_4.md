## Task: Multi-Language Support

### High-Level Architectural Approach

1. **Centralized Translation Management**:
Move all hardcoded text into a centralized translation file or database. This allows for easy management and updates of translations without modifying the codebase.
Use a key-value pair system where each piece of text is associated with a unique key (e.g., welcome_message).

2. **Dynamic Language Switching**: 
Implement a language selector in the application that allows users to switch between languages dynamically.
Store the user's language preference (e.g., in local storage, cookies, or a user profile).


3. **Optimize the operation of Dynamic Language switching using a library**: 
Use a library that is responsible for organizing the user's translations, optimizing the loading of the text dictionary of the language selected by the user.


### Technologies or Libraries

- **react-i18next**: A powerful internationalization framework for React that provides easy integration and management of translations.
- **i18next**: The core library that `react-i18next` is built on, providing extensive features for managing translations.



### Example Implementation of a Simple Translation Mechanism

1. Create dictionaries of the texts used in the application for each language you want to implement, for example:

```typescript
// constants.en.ts
export const constants = {
    welcome_message: "Welcome to our application!",
    login_button: "Login"
}

// constants.es.ts
export const constants = {
    welcome_message: "¡Bienvenido a nuestra aplicación!",
    login_button: "Iniciar sesión"
}
```

2. Implement the constants in the components that use text to be displayed to the user.

```typescript
// component.ts
import constants from 'constants.ts'

export function Component() {
    return <h1>{constants.welcome_message}</h1>;
}
```

3. Implement a language selector in the application that allows users to switch between languages dynamically.

4. Use a library that is responsible for organizing the user's translations, optimizing the loading of the text dictionary of the language selected by the user..
