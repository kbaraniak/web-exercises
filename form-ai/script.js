function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateName(username) {
    const usernameRegex = /^[a-zA-Z][a-zA-Z_-]{2,63}$/;
    return usernameRegex.test(username);
}

function validateSubname(subname) {
    const usernameRegex = /^[a-zA-Z][a-zA-Z_-]{2,83}$/;
    return usernameRegex.test(subname);
}

function validateTitle(title) {
    const titleRegex = /^[a-zA-Z][a-zA-Z0-9_-]{0,50}$/;
    return titleRegex.test(title);
}

function validateString(input) {
    const regex = /^[a-zA-Z.,\s]+$/;
    return regex.test(input);
}

function __failForm() {
    alert("Podano nieprawidłowe dane");
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('#contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const fields = {
            email: document.querySelector("#f_email"),
            firstname: document.querySelector("#f_imie"),
            surname: document.querySelector("#f_nazwisko"),
            title: document.querySelector("#f_temat"),
            message: document.querySelector("#f_tresc")
        };

        const validations = {
            email: validateEmail(fields.email.value),
            firstname: validateName(fields.firstname.value),
            surname: validateSubname(fields.surname.value),
            title: validateTitle(fields.title.value),
            message: validateString(fields.message.value)
        };

        let isValid = true;

        Object.values(fields).forEach(field => field.parentElement.classList.remove("fail"));

        // Validate fields and add fail class if invalid
        for (const [key, value] of Object.entries(validations)) {
            if (!value) {
                fields[key].parentElement.classList.add("fail");
                isValid = false;
            }
        }

        if (isValid) {
            alert("Formularz został wysłany");
        } else {
            __failForm();
        }
    });
});
