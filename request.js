import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";



const firebaseConfig = {
    apiKey: "AIzaSyAeOS8_0tDWKnfAwLf0GRKr6JaopYj1nnY",
    authDomain: "dormdash-40a10.firebaseapp.com",
    projectId: "dormdash-40a10",
    storageBucket: "dormdash-40a10.firebasestorage.app",
    messagingSenderId: "219135353050",
    appId: "1:219135353050:web:49446a2e74414ebf8105e3"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("requestForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const reward = document.getElementById("reward").value;

    if (title && description && reward) {
        await addDoc(collection(db, "requests"), {
            title,
            description,
            reward,
            taken: false
        });

        alert("Request submitted successfully!");
        e.target.reset();
    }
});
