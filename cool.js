document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Create an object to store user credentials
    var user = {
      username: username,
      password: password
    };
  
    // Send the user object to the server
    var xhr = new XMLHttpRequest();
    xhr.open('GET'," https://crudcrud.com/api/df95452cd992446b850594472d58284estudentdata");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert('Login successful!');
      } else {
        alert('Login failed. Please try again.');
      }
    };
    xhr.send(JSON.stringify(user));
  });
  