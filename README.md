# Boar's Head Food Inventory Management System

A full-stack web application for managing food inventory with real-time stock tracking and an intuitive user interface.

## Overview

This application allows users to manage their food inventory by tracking items, categorizing them by availability, and maintaining detailed information about each product. This also has a display mode which allows all items out of stock to be shown on a screen for customer to see what items are out of stock. Built with modern React frontend and a RESTful API backend.

## Features

- **Real-time Inventory Management**: Add, edit, and delete food items with instant updates
- **Stock Status Tracking**: Easily move items between "In Stock" and "Out of Stock" categories
- **Display View**: Alternative view for displaying inventory items
- **Persistent Storage**: MongoDB database for reliable data persistence
- **Responsive Design**: Modern, user-friendly interface built with React
- **RESTful API**: Clean backend architecture with Express.js

## UI

<img width="713" height="449" alt="homePage" src="https://github.com/user-attachments/assets/b9d8f3fa-27c7-4b85-918a-6dddc2245c66" />

<img width="713" height="449" alt="addFood" src="https://github.com/user-attachments/assets/f2bc9751-f956-41f1-8b5c-17ec60267b10" />

<img width="713" height="449" alt="displayPage" src="https://github.com/user-attachments/assets/7f5b9e7e-a10e-4efe-a35e-4e43caea4314" />


## Technologies Used

### Frontend

- **React** - UI framework
- **Vite** - Build tool and development server
- **React Router** - Client-side routing
- **FontAwesome** - Icon library
- **CSS3** - Custom styling

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Development Tools

- **ESLint** - Code linting
- **CORS** - Cross-origin resource sharing

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/KSanders04/Boars-Head-Food-Inventory.git
   cd Project4
   ```

2. **Install root dependencies**

   ```bash
   npm install
   ```

3. **Install backend dependencies**

   ```bash
   cd backend
   npm install
   ```

4. **Install frontend dependencies**

   ```bash
   cd ../frontend
   npm install
   ```

5. **Configure MongoDB**
   - Ensure MongoDB is running locally on port 27017, or
   - Update the `MONGO_URI` in `backend/server.js` to point to your MongoDB Atlas cluster

## Running the Application

### Start the Backend Server

```bash
cd backend
npm start
```

The server will run on `http://localhost:3000`

### Start the Frontend Development Server

```bash
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal)

## Project Structure

```
Project4/
├── backend/
│   ├── models/
│   │   └── Item.js          # Mongoose schema for food items
│   ├── server.js            # Express server and API routes
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API service layer
│   │   ├── App.jsx          # Main application component
│   │   └── main.jsx         # Application entry point
│   ├── index.html
│   └── package.json
└── README.md
```

## API Endpoints

- `GET /api/items` - Retrieve all food items
- `GET /api/items/:id` - Retrieve a specific food item
- `POST /api/items` - Create a new food item
- `PUT /api/items/:id` - Update an existing food item
- `DELETE /api/items/:id` - Delete a food item

## Key Features Implemented

- **Component-based Architecture**: Modular React components for maintainability
- **State Management**: React hooks (useState, useEffect) for efficient state handling
- **Async Operations**: Proper handling of asynchronous API calls
- **Error Handling**: Comprehensive error handling on both client and server
- **Code Quality**: ESLint configuration for consistent code standards

## Future Enhancements

- User authentication and authorization
- Search and filter functionality
- Expiration date tracking
- Barcode scanning integration
- Mobile app version
- Export data to CSV/PDF
