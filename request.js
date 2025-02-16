// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDobwvOdyiwBCjNNBUyRNStwrMQmhFv3vY",
  authDomain: "dormdash-1becd.firebaseapp.com",
  databaseURL: "https://dormdash-1becd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dormdash-1becd",
  storageBucket: "dormdash-1becd.firebasestorage.app",
  messagingSenderId: "789434000901",
  appId: "1:789434000901:web:a8f28358c7e0091b2ede6c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Form Submission
document.getElementById("request-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("full-name").value;
  const orderNumber = document.getElementById("order-number").value;
  const serviceName = document.getElementById("service-name").value;
  const courierService = document.getElementById("courier-service").value;
  const packageSize = document.getElementById("package-size").value;
  const arrivalTime = document.getElementById("arrival-time").value;
  const otp = document.getElementById("otp").value;

  // Push data to Firebase Realtime Database
  db.ref("orders").push({
    name,
    orderNumber,
    serviceName,
    courierService,
    packageSize,
    arrivalTime,
    otp
  }).then(() => {
    alert("Request Submitted Successfully!");
    document.getElementById("request-form").reset();
  }).catch(error => {
    console.error("Error submitting request: ", error);
  });
});
