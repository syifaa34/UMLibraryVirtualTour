import { database } from '../firebaseConfig.js';
import { ref, set, get, onValue } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js";




// Function to save or update information
function saveInformation() {
    const category = document.getElementById("infoCategory").value;
    const title = document.getElementById("infoTitle").value;
    const description = document.getElementById("infoDescription").value;
    const fileInput = document.getElementById("infoFile");
    const file = fileInput.files[0];

    // Validate inputs
    if (!title || !description) {
        alert("Please fill in all fields.");
        console.error("Validation failed: Missing title or description.");
        return;
    }

    console.log("Saving information to Firebase...");
    console.log("Category:", category, "Title:", title, "Description:", description, "File:", file ? file.name : "No file uploaded");

    if (file) {
        // Upload new file to Firebase Storage
        const filePath = `libraryMedia/${category}/${file.name}`;
        const fileRef = storageRef(getStorage(), filePath);
        
        uploadBytes(fileRef, file)
            .then(() => getDownloadURL(fileRef))
            .then((fileURL) => {
                return set(ref(database, 'libraryInfo/' + category), {
                    title: title,
                    description: description,
                    mediaURL: fileURL,
                    mediaType: file.type.includes("image") ? "image" : "video"
                });
            })
            .then(() => {
                alert(`Information for ${category} saved successfully!`);
                window.location.href = "./updatedInfo.html";
            })
            .catch((error) => {
                console.error("Error saving information:", error);
            });
    } else {
        // Fetch existing information to retain mediaURL and mediaType
        get(ref(database, 'libraryInfo/' + category))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const existingInfo = snapshot.val();
                    return set(ref(database, 'libraryInfo/' + category), {
                        title: title,
                        description: description,
                        mediaURL: existingInfo.mediaURL,
                        mediaType: existingInfo.mediaType
                    });
                } else {
                    return set(ref(database, 'libraryInfo/' + category), {
                        title: title,
                        description: description,
                        mediaURL: null,
                        mediaType: null
                    });
                }
            })
            .then(() => {
                alert(`Information for ${category} saved successfully!`);
                window.location.href = "./updatedInfo.html";
            })
            .catch((error) => {
                console.error("Error saving information:", error);
            });
    }
}

// Fetch and display updated information
function fetchUpdatedInfo() {
    const infoList = document.getElementById("infoList");
    infoList.innerHTML = ""; // Clear previous content

    const infoRef = ref(database, 'libraryInfo');

    onValue(infoRef, (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            infoList.innerHTML = "";

            for (const category in data) {
                const info = data[category];
                const mediaHTML = info.mediaType === "image"
                    ? `<img src="${info.mediaURL}" alt="${info.title}" style="max-width: 300px;">`
                    : info.mediaType === "video"
                    ? `<video src="${info.mediaURL}" controls style="max-width: 300px;"></video>`
                    : "";

                infoList.innerHTML += `
                    <div class="info-entry">
                        <h3>${info.title}</h3>
                        <p>${info.description}</p>
                        ${mediaHTML}
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
                sessionStorage.setItem("editMediaURL", info.mediaURL);
                sessionStorage.setItem("editMediaType", info.mediaType);
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

// Redirect to Admin Form Page
function goBack() {
    window.location.href = "./updatest.html";
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
window.goBack = goBack;

// Automatically fetch updated info on page load (if applicable)
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById("infoList")) {
        fetchUpdatedInfo();
    }
});