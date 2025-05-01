// Toggle light/dark mode
document.getElementById('toggleMode').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
  
  // Form submission
  document.getElementById('requestForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const building = document.getElementById('building').value.trim();
    const room = document.getElementById('room').value.trim();
    const issue = document.getElementById('issue').value.trim();
  
    if (name && email && building && room && issue) {
      document.getElementById('statusMsg').textContent = 'Request submitted successfully!';
      this.reset();
    } else {
      document.getElementById('statusMsg').textContent = 'Please fill all fields.';
    }
  });
  