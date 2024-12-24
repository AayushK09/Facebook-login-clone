// logout.js
document.addEventListener('DOMContentLoaded', function() {
  var logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      // Clear any stored user data (assuming user data is stored in localStorage)
      localStorage.removeItem('currentUser');
      alert('You have been logged out.');
      window.location.href = 'index.html'; // Redirect to the login page
    });
  } 
});
