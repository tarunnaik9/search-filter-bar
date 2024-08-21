function search() {
    // Get the value of the search input and convert it to lowercase
    let searchValue = document.getElementById("serach-item").value.toLowerCase();

    // Get all the fruit elements
    let fruits = document.getElementsByClassName("Fruits");

    // Loop through all the fruits and display only those that match the search query
    for (let i = 0; i < fruits.length; i++) {
        // Get the fruit name from the h2 tag and convert it to lowercase
        let fruitName = fruits[i].getElementsByTagName("h2")[0].textContent.toLowerCase();

        // Check if the fruit name includes the search query
        if (fruitName.includes(searchValue)) {
            fruits[i].style.display = "block";  // Show the fruit if it matches
        } else {
            fruits[i].style.display = "none";  // Hide the fruit if it doesn't match
        }
    }
}