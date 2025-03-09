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

    // Task 4: Employee Card Removal with Event Bubbling    
    employeeContainer.addEventListener("click", () => { // When employee card is clicked -> console logs that a card has been clicked
        console.log("Employee card has been clicked.");
    }); // Part of Task 4

    removeButton.addEventListener("click", (event) => { // When remove button is clicked -> deletes card from container
        employeeContainer.removeChild(card);
        event.stopPropagation(); // Prevents employee container event from occuring when remove button is clicked
    }); // Part of Task 4

    // Task 5: Inline Editing for Employee Cards
    const editButton = document.createElement("button"); // Creates a new button for editing the card
    editButton.textContent = "Edit"; // Adds edit text to button

    editButton.addEventListener("click", (event) => { // When edit is clicked -> Name and position can be updated with inputted text when saved
        editButton.style.display = "none"; // Hides edit button
        
        const employeeNameInput = document.createElement("input"); // Creates new input for name
        employeeNameInput.value = employeeName.textContent; // Pre-populates input field with existing employee name
        card.replaceChild(employeeNameInput, employeeName); // Replaces displayed name with input field
        
        const employeePositionInput = document.createElement("input"); // Creates new input for position
        employeePositionInput.value = employeePosition.textContent; // Prepopulates input field with existing employee position
        card.replaceChild(employeePositionInput, employeePosition); // Replaces displayed positon with input field
        
        const saveButton = document.createElement("button"); // Creates a save button to update inputted text
        saveButton.textContent = "Save"; // Adds save text to button
        
        saveButton.addEventListener("click", (event) => { // When save button is clicked -> existing text is replaced with updated text inputs
            employeeName.textContent = employeeNameInput.value; // Updates employee name to new one 
            card.replaceChild(employeeName, employeeNameInput); // Replaces input field with updated static name text

            employeePosition.textContent = employeePositionInput.value; // Updates employee position to new one
            card.replaceChild(employeePosition, employeePositionInput); // Replaces input field with updated static position text
            saveButton.remove(); // Removes save button when update is completed
            editButton.style.removeProperty("display"); // Displays edit button again
            event.stopPropagation(); // Prevents employee container event from occuring when save button is clicked
        });
        
        card.appendChild(saveButton); // Appends save button to card
        event.stopPropagation(); // Prevents employee container event form occuring hwen edit button is clicked
    });
    card.appendChild(editButton); // Appends edit button to card

}; // Function to create employee card

// Test Cases
createEmployeeCard("Spongebob Squarepants", "Frycook");
createEmployeeCard("Squidward Tentacles", "Cashier");
createEmployeeCard("Eugene Krabs", "Manager");

// Task 3: Bulk Update on Employee Cards
function updateEmployeeCards () {
    const employeeCardList = document.querySelectorAll(".employee-card"); // Selects all elements with employee card class
    const employeeCardArray = [...employeeCardList]; // Converts list of employee cards into an array

    employeeCardArray.forEach(card => {
        card.style.border = "1px solid black"; // Adds border to card style
        card.style.backgroundColor = "coral"; // Adds background color to card style
    }); // Updates each card's style
}; // Function to update cards in bulk
updateEmployeeCards(); // Calls update employee cards function

