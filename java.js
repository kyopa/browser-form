const email = document.querySelector("#email")
const errorEmail = document.querySelector(".error-email")



email.addEventListener("input", function(event) {
    if (email.validity.typeMismatch) {
        email.classList.add("error")
        errorEmail.innerHTML = "Enter an email address (example@gmail.com)"
    } else {
        errorEmail.innerHTML = " "
        email.classList.remove("error")
    }
});

const zip = document.querySelector("#zip")
const zipError = document.querySelector(".error-zip")

zip.addEventListener("input", () => {
    if (zip.validity.patternMismatch) {
        zip.classList.add("error")
        zipError.innerHTML = "Enter ZIP code (example: 02130)"
    } else {
        zip.classList.remove("error")
        zipError.innerHTML = "";
    }
})

const pwd = document.querySelector("#pwd")
const box = document.querySelector(".box")
box.style.display = "none"

pwd.addEventListener("input", () => {
    if (pwd.validity.patternMismatch) {
        pwd.classList.add("error")
        box.style.display = "block";
    } else {
        pwd.classList.remove("error")
        box.style.display = "none";
    }
})

const confirm = document.querySelector("#confirm")
const confirmError = document.querySelector(".error-pwd-confirmation")
confirmError.style.display = "none"

confirm.addEventListener("input", () => {
    if (pwd.value == "") {
        if (confirm.value !== "") {
            confirmError.style.display = "block"
            confirmError.innerHTML = "Fill in the password"
            confirm.classList.add("error")
        } else {
            confirm.classList.remove("error")
            confirmError.style.display = "none"
        }

    } else {
        if (confirm.value !== pwd.value) {
            confirm.classList.add("error")
            confirmError.style.display = "block"
        } else {
            confirm.classList.remove("error")
            confirmError.style.display = "none"
        }
    } 
})


const button = document.querySelector("button")
const display = document.querySelector(".display")

const country = document.querySelector("#country")

button.addEventListener("click", () => {

    if (email.validity.typeMismatch || email.value === "") {
        email.classList.add("error")
        errorEmail.innerHTML = "Enter an email address (example@gmail.com)"
    }
    if (country.value === "") {
        country.classList.add("error")
    } else {
        country.classList.remove("error")

    }
    if (zip.validity.patternMismatch || zip.value === "") {
        zip.classList.add("error")
        zipError.innerHTML = "Enter ZIP code (example: 02130)"
    }
    if (pwd.validity.patternMismatch || pwd.value === "") {
        pwd.classList.add("error")
    }
    if (confirm.value === "" || confirm.value !== pwd.value) {
        confirm.classList.add("error")
    }


})





