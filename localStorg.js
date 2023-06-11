function saveFormData() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Create an object to store the form data
    var formData = {
      name: name,
      email: email,
      message: message
    };
    
    // Convert the object to a JSON string
    var jsonData = JSON.stringify(formData);
    
    // Store the JSON string in local storage
    localStorage.setItem("formData", jsonData);
  }