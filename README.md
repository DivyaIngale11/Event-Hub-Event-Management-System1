# 🎉 EventHub – Event Management Web Application

---

## 1. Project Overview

**EventHub** is a full-stack web application that allows users to explore and book events happening in their surroundings. Users can discover multiple events based on their location, view event details, and make bookings directly through the platform.

**Examples of events users can explore:**

- **Food Carnival 2025** – Location: Mumbai Exhibition Center
- **Health & Wellness Expo** – Location: Bangalore Tech Hub
- **Film & Animation Fest** – Location: Delhi Art Center
- **Tech Innovators Summit 2025** – Location: Hyderabad Convention Center
- **Music Fiesta Nights** – Location: Goa Beach Arena

Admins can manage all events, including creating, editing, and deleting events, providing a complete event management system.

---

## 2. Folder Structure

```text
event-management/
│
├─ src/
│  ├─ main/
│  │  ├─ java/com/eventhub/
│  │  │  ├─ EventManagementApplication.java      # Main Spring Boot application
│  │  │  ├─ controller/                          
│  │  │  │   ├─ AdminController.java
│  │  │  │   ├─ EventController.java
│  │  │  │   └─ UserController.java
│  │  │  ├─ model/                               
│  │  │  │   ├─ Admin.java
│  │  │  │   ├─ Event.java
│  │  │  │   └─ User.java
│  │  │  ├─ repository/                          
│  │  │  │   ├─ AdminRepository.java
│  │  │  │   ├─ EventRepository.java
│  │  │  │   └─ UserRepository.java
│  │  │  └─ service/                             
│  │  │       ├─ AdminService.java
│  │  │       ├─ EventService.java
│  │  │       └─ UserService.java
│  │  └─ resources/
│  │      ├─ application.properties              
│  │      └─ data.sql                             
│  └─ test/
│      └─ java/com/eventhub/                     
│
├─ frontend/                                      
│  ├─ index.html                                 
│  ├─ event-details.html                          
│  ├─ admin.html                                  
│  ├─ admin-login.html                            
│  ├─ admin-signup.html                           
│  ├─ styles.css                                  
│  └─ script.js                                   
│
├─ pom.xml                                        
└─ README.md                                      
3. Tech Stack
Layer	Technology / Tool
Frontend	HTML, CSS, Bootstrap, JavaScript
Backend	Java, Spring Boot (Spring Web, Spring JPA)
Database	MySQL
Build Tool	Maven

User Side Features

Homepage (index.html) – Hero section, About section, Display upcoming events as cards.

Explore Event (event-details.html) – Detailed event page with description, date, location, image, and booking option.

User Authentication – Sign Up modal and Login modal.

Booking Functionality – Users can book events; details stored in backend DB or localStorage (demo).

4.2 Admin Side Features

Admin Signup (admin-signup.html) – Create admin account with email and password.

Admin Login (admin-login.html) – Authenticate admin to access dashboard.

Admin Dashboard (admin.html) – Add, edit, delete events, view all events, and optionally see user bookings.

4.3 Backend Functionalities

Models / Entities – Admin, User, Event

Repositories – AdminRepository, UserRepository, EventRepository

Services – Business logic for events, bookings, authentication

Controllers – REST endpoints:

/api/events → get, create, update, delete events

/api/users → signup, login, book events

/api/admins → signup/login, manage events

Database – MySQL configured in application.properties

4.4 Optional / Future Features

Event search by location or category

Email notifications for bookings

User profile and booking history

Event reviews and ratings

Pagination for large number of events
