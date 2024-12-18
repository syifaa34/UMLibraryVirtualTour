import { database } from '../firebaseConfig.js';
import { ref, set, get, onValue } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";



// Function to save or update information
function saveInformation() {
    const category = document.getElementById("infoCategory").value;
    const title = document.getElementById("infoTitle").value;
    const description = document.getElementById("infoDescription").value;

    // Validate inputs
    if (!title || !description) {
        alert("Please fill in all fields.");
        console.error("Validation failed: Missing title or description.");
        return;
    }

    console.log("Saving information to Firebase...");
    console.log("Category:", category, "Title:", title, "Description:", description);

    // Save to Firebase
    set(ref(database, 'libraryInfo/' + category), {
        title: title,
        description: description
    })
        .then(() => {
            console.log(`Data saved successfully in category: ${category}`);
            alert(`Information for ${category} saved successfully!`);
            // Redirect to updated info page
            window.location.href = "./updatedInfo.html";
        })
        .catch((error) => {
            console.error("Error saving information:", error);
        });
}

// Fetch and display updated information
function fetchUpdatedInfo() {
    const infoList = document.getElementById("infoList");
    infoList.innerHTML = ""; // Clear previous content

    const infoRef = ref(database, 'libraryInfo');

    // Listen for real-time updates
    onValue(infoRef, (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            infoList.innerHTML = ""; // Reload data
            for (const category in data) {
                const info = data[category];
                infoList.innerHTML += `
                    <div class="info-entry">
                        <h3>${info.title}</h3>
                        <p>${info.description}</p>
                        <button class="edit-btn" onclick="editInformation('${category}')">Edit</button>
                        <button class="delete-btn" onclick="deleteInformation('${category}')">Delete</button>
                    </div>
                    <hr>
                `;
            }
        } else {
            infoList.innerHTML = "<p>No information found.</p>";
        }
    });
}

// Function to populate fields for editing
function editInformation(category) {
    get(ref(database, 'libraryInfo/' + category))
        .then((snapshot) => {
            if (snapshot.exists()) {
                const info = snapshot.val();
                // Store the data in sessionStorage for transfer to the edit form
                sessionStorage.setItem("editCategory", category);
                sessionStorage.setItem("editTitle", info.title);
                sessionStorage.setItem("editDescription", info.description);

                // Redirect to edit form
                window.location.href = "./updatest.html";
            } else {
                alert("Information not found.");
            }
        })
        .catch((error) => {
            console.error("Error fetching information:", error);
        });
}

// Delete information
function deleteInformation(category) {
    if (confirm(`Are you sure you want to delete the information for ${category}?`)) {
        set(ref(database, 'libraryInfo/' + category), null)
            .then(() => {
                alert(`Information for ${category} deleted successfully!`);
                fetchUpdatedInfo(); // Refresh list
            })
            .catch((error) => {
                console.error("Error deleting information:", error);
            });
    }
}

// Logout function to redirect to index.html
function logout() {
    const confirmation = confirm("Are you sure you want to logout?");
    if (confirmation) {
        console.log("Logging out...");
        window.location.href = "../index.html"; // Redirect to index.html
    } else {
        console.log("Logout canceled.");
    }
}
// Attach functions to global scope for HTML buttons
window.saveInformation = saveInformation;
window.editInformation = editInformation;
window.deleteInformation = deleteInformation;
window.fetchUpdatedInfo = fetchUpdatedInfo;
window.logout = logout;

// Automatically fetch updated info on page load (if applicable)
if (document.getElementById("infoList")) {
    fetchUpdatedInfo();
}
