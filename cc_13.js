// Task 2: Employee Cards Dynamic Addition
function createEmployeeCard (name, position) {
    const employeeContainer = document.getElementById("employeeContainer"); // Finds employee container by using getElementById
    
    const card = document.createElement("div"); // Creates a new div for employee card
    card.setAttribute("class", "employee-card"); // Sets attribute using customer-card class

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

// Task 3: Bulk Update on Employee Cards
function updateEmployeeCards () {
    const employeeCardList = document.querySelectorAll(".employee-card"); // Selects all elements with employee card class
    const employeeCardArray = [...employeeCardList]; // Converts list of employee cards into an array

    employeeCardArray.forEach(card => {
        card.style.border = "1px solid black"; // Adds border to card style
        card.style.backgroundColor = "coral"; // Adds background color to card style
    }); // Updates each card's style
}; // Function to update cards in bulk
updateEmployeeCards() // Calls update employee cards function

