function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    var hamburgerButton = document.querySelector(".hamburger-button");

    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }

    hamburgerButton.style.display = "block";
}