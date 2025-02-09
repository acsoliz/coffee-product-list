# Section 5: Security

## Task
Going back to our coffee product application, we want to add some security to it. What security elements would you add and why? Give some concrete examples of the tools or elements you could use.

## Deliverables

### List of Security Elements and Their Importance

1. **Authentication and Authorization**
    - **Why:** Ensures that only authorized users can access certain features or data.
    - **Example:** Use a basic system to access as admin in order to create and modify products.

2. **Data Encryption**
    - **Why:** Protects sensitive data both in transit and at localstorage.
    - **Example:** Use HTTPS for secure communication and Advanced Encryption Standard for encrypting stored data.

3. **Input Validation**
    - **Why:** Prevents malicious input that could lead to security vulnerabilities like SQL injection.
    - **Example:** Use libraries like Joi for input validation in JavaScript.

4. **Error monitoring system and breach attempts**
    - **Why:** Helps identify unhandled errors and attempts to breach administrator security.
    - **Example:** Use tools like Sentry, DeepSource or similar.

### Technologies or Libraries

1. **Login system**
    - For secure admin authentication and authorization.

2. **Cripto.js**
    - For secure encrypting data.

3. **Validation system**
    - For input validation to prevent malicious data entry.

4. **Sentry**
    - For get notifications in real-time of unhandled errors and attempts to breach administrator security.


By incorporating these security elements and technologies, we can ensure that our coffee product application is secure and protected against common threats.
