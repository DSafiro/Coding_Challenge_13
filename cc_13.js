// Task 2: Employee Cards Dynamic Addition
function createEmployeeCard (name, position) {
    const employeeContainer = document.getElementById("employeeContainer"); // Selects employee container by using getElementById
    
    const card = document.createElement("div"); // Creates a new div for employee card
    card.setAttribute("class", "customer-card"); // Sets attribute using customer-card class

    const employeeName = document.createElement("h3"); // Creates a new heading for employee name
    employeeName.textContent = name; // Adds name when function is called

    const employeePosition = document.createElement("p"); // Creates a new paragrapoh for employee position
    employeePosition.textContent = position; // Adds position when function is called

    const removeButton = document.createElement("button"); // Creates a button for deleting the card
    removeButton.textContent = "Remove"; // Adds remove text to button

    card.appendChild(employeeName); // Appends employee name to card
    card.appendChild(employeePosition); // Appends employee position to card
    card.appendChild(removeButton); // Appends remove button to card

    employeeContainer.appendChild(card); // Appends card to employee container

    removeButton.addEventListener("click", () => { // When remove button is click -> deletes card from container
        card.remove()
    }); 
}; // Function to create employee card

// Test Cases
createEmployeeCard("Spongebob Squarepants", "Frycook");
createEmployeeCard("Squidward Tentacles", "Cashier");