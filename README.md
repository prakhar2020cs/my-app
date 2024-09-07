# Dynamic Availability and Scheduling App

This web-based application allows users to dynamically input their availability for specific days and times. Admins can view user availability and schedule sessions based on that availability, managing one-on-one or multi-participant sessions.

## Features

1. **User Availability Management**:
   - Users can log in and set their availability for specific days of the week.
   - Availability can be set in flexible intervals (e.g., 30 minutes or hourly).
   - Users can add, update, or delete availability slots easily.
   - Visual calendar interface for managing and displaying availability.

2. **Admin Dashboard**:
   - View users' availability in a comprehensive dashboard.
   - Schedule one-on-one or group sessions based on available time slots.
   - Conflict detection: Prevents scheduling sessions during unavailable times.

3. **Session Management**:
   - Admins can create sessions, and users can view upcoming scheduled sessions.
   - Optional rescheduling and notification management (e.g., email, SMS).

4. **Responsive UI/UX**:
   - Built with modern frontend technologies like React and React Router.
   - Interactive components like time selectors and calendar views for a smooth user experience.
   - Fully responsive across devices (desktop, tablet, and mobile).

---

## Tech Stack

### Frontend:
- **React**: For creating interactive UI components.
- **React Router**: For client-side routing.
- **Axios**: For making HTTP requests to the backend API.
- **React Calendar**: For calendar-based availability selection.
- **React Toastify**: For user-friendly toast notifications.

### Backend:
- **Java (Spring Boot)**: For handling backend logic, user authentication, and session management.
- **MySQL**: Database used for storing user data, availability, and session information.
- **REST API**: Built with Spring Boot to handle communication between the frontend and the backend.

---

## Installation and Setup Instructions

### Prerequisites

1. **Node.js** (Frontend)
2. **Java JDK 8+** (Backend)
3. **MySQL** (Database)

---

### Step 1: Clone the repository

bash
git clone https://github.com/your-username/dynamic-availability-app.git
cd dynamic-availability-app


### Step 2: Frontend Setup
Install Dependencies: Go to the frontend directory and install all dependencies:

### bash

cd frontend
npm install
Run the Frontend Development Server:

### bash

npm run dev
The application will run at http://localhost:5173/ by default if using Vite.

### Step 3: Backend Setup
Set Up MySQL Database: Create a new MySQL database called availability_app (or any preferred name) using the MySQL console or a GUI like MySQL Workbench.

### Example command:

sql

CREATE DATABASE availability_app;
Configure Backend: In the backend/src/main/resources/application.properties file, configure the database settings:

### properties

spring.datasource.url=jdbc:mysql://localhost:3306/availability_app
spring.datasource.username=root
spring.datasource.password=yourpassword
Run Backend Server: From the backend directory, run the Spring Boot application:

### bash

### cd backend
./mvnw spring-boot:run
The backend API will run on http://localhost:8080/.

### Step 4: Environment Variables
Frontend: Create a .env file in the root of the frontend directory with the following variables:

### bash

VITE_API_URL=http://localhost:8080/api
Backend: You can configure environment-specific properties in the application.properties file.

### Step 5: Running the Application
### Start the Frontend:

### bash

npm run dev
Start the Backend:

### bash

./mvnw spring-boot:run
Open the application in your browser at http://localhost:5173.

### API Endpoints
User Availability Endpoints:
GET /api/availability: Fetch the logged-in user's availability.
POST /api/availability: Add new availability.
PUT /api/availability/{id}: Update existing availability.
DELETE /api/availability/{id}: Delete availability.
Admin Scheduling Endpoints:
GET /api/admin/users: Fetch all users and their availability.
POST /api/admin/schedule: Schedule a session for a user or group.
