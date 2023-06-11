function addData() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    // Create an object to store the user data
    var userData = {
      name: name,
      email: email,
      phone: phone
    };
    
    // Retrieve existing data from local storage or initialize an empty array
    var existingData = JSON.parse(localStorage.getItem("userData")) || [];
    
    // Add new data to the existing data array
    existingData.push(userData);
    
    // Store the updated data in local storage
    localStorage.setItem("userData", JSON.stringify(existingData));
    
    // Reset the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    
    // Display success message
    alert("User data added successfully!");
  }
  
  function deleteData(index) {
    // Retrieve existing data from local storage
    var existingData = JSON.parse(localStorage.getItem("userData")) || [];
    
    // Remove the data at the specified index
    existingData.splice(index, 1);
    
    // Store the updated data in local storage
    localStorage.setItem("userData", JSON.stringify(existingData));
    
    // Refresh the displayed data
    displayData();
  }
  
  function displayData() {
    // Retrieve existing data from local storage
    var existingData = JSON.parse(localStorage.getItem("userData")) || [];
    
    // Get the table body element
    var tableBody = document.getElementById("data-table-body");
    
    // Clear the table body
    tableBody.innerHTML = "";
    
    // Loop through the data and add rows to the table
    for (var i = 0; i < existingData.length; i++) {
      var rowData = existingData[i];
      
      var row = tableBody.insertRow();
      var nameCell = row.insertCell(0);
      var emailCell = row.insertCell(1);
      var phoneCell = row.insertCell(2);
      var deleteCell = row.insertCell(3);
      
      nameCell.innerHTML = rowData.name;
      emailCell.innerHTML = rowData.email;
      phoneCell.innerHTML = rowData.phone;
      deleteCell.innerHTML = "<button onclick='deleteData(" + i + ")'>Delete</button>";
    }
  }