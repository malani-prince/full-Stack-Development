# Task Manager

Task Manager is a simple project for managing tasks. It is built using Node.js and follows the MVC (Model-View-Controller) architecture.

## How I Built This Project

1. **Create the Initial App:**
   - Create the `app.js` file as the main entry point for the application.

2. **Initialize the Project:**
   - Open the terminal and run the following command to create the `package.json` file:
     ```bash
     npm init
     ```

3. **Download Dependencies:**
   - Download the necessary modules using npm:
     ```bash
     npm install dotenv express mongoose morgan nodemon
     ```
     Dependencies:
     - `dotenv`: "^16.3.1"
     - `express`: "^4.18.2"
     - `mongoose`: "^8.0.3"
     - `morgan`: "^1.10.0"
     - `nodemon`: "^3.0.2"

4. **Set the Start Command:**
   - Set the start command in `package.json` to use nodemon:
     ```json
     "scripts": {
       "start": "nodemon app.js"
     }
     ```

5. **Start the Project:**
   - Run the following command in the terminal:
     ```bash
     npm start
     ```

6. **Project Structure:**
   - Import dependencies and continue with the MVC architecture.
   - Create folders for `controller` and `routes`.

7. **Routes and Controllers:**
   - In the `routes.js` file, define different routes.
   - In the `controller` folder, create controllers for each route.

8. **Middleware for Error Handling:**
   - Create middleware for handling errors, using try-catch blocks and path errors.
   - Import the middleware into `app.js`.
   - Implement an error handler to manage errors.
