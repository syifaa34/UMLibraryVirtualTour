// firebaseConfig.js

// Import Firebase modules for Modular SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrLNxG24gxWbNIRcnp0WAYsXHL7mrNj6c",
    authDomain: "um-virtual-tour-website.firebaseapp.com",
    databaseURL: "https://um-virtual-tour-website-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "um-virtual-tour-website",
    storageBucket: "um-virtual-tour-website.firebasestorage.app",
    messagingSenderId: "95965375882",
    appId: "1:95965375882:web:19eded73cf5f0261b4ec73",
    measurementId: "G-4CV3ZD798M"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Services
const database = getDatabase(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// Export Firebase Services
export { app, database, db, storage, auth };
