// Function to get users from localStorage
function getUsers() {
  var users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
}

// Function to save users to localStorage
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

document.addEventListener('DOMContentLoaded', function() {
  // Login form submission event listener
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Simple validation
    if (email === "" || password === "") {
      document.getElementById("login-error-msg").innerText = "Please enter both email and password";
    } else {
      // Check if the provided credentials match any stored user
      var users = getUsers();
      var user = users.find(function(u) {
        return u.email === email && u.password === password;
      });

      if (user) {
        alert("Login successful!");
        // Simulate redirecting to a dummy Facebook page
        window.open("facebook.html", "_blank");
      } else {
        document.getElementById("login-error-msg").innerText = "Invalid email or password";
      }
    }
  });

  // Adding event listener to "Log in with Facebook" button
  document.getElementById("login-fb-btn").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Adding this feature soon!");
  });

  // Store user credentials after signup
  document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("new-name").value;
    var email = document.getElementById("new-email").value;
    var password = document.getElementById("new-password").value;

    // Simple validation
    if (name === "" || email === "" || password === "") {
      document.getElementById("signup-error-msg").innerText = "Please fill in all fields";
    } else {
      // Simulate account creation
      alert("Account created successfully!");
      // Store the user's information in localStorage
      var users = getUsers();
      users.push({ name: name, email: email, password: password });
      saveUsers(users);

      // Redirect user back to login page
      document.querySelector(".login-container").style.display = "block";
      document.querySelector(".signup-container").style.display = "none";
    }
  });

  // Toggle between login and signup forms
  document.getElementById("signup-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".login-container").style.display = "none";
    document.querySelector(".signup-container").style.display = "block";
  });
});


