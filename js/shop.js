// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIw8qCf-d8AOV67oO7ZCXnNXgGQA7nj9w",
    authDomain: "test-7815b.firebaseapp.com",
    databaseURL: "https://test-7815b-default-rtdb.firebaseio.com",
    projectId: "test-7815b",
    storageBucket: "test-7815b.appspot.com",
    messagingSenderId: "325689833090",
    appId: "1:325689833090:web:25bb169ff7c3eb8e16a69b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set, child, update, remove }
    from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const db = getDatabase();

var name = document.getElementById("name");
var phone = document.getElementById("phone");
var address = document.getElementById("address");
var kilo = document.getElementById("kilo");

var order = document.getElementById("order");