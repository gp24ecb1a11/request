// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get form and OTP input elements
    const form = document.getElementById('request-form');
    const otpInput = document.getElementById('otp');

    // Add event listener to handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Validate OTP
        const otp = otpInput.value;
        if (!otp || isNaN(otp) || otp.length !== 6) {
            alert("Please enter a valid 6-digit OTP.");
            return;
        }

        // Validate that all required fields are filled
        const requiredFields = form.querySelectorAll('[required]');
        for (let field of requiredFields) {
            if (!field.value) {
                alert(`Please fill in the ${field.previousElementSibling.textContent}`);
                return;
            }
        }

        // If all validations pass, simulate form submission
        const formData = new FormData(form);
        let formDetails = '';
        formData.forEach((value, key) => {
            formDetails += `${key}: ${value}\n`;
        });

        // Display the form data in an alert (this simulates form submission)
        alert("Form submitted successfully! Here are the details:\n\n" + formDetails);

        // Optionally, you could clear the form after submission
        form.reset();
    });
});
