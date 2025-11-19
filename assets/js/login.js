function registerUser(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    document.getElementById("showUser").textContent = username;
    document.getElementById("showPass").textContent = password;

    document.getElementById("detailsModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("detailsModal").style.display = "none";
}