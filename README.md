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

```bash
git clone https://github.com/your-username/dynamic-availability-app.git
cd dynamic-availability-app
