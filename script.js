document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // For now, just log the email and password (you can replace this with your backend login logic)
    console.log("Email: ", email);
    console.log("Password: ", password);
    
    alert("Login successful! (For demonstration purposes)");
  });
  document.getElementById("forgot-password-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    
    // Simulate sending a reset link (replace this with your real backend logic)
    console.log("Reset link sent to: ", email);
    
    alert("A password reset link has been sent to your email.");
  });
  document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const accountType = document.getElementById("account-type").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const qualification = document.getElementById("qualification").value;
    const city = document.getElementById("city").value;
    const about = document.getElementById("about").value;
    
    // Simple validation to check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
    
    // Simulate the signup process (replace this with your backend signup logic)
    console.log("Account Type: ", accountType);
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Password: ", password);
    if(accountType === "nutritionist") {
      console.log("Qualification: ", qualification);
      console.log("City: ", city);
      console.log("About: ", about);
    }
    
    alert("Sign Up successful! Welcome to NutriSync.");
  });
  
// Show/hide nutritionist fields based on account type selection
document.getElementById("account-type").addEventListener("change", function() {
  const nutritionistFields = document.getElementById("nutritionist-fields");
  if (this.value === "nutritionist") {
    nutritionistFields.style.display = "block";
  } else {
    nutritionistFields.style.display = "none";
  }
});
  