# NextJS Authentication Template

This project provides a basic template for authentication in Next.js using Auth.js and MongoDB adapter. It includes methods for sign-in, sign-out, and authentication. Additionally, it offers a registration feature using MongoDB client. This template serves as a foundation to create the next stages of your web application.

## Features

- **Authentication**: Implemented with NextAuth.js for secure and efficient user authentication.
- **MongoDB Adapter**: Uses MongoDB as the database for storing user credentials and sessions.
- **Registration**: Includes a registration form with client-side validation using Zod and server-side processing.
- **User-Friendly UI**: Built with simple and clean UI components.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:

- NextJS
- AuthJs 
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**:
   ```
   git clone https://github.com/your-username/nextjs-auth-template.git
   cd nextjs-auth-template
2. **Install dependencies**:
   ```
   npm install
3. **Set up environment variables**:
   Create a .env.local file in the root directory and add your MongoDB connection string and other necessary environment variables.
   ```
   AUTH_SECRET=
   MONGODB_URI=
   NODE_ENV=development
5. **Run the development server**:
   ```
   npm run dev
**JWT token and session will be handled by AuthJs.**


5. **Usage**
  Register
    Navigate to the registration page to create a new user account.
    ```
    http://localhost:3000/register
  This will register user in db.

  Sign In
  ```
    http://localhost:3000/api/auth/signin
  ```
This page is default page provided by AuthJs. Similarly Signoutpage and signout api is handled by AuthJS.

  
