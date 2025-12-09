EventHub – Event Management Web Application
1. Project Overview

EventHub is a full-stack web application that allows users to explore and book events happening in their surroundings. Users can discover multiple events based on their location, view event details, and make bookings directly through the platform.

Examples of events users can explore:

Food Carnival 2025 – Location: Mumbai Exhibition Center

Health & Wellness Expo – Location: Bangalore Tech Hub

Film & Animation Fest – Location: Delhi Art Center

Tech Innovators Summit 2025 – Location: Hyderabad Convention Center

Music Fiesta Nights – Location: Goa Beach Arena

Admins can manage all events, including creating, editing, and deleting events, providing a complete event management system.

2. Folder Structure
event-management/
│
├─ src/
│  ├─ main/
│  │  ├─ java/com/eventhub/
│  │  │  ├─ EventManagementApplication.java      # Main Spring Boot application
│  │  │  ├─ controller/                          # Handles HTTP requests
│  │  │  │   ├─ AdminController.java
│  │  │  │   ├─ EventController.java
│  │  │  │   └─ UserController.java
│  │  │  ├─ model/                               # Entity classes representing DB tables
│  │  │  │   ├─ Admin.java
│  │  │  │   ├─ Event.java
│  │  │  │   └─ User.java
│  │  │  ├─ repository/                          # JPA Repositories for DB operations
│  │  │  │   ├─ AdminRepository.java
│  │  │  │   ├─ EventRepository.java
│  │  │  │   └─ UserRepository.java
│  │  │  └─ service/                             # Business logic layer
│  │  │       ├─ AdminService.java
│  │  │       ├─ EventService.java
│  │  │       └─ UserService.java
│  │  └─ resources/
│  │      ├─ application.properties              # Spring Boot config (DB, server, etc.)
│  │      └─ data.sql   (optional seed data for events)
│  └─ test/
│      └─ java/com/eventhub/                     # Test classes for backend logic
│
├─ frontend/                                      # Frontend static files
│  ├─ index.html                                 # Homepage with events and booking
│  ├─ event-details.html                          # Page showing event details
│  ├─ admin.html                                  # Admin dashboard
│  ├─ admin-login.html                            # Admin login page
│  ├─ admin-signup.html                           # Admin signup page
│  ├─ styles.css                                  # CSS styles
│  └─ script.js                                   # JS for frontend interactivity
│
├─ pom.xml                                        # Maven dependencies
└─ README.md                                      # Project documentation

3. Tech Stack
Layer	Technology / Tool
Frontend	HTML, CSS, Bootstrap, JavaScript
Backend	Java, Spring Boot (Spring Web, Spring JPA)
Database	MySQL
Build Tool	Maven
Persistence API	Jakarta Persistence (JPA)
Optional Tools	Lombok (for getter/setter boilerplate), DevTools
4. Functionalities Step by Step
4.1 User Side Features

Homepage (index.html)

Hero section with banner and buttons.

About section describing the platform.

Display upcoming events as cards:

Examples: Food Carnival 2025, Health & Wellness Expo, Film & Animation Fest, Tech Innovators Summit 2025, Music Fiesta Nights.

Each card shows title, date, location, and "Explore" button.

Explore Event (event-details.html)

Detailed event page with description, date, location, and image.

Option to book the event.

User Authentication

Sign Up modal to register.

Login modal to authenticate users.

Booking Functionality

Users can book events.

Booking details can be stored in backend DB (or localStorage in demo mode).

4.2 Admin Side Features

Admin Signup (admin-signup.html)

Create admin account with email and password.

Admin Login (admin-login.html)

Authenticate admin to access the dashboard.

Admin Dashboard (admin.html)

Add new events with title, date, location, description, and image.

Edit or delete existing events.

View all events and optionally see user bookings.

4.3 Backend Functionalities

Models / Entities

Admin → stores admin credentials.

User → stores user credentials and bookings.

Event → stores event details.

Repositories

AdminRepository, UserRepository, EventRepository for CRUD operations.

Services

Business logic for events, bookings, and authentication.

Controllers

REST endpoints:

/api/events → get, create, update, delete events.

/api/users → signup, login, book events.

/api/admins → signup/login, manage events.

Database

MySQL database for admins, users, and events.

Connection configured in application.properties.

4.4 Optional / Future Features

Event search by location or category.

Email notifications for bookings.

User profile and booking history.

Event reviews and ratings.

Pagination for large number of events. above add content in html  format add in readme file
