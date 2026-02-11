# Aarixa Innovix Website

A modern, high-performance website for Aarixa Innovix built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Three.js**.

## Features

- **3D Interactions**: Floating background shapes, tilt-effect cards, and 3D buttons.
- **Animations**: Smooth page transitions and scroll-triggered reveals.
- **Glassmorphism**: Premium frosted glass UI design.
- **Dark/Light Mode**: Fully supported theme switching.
- **Backend API**: Node.js/Express server for handling contact form submissions.

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation

1.  **Install Frontend Dependencies**:
    ```bash
    cd client
    npm install
    ```

2.  **Install Backend Dependencies**:
    ```bash
    cd server
    npm install
    ```

### Running the App

You need to run both the frontend and backend servers.

1.  **Start Backend** (Terminal 1):
    ```bash
    cd server
    npm run dev
    ```
    Runs on `http://localhost:3001`

2.  **Start Frontend** (Terminal 2):
    ```bash
    cd client
    npm run dev
    ```
    Runs on `http://localhost:5173`

## Project Structure

- `client/`: React frontend application
  - `src/components`: Reusable UI components (Navbar, Footer, 3D elements)
  - `src/pages`: Page components (Home, About, Services, Contact)
- `server/`: Express backend application
  - `index.js`: API server entry point
