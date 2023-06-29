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
  var users = [
    { _id: 1, name: 'John Doe', age: 25 },
    { _id: 2, name: 'Jane Smith', age: 30 },
    { _id: 3, name: 'Bob Johnson', age: 35 }
  ];
  
  // Function to render the user list
  function renderUserList() {
    var userListDiv = document.getElementById('userList');
    userListDiv.innerHTML = '';
  
    users.forEach(function(user) {
      var userDiv = document.createElement('div');
      userDiv.className = 'user';
  
      var nameSpan = document.createElement('span');
      nameSpan.textContent = user.name + ' - ' + user.age + ' years old';
      userDiv.appendChild(nameSpan);
  
      var deleteIcon = document.createElement('span');
      deleteIcon.className = 'delete-icon';
      deleteIcon.textContent = '❌';
      deleteIcon.addEventListener('click', function() {
        deleteUser(user._id);
        userDiv.remove();
      });
      userDiv.appendChild(deleteIcon);
  
      userListDiv.appendChild(userDiv);
    });
  }
  
  // Function to delete a user
  function deleteUser(userId) {
    users = users.filter(function(user) {
      return user._id !== userId;
    });
  }
  
  // Render the initial user list
  renderUserList();
  
  