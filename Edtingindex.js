var editingIndex = -1; // To keep track of the index being edited
    
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
     axios.post("https://crudcrud.com/Dashboard/df95452cd992446b850594472d58284e/studentdata",userData)
      .then((Response)=>{
           console.log(Response)
      })
      .catch((err)=>{
           console.log(err);
      })
  
  // Retrieve existing data from local storage or initialize an empty array
  var existingData = JSON.parse(localStorage.getItem("userData")) || [];
  
  if (editingIndex === -1) {
    // Add new data to the existing data array
    existingData.push(userData);
  } else {
    // Replace the data at the editing index
    existingData[editingIndex] = userData;
    
    // Reset the editing index
    editingIndex = -1;
  }
  
  // Store the updated data in local storage
 // localStorage.setItem("userData", JSON.stringify(existingData));
  
  // Reset the form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  
  // Display success message
  alert("User data saved successfully!");
  
  // Refresh the displayed data
  displayData();
}

function editData(index) {
  // Retrieve existing data from local storage
  var existingData = JSON.parse(localStorage.getItem("userData")) || [];
  
  // Retrieve the data at the specified index
  var userData = existingData[index];
  
  // Set the form fields with the retrieved data
  document.getElementById("name").value = userData.name;
  document.getElementById("email").value = userData.email;
  document.getElementById("phone").value = userData.phone;
  
  // Set the editing index
  editingIndex = index;
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
    var actionCell = row.insertCell(3);
    
    nameCell.innerHTML = rowData.name;
    emailCell.innerHTML = rowData.email;
    phoneCell.innerHTML = rowData.phone;
    actionCell.innerHTML = "<button onclick='editData(" + i + ")'>Edit</button> <button onclick='deleteData(" + i + ")'>Delete</button>";
    displayData();
  }
}