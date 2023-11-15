const errorIcon = document.getElementById('error-icon'); // error icon
const emailForm = document.querySelector('.email-form'); // email form
const emailInput = document.querySelector('.email-input'); // email input box
const errorMessage = document.querySelector('.invalid-email-message'); // error message
const emailMessage = document.querySelector('.empty-email-message'); // empty message

// email form
emailForm.addEventListener("submit", e => {
    if (!emailInput.value) {
        e.preventDefault();
        emailMessage.textContent = 'You must type in an email';
        errorIcon.style.visibility = "visible";
    } else {
        emailMessage.textContent = ''; // returns true
    }
});

// email input
emailInput.addEventListener("input", () => {
    if (emailInput.value) {
        const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value);
        if (regexMatch) {
            errorMessage.textContent = '';
        } else {
            errorMessage.textContent = 'Please provide a valid email';
            emailMessage.textContent = '';
            //emailMessage.style.display = "none";
            errorIcon.style.visibility = "visible";
        }
    } else {
        emailMessage.textContent = 'You must type in an email';
        errorMessage.textContent = "";
        errorIcon.style.visibility = "hidden";
    }
});

/*
emailForm.addEventListener("input", () => {
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
    if (email.value) {
        if (regexMatch) {
            errorEmail.textContent = '';
        } else {
            errorIcon.style.display = "block";
            errorEmail.textContent = 'Please provide a valid email';
            emailMessage.textContent = "";
        }
    } else {
        emailMessage.textContent = 'Please provide a valid email';
        errorEmail.textContent = "";
    }
});
*/