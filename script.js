// Events Data
      const events = [
        {
          id: 1,
          title: "Tech Innovators Summit 2025",
          date: "2025-01-25",
          location: "Mumbai Exhibition Center",
          image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51",
          description:
            "A mega tech conference featuring startups, AI talks, and product showcases.",
        },
        {
          id: 2,
          title: "Music Fiesta Nights",
          date: "2025-02-10",
          location: "Goa Beach Arena",
          image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
          description: "A musical night with top DJs and live performers.",
        },
        {
          id: 3,
          title: "Art & Cultural Festival 2025",
          date: "2025-03-05",
          location: "Delhi Art Center",
          image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
          description:
            "A colorful showcase of art, culture, dance, and creativity.",
        },
        {
          id: 4,
          title: "Startup Pitch Marathon",
          date: "2025-04-18",
          location: "Bangalore Tech Hub",
          image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
          description: "Pitch your startup ideas to investors and incubators.",
        },
      ];

      // Load Events
      function loadEvents() {
        const container = document.getElementById("eventsContainer");
        events.forEach((ev) => {
          container.innerHTML += `
          <div class="col-md-3">
            <div class="card shadow event-card">
              <img src="${ev.image}" class="card-img-top" alt="${ev.title}" />
              <div class="card-body">
                <h5 class="card-title fw-bold">${ev.title}</h5>
                <p><strong>Date:</strong> ${ev.date}</p>
                <p><strong>Location:</strong> ${ev.location}</p>
                <button class="btn btn-primary w-100" onclick="exploreEvent(${ev.id})">Explore</button>
              </div>
            </div>
          </div>`;
        });
      }
      function exploreEvent(id) {
        const ev = events.find((e) => e.id === id);
        localStorage.setItem("selectedEvent", JSON.stringify(ev));
        window.location.href = "event-details.html";
      }

      window.onload = loadEvents;

      // Sign Up Functionality
      document
        .getElementById("signupForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          const name = document.getElementById("signupName").value.trim();
          const email = document.getElementById("signupEmail").value.trim();
          const password = document.getElementById("signupPassword").value;
          let users = JSON.parse(localStorage.getItem("users") || "[]");
          if (users.some((u) => u.email === email)) {
            document.getElementById("signupError").classList.remove("d-none");
            document.getElementById("signupSuccess").classList.add("d-none");
            return;
          }
          users.push({ name, email, password });
          localStorage.setItem("users", JSON.stringify(users));
          document.getElementById("signupSuccess").classList.remove("d-none");
          document.getElementById("signupError").classList.add("d-none");
          this.reset();
          setTimeout(() => {
            var modalEl = bootstrap.Modal.getInstance(
              document.getElementById("signupModal")
            );
            modalEl.hide();
          }, 1500);
        });

      // Login Functionality
      document
        .getElementById("loginForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          const email = document.getElementById("loginEmail").value.trim();
          const password = document.getElementById("loginPassword").value;
          let users = JSON.parse(localStorage.getItem("users") || "[]");
          const user = users.find(
            (u) => u.email === email && u.password === password
          );
          if (user) {
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            document.getElementById("loginSuccess").classList.remove("d-none");
            document.getElementById("loginError").classList.add("d-none");
            setTimeout(() => {
              var modalEl = bootstrap.Modal.getInstance(
                document.getElementById("loginModal")
              );
              modalEl.hide();
              location.reload();
            }, 1000);
          } else {
            document.getElementById("loginError").classList.remove("d-none");
            document.getElementById("loginSuccess").classList.add("d-none");
          }
        });

      // Show logged in user in navbar
      window.addEventListener("DOMContentLoaded", () => {
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        if (user) {
          const navLinks = document.getElementById("navLinks");
          navLinks.innerHTML = `
          <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#events">Events</a></li>
          <li class="nav-item"><span class="nav-link fw-bold">Hi, ${user.name}</span></li>
          <li class="nav-item"><a class="nav-link" href="#" id="logoutBtn">Logout</a></li>
        `;
          document.getElementById("logoutBtn").addEventListener("click", () => {
            localStorage.removeItem("loggedInUser");
            location.reload();
          });
        }
      });

       document
        .getElementById("signupForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          const name = document.getElementById("name").value.trim();
          const email = document.getElementById("email").value.trim();
          const password = document.getElementById("password").value;

          let users = JSON.parse(localStorage.getItem("users") || "[]");

          // Check if email already exists
          if (users.some((u) => u.email === email)) {
            document.getElementById("errorMsg").classList.remove("d-none");
            document.getElementById("successMsg").classList.add("d-none");
            return;
          }

          // Add new user
          users.push({ name, email, password });
          localStorage.setItem("users", JSON.stringify(users));

          document.getElementById("successMsg").classList.remove("d-none");
          document.getElementById("errorMsg").classList.add("d-none");
          document.getElementById("signupForm").reset();

          // Redirect to login after 2 sec
          setTimeout(() => {
            window.location.href = "login.html";
          }, 2000);
        });

        //login js
         document
        .getElementById("loginForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          const email = document.getElementById("email").value.trim();
          const password = document.getElementById("password").value;

          let users = JSON.parse(localStorage.getItem("users") || "[]");

          const user = users.find(
            (u) => u.email === email && u.password === password
          );

          if (user) {
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            document.getElementById("successMsg").classList.remove("d-none");
            document.getElementById("errorMsg").classList.add("d-none");

            // Redirect to home after 1 sec
            setTimeout(() => {
              window.location.href = "index.html";
            }, 1000);
          } else {
            document.getElementById("errorMsg").classList.remove("d-none");
            document.getElementById("successMsg").classList.add("d-none");
          }
        });

        