import { database } from '../firebaseConfig.js';
import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

// Fetch and display updated information
function fetchUpdatedInfo() {
    const infoList = document.getElementById("infoList");
    infoList.innerHTML = ""; // Clear previous content

    const infoRef = ref(database, 'libraryInfo');

    // Listen for real-time updates
    onValue(infoRef, (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            for (const category in data) {
                const info = data[category];
                infoList.innerHTML += `
                    <div class="info-entry">
                        <h3>${info.title}</h3>
                        <p>${info.description}</p>
                        
                    </div>
                    <hr>
                `;
            }
        } else {
            infoList.innerHTML = "<p>No information found.</p>";
        }
    });
}

// Redirect to Admin Form Page
function goBack() {
    window.location.href = "./updatest.html";
}

// Fetch information on page load
fetchUpdatedInfo();

// Attach functions to the global scope for buttons
window.goBack = goBack;




