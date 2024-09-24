
# User Authentication and Profile Management

This project is a web application that allows users to sign up, sign in, and access their profile pages. It utilizes a full-stack approach with a separate backend built with Express.js and a frontend developed using Next.js.

## Project Structure

The project consists of two main parts:

- **Backend**: 
  - Built with **Express.js** for handling server requests and authentication.
  - Utilizes **MongoDB** for database management.
  - Implements **JWT (JSON Web Tokens)** for secure user authentication.
  
- **Frontend**: 
  - Developed using **Next.js**, a React framework for building server-rendered applications.
  - Contains user interfaces for registration, sign-in, and viewing profiles.
  - Utilizes **TailwindCSS** for styling.

## Features

- **User Registration**: Users can create an account with a unique username and password.
- **User Login**: Users can sign in to access their accounts.
- **Profile Management**: Users can view their profile pages after logging in.
- **Token-based Authentication**: Secure authentication using JWT.
- **Middleware Protection**: Middleware checks for valid JWT tokens to protect profile routes from unauthorized access.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (Recommended: LTS version)
- **MongoDB** (or access to a MongoDB Atlas instance)

### Installation

1. **Clone the repository**:
   - git clone https://github.com/yourusername/your-repo-name.git
   - cd your-repo-name

2. **Install the dependencies for both the frontend and backend**:
   - For the backend:
     - cd backend
     - npm install
   - For the frontend:
     - cd ../frontend
     - npm install

3. **Set up environment variables**:
   - Create a `.env.local` file in the **backend** directory with the following content:
     - PORT=your_port
     - MONGO_URL=your_mongo_url
     - SECRET_KEY=your_jwt_secret_key
     - NODE_ENV="production"

4. **Running the Application Locally**:
   - Navigate to the backend directory:
     - cd backend
   - Start the backend server:
     - npm run dev
   - The backend should be running on `http://localhost:your_port` (replace `your_port` with the port you specified).
   
   - Navigate to the frontend directory:
     - cd ../frontend
   - Start the frontend server:
     - npm run dev
   - The frontend should then be accessible at `http://localhost:3000`.

## Accessing the Application

Open your browser and navigate to `http://localhost:3000`, where you can:
- Register a new user account.
- Log in to access the profile page.
