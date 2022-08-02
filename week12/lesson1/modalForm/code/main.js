const login = document.querySelector(".login:first-child");
const cancel = document.querySelector(".cancel");
const modal = document.querySelector(".modal");

login.addEventListener('click', function() {
    modal.style.display = "block";
});

cancel.addEventListener('click', function() {
    modal.style.display = "none";
});