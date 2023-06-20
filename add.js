function addDetails() {
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var category = document.getElementById("choosecatagory").value;
    var details = {
      name: name,
      email: email,
      category:category
    };
    
    
    var storedDetails = localStorage.getItem("details");
    var detailsList = [];
    
    if (storedDetails) {
      detailsList = JSON.parse(storedDetails);
    }
    
    detailsList.push(details);
    localStorage.setItem("details", JSON.stringify(detailsList));
    
    
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("choosecatagory").value = "";
   
    displayDetails();
  }
  
 
  function displayDetails() {
    var storedDetails = localStorage.getItem("details");
    var detailsList = [];
    
    if (storedDetails) {
      detailsList = JSON.parse(storedDetails);
    }
    
    var detailsListElement = document.getElementById("detailsList");
    detailsListElement.innerHTML = "";
    
    for (var i = 0; i < detailsList.length; i++) {
      var details = detailsList[i];
      
      var listItem = document.createElement("li");
      listItem.innerHTML = "<strong>Name:</strong> " + details.name + ", <strong>Email:</strong> " + details.email +"<strong>Category:</strong> " + details.category;
      
      var deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.setAttribute("data-index", i);
      deleteButton.onclick = deleteDetails;
      
      listItem.appendChild(deleteButton);
      detailsListElement.appendChild(listItem);
    }
  }
  
  
  function deleteDetails() {
    var index = this.getAttribute("data-index");
    var storedDetails = localStorage.getItem("details");
    var detailsList = [];
    
    if (storedDetails) {
      detailsList = JSON.parse(storedDetails);
    }
    
    detailsList.splice(index, 1);
    localStorage.setItem("details", JSON.stringify(detailsList));
    
    displayDetails();
  }
  
  // Initial display
  displayDetails();