function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.querySelector(".dropdown-content");
    if (dropdowns.classList.contains('show')) {
        dropdowns.classList.remove('show');
    }
  }
}

 