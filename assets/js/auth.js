// define elements from html
const modalBox = document.getElementById("modal-box");
const mainModal = document.getElementById("modal");
const submitBtn = document.getElementById("submit-button");
const loginBtn = document.getElementById("login-button");
const logoutBtn = document.getElementById("logout-button");
const getEmail = document.getElementById("get-email");
const getPassword = document.getElementById("get-password");

// modal functions
function openModal() {
    modalBox.style.display = "block";
    mainModal.style.display = "block";
}

function closeModal() {
    modalBox.style.display = "none";
    mainModal.style.display = "none";
}

const ADMIN_EMAIL = "admin@mail.com";
const ADMIN_PASSWORD = "admin321";

// Handle Login Submit
if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const email = getEmail.value.trim();
        const password = getPassword.value.trim();

        if (!email || !password) {
            alert("Please enter email and password!");
            return;
        }

        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            localStorage.setItem("auth", "true");
            window.location.href = "/index.html";
        } else {
            alert("Incorrect username or password!");
        }
    });
}

function updateAuthUI() {
    const isLoggedIn = localStorage.getItem("auth") === "true";

    if (isLoggedIn) {
        logoutBtn.onclick = () => {
            localStorage.removeItem("auth");
            window.location.href = "/pages/login.html";
        };
    } else {
        authBtn.onclick = () => {
            window.location.href = "/pages/login.html";
        };
    }
}

updateAuthUI();
