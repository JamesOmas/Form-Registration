document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");


    function showError(input, message) {
        let errorMsg = input.parentNode.querySelector("small");
        if (!errorMsg) {
            errorMsg = document.createElement("small");
            errorMsg.style.color = "red";
            input.parentNode.appendChild(errorMsg);
        }
        errorMsg.textContent = message;
        errorMsg.style.display = "block";
    }


    function clearError(input) {
        const errorMsg = input.parentNode.querySelector("small");
        if (errorMsg) {
            errorMsg.style.display = "none";
        }
    }

    form.addEventListener("submit", (e) => {
        let isValid = true;


        const firstName = form.querySelector("input[name='firstName']");
        if (!/^[A-Za-z\s]+$/.test(firstName.value)) {
            showError(firstName, "First name must contain only letters.");
            isValid = false;
        } else {
            clearError(firstName);
        }

  
        const middleName = form.querySelector("input[name='middleName']");
        if (!/^[A-Za-z\s]+$/.test(middleName.value)) {
            showError(middleName, "Middle name must contain only letters.");
            isValid = false;
        } else {
            clearError(middleName);
        }

 
        const lastName = form.querySelector("input[name='lastName']");
        if (!/^[A-Za-z\s]+$/.test(lastName.value)) {
            showError(lastName, "Last name must contain only letters.");
            isValid = false;
        } else {
            clearError(lastName);
        }

 
        const technology = form.querySelector("select");
        if (technology.selectedIndex === 0) {
            showError(technology, "Please select a technology.");
            isValid = false;
        } else {
            clearError(technology);
        }

        const batch = form.querySelector("input[name='batch']");
        if (!/^\d{2}$/.test(batch.value)) {
            showError(batch, "Batch must be 2-digit (e.g. 33).");
            isValid = false;
        } else {
            clearError(batch);
        }

        const idNumber = form.querySelector("input[name='idNumber']");
        if (!/^\d{4}-\d{2}-\d{3}$/.test(idNumber.value)) {
            showError(idNumber, "Invalid ID Number format. Use YYYY-NN-NNN.");
            isValid = false;
        } else {
            clearError(idNumber);
        }

        const contactNumber = form.querySelector("input[name='contacNumber']");
        if (!/^09\d{9}$/.test(contactNumber.value)) {
            showError(contactNumber, "Contact number must be 11 digits starting with 09.");
            isValid = false;
        } else {
            clearError(contactNumber);
        }

        if (!isValid) {
            e.preventDefault();
        }
    });
});
