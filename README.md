  <h1>EventHub – Event Management Web Application</h1>

    <h2>1. Project Overview</h2>
    <p>
        EventHub is a full-stack web application that allows users to explore and book events happening in their surroundings. 
        Users can discover multiple events based on their location, view event details, and make bookings directly through the platform.
    </p>

    <h3>Examples of events users can explore:</h3>
    <ul>
        <li>Food Carnival 2025 – Location: Mumbai Exhibition Center</li>
        <li>Health & Wellness Expo – Location: Bangalore Tech Hub</li>
        <li>Film & Animation Fest – Location: Delhi Art Center</li>
        <li>Tech Innovators Summit 2025 – Location: Hyderabad Convention Center</li>
        <li>Music Fiesta Nights – Location: Goa Beach Arena</li>
    </ul>
    <p>Admins can manage all events, including creating, editing, and deleting events, providing a complete event management system.</p>

    <h2>2. Folder Structure</h2>
    <pre>
event-management/
│
├─ src/
│  ├─ main/
│  │  ├─ java/com/eventhub/
│  │  │  ├─ EventManagementApplication.java
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
    </pre>

    <h2>3. Tech Stack</h2>
    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <th>Layer</th>
            <th>Technology / Tool</th>
        </tr>
        <tr>
            <td>Frontend</td>
            <td>HTML, CSS, Bootstrap, JavaScript</td>
        </tr>
        <tr>
            <td>Backend</td>
            <td>Java, Spring Boot (Spring Web, Spring JPA)</td>
        </tr>
        <tr>
            <td>Database</td>
            <td>MySQL</td>
        </tr>
        <tr>
            <td>Build Tool</td>
            <td>Maven</td>
        </tr>
        <tr>
            <td>Persistence API</td>
            <td>Jakarta Persistence (JPA)</td>
        </tr>
        <tr>
            <td>Optional Tools</td>
            <td>Lombok (for getter/setter boilerplate), DevTools</td>
        </tr>
    </table>

    <h2>4. Functionalities Step by Step</h2>

    <h3>4.1 User Side Features</h3>
    <h4>Homepage (index.html)</h4>
    <ul>
        <li>Hero section with banner and buttons.</li>
        <li>About section describing the platform.</li>
        <li>Display upcoming events as cards:</li>
        <ul>
            <li>Food Carnival 2025</li>
            <li>Health & Wellness Expo</li>
            <li>Film & Animation Fest</li>
            <li>Tech Innovators Summit 2025</li>
            <li>Music Fiesta Nights</li>
        </ul>
        <li>Each card shows title, date, location, and "Explore" button.</li>
    </ul>

    <h4>Explore Event (event-details.html)</h4>
    <ul>
        <li>Detailed event page with description, date, location, and image.</li>
        <li>Option to book the event.</li>
    </ul>

    <h4>User Authentication</h4>
    <ul>
        <li>Sign Up modal to register.</li>
        <li>Login modal to authenticate users.</li>
    </ul>

    <h4>Booking Functionality</h4>
    <ul>
        <li>Users can book events.</li>
        <li>Booking details can be stored in backend DB or localStorage in demo mode.</li>
    </ul>

    <h3>4.2 Admin Side Features</h3>
    <h4>Admin Signup (admin-signup.html)</h4>
    <ul>
        <li>Create admin account with email and password.</li>
    </ul>
    <h4>Admin Login (admin-login.html)</h4>
    <ul>
        <li>Authenticate admin to access the dashboard.</li>
    </ul>
    <h4>Admin Dashboard (admin.html)</h4>
    <ul>
        <li>Add new events with title, date, location, description, and image.</li>
        <li>Edit or delete existing events.</li>
        <li>View all events and optionally see user bookings.</li>
    </ul>

    <h3>4.3 Backend Functionalities</h3>
    <ul>
        <li><strong>Models / Entities</strong>
            <ul>
                <li>Admin → stores admin credentials.</li>
                <li>User → stores user credentials and bookings.</li>
                <li>Event → stores event details.</li>
            </ul>
        </li>
        <li><strong>Repositories</strong> → AdminRepository, UserRepository, EventRepository for CRUD operations.</li>
        <li><strong>Services</strong> → Business logic for events, bookings, and authentication.</li>
        <li><strong>Controllers (REST endpoints)</strong>
            <ul>
                <li>/api/events → get, create, update, delete events.</li>
                <li>/api/users → signup, login, book events.</li>
                <li>/api/admins → signup/login, manage events.</li>
            </ul>
        </li>
        <li><strong>Database</strong> → MySQL database for admins, users, and events.</li>
    </ul>

    <h3>4.4 Optional / Future Features</h3>
    <ul>
        <li>Event search by location or category.</li>
        <li>Email notifications for bookings.</li>
        <li>User profile and booking history.</li>
        <li>Event reviews and ratings.</li>
        <li>Pagination for large number of events.</li>
    </ul>
