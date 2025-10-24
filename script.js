const shoppingList = document.getElementById("shopping-list");
const itemInput = document.getElementById("item-input");
const addButton = document.getElementById('submit-button');

// Button to add items to the list
addButton.addEventListener("click", function (event) {
    event.preventDefault();
    const itemText = itemInput.value;
    if (!itemText) return;

    // appending new item to the list
    const li = document.createElement('li');
    li.textContent = itemText;
    li.innerHTML += '<button type="button" class="remove-button">Remove</button>';
    li.innerHTML += ' <button type="button" class="edit-button">Edit</button>';
    shoppingList.appendChild(li);
    const removeButton = document.querySelectorAll('remove-button');
});


// Remove button
shoppingList.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-button")) {
    event.preventDefault();
    const li = event.target.closest("li");
    // If the list item exists, we remove it
    if (li) li.remove();
  }
});

// Edit button - almost the same as remove button
shoppingList.addEventListener("click", function (event) {
    if (event.target.classList.contains("edit-button")) {
        event.preventDefault();
        const li = event.target.closest("li");
        if (li) {
            // Remove the edit button
            event.target.remove();

            // first change text content to empty string
            li.firstChild.textContent = '';

            // now add a text input to edit the item
            // shoppingList.innerHTML += '<input type="text" id="edit-input" placeholder="Edit item">';
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.id = "edit-input";
            editInput.placeholder = "Edit item";
            
            // shoppingList.innerHTML += '<button type="button" id="save-button">Save</button>';
            const saveButton = document.createElement("button");
            saveButton.type = "button";
            saveButton.id = "save-button";
            saveButton.textContent = "Save";

            li.appendChild(editInput);
            li.appendChild(saveButton);

            saveButton.addEventListener("click", function (event) {
                event.preventDefault();
                const editInput = document.getElementById("edit-input");
                const editItem = editInput.value;
                if (editItem) {
                    console.log("Saved");
                    console.log(editItem);
                    li.textContent = editItem;
                    li.innerHTML += ' <button type="button" class="edit-button">Edit</button>';

                }
                saveButton.remove();
            })

        }
    }
})