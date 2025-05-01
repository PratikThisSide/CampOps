document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    
    // Toggle password visibility
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });
    }
    
    // Form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            
            // Basic validation
            if (!username || !password) {
                showError('Please enter both email and password');
                return;
            }
            
            // Validate email format
            if (!validateEmail(username)) {
                showError('Please enter a valid college email address');
                return;
            }
            
            // Validate phone number format (basic check)
            if (!validatePhoneNumber(password)) {
                showError('Please enter a valid phone number');
                return;
            }
            
            // Simulate authentication (replace with actual API call)
            authenticateUser(username, password);
        });
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function validatePhoneNumber(phone) {
        // Basic phone number validation (adjust as needed)
        const re = /^\d{10,15}$/;
        return re.test(phone);
    }
    
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        
        // Hide error after 5 seconds
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }
    
    function authenticateUser(email, phone) {
        // In a real implementation, this would be an API call to your backend
        // For now, we'll simulate a database check
        
        // Sample "database" of users (in real app, this comes from your backend)
        const users = [
            { email: "teacher1@college.edu", phone: "1234567890", role: "teacher", name: "John Doe" },
            { email: "teacher2@college.edu", phone: "0987654321", role: "teacher", name: "Jane Smith" },
            { email: "admin@college.edu", phone: "1122334455", role: "admin", name: "Admin User" }
        ];
        
        // Find user in the "database"
        const user = users.find(u => u.email === email && u.phone === phone);
        
        if (user) {
            // Successful login - redirect based on role
            if (user.role === "admin") {
                window.location.href = "admin-dashboard.html";
            } else {
                window.location.href = "index.html";
            }
            
            // In a real app, you would:
            // 1. Store the user session/token
            // 2. Possibly store user data in localStorage/sessionStorage
            // localStorage.setItem('user', JSON.stringify(user));
        } else {
            showError('Invalid credentials. Please try again.');
        }
    }
});