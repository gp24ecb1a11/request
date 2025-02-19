// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeOS8_0tDWKnfAwLf0GRKr6JaopYj1nnY",
    authDomain: "dormdash-40a10.firebaseapp.com",
    databaseURL: "https://dormdash-40a10-default-rtdb.firebaseio.com/",
    projectId: "dormdash-40a10",
    storageBucket: "dormdash-40a10.appspot.com",
    messagingSenderId: "219135353050",
    appId: "1:219135353050:web:49446a2e74414ebf8105e3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Handle form submission
document.getElementById("request-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from form
    const fullName = document.getElementById("full-name").value;
    const orderNumber = document.getElementById("order-number").value;
    const serviceName = document.getElementById("service-name").value;
    const courierService = document.getElementById("courier-service").value;
    const packageSize = document.getElementById("package-size").value;
    const arrivalTime = document.getElementById("arrival-time").value;
    const otp = document.getElementById("otp").value;

    // Validate form (basic)
    if (!fullName || !orderNumber || !serviceName || !arrivalTime || !otp) {
        alert("Please fill all required fields!");
        return;
    }

    // Push request to Firebase
    const newRequestRef = database.ref("requests").push();
    newRequestRef.set({
        fullName,
        orderNumber,
        serviceName,
        courierService,
        packageSize,
        arrivalTime,
        otp,
        status: "pending"
    }).then(() => {
        alert("Request submitted successfully!");
        document.getElementById("request-form").reset();
    }).catch(error => {
        console.error("Error submitting request:", error);
    });
});
