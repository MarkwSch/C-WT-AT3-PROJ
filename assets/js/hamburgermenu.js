function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    var hamburgerButton = document.querySelector(".hamburgermenu");

    if (dropdownMenu) { // Basically, if it exists, e.g not null.
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        } else {
            dropdownMenu.style.display = "block";
        }
    }

    if (hamburgerButton) {
        hamburgerButton.style.display = "block";
    }

}