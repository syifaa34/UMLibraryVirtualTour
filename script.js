import { database } from './firebaseConfig.js';
import { ref, get } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
// Define the levels and scenes with custom pitch, yaw, and roll values
const levels = {
    'level1': [
        { sceneId: "scene1", pano: 'level1/1.0.jpg', pitch: 20, yaw: 2,  },
        { sceneId: "scene2", pano: 'level1/1.1.jpg', pitch: 20, yaw: 2,  },
        { sceneId: "scene3", pano: 'level1/1.2.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene4", pano: 'level1/1.3.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene5", pano: 'level1/1.4.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene6", pano: 'level1/1.5.jpg', pitch: 20, yaw: 150, roll: 3},
        { sceneId: "scene7", pano: 'level1/2.0.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene8", pano: 'level1/3.0.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene9", pano: 'level1/3.1.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene10", pano: 'level1/3.2.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene11", pano: 'level1/3.3.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene13", pano: 'level1/3.5.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene14", pano: 'level1/3.6.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene15", pano: 'level1/3.7.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene16", pano: 'level1/3.8.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene17", pano: 'level1/3.9.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene18", pano: 'level1/4.0.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene19", pano: 'level1/4.1.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene20", pano: 'level1/4.2.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene21", pano: 'level1/4.3.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene22", pano: 'level1/4.4.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene23", pano: 'level1/4.5.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene24", pano: 'level1/4.6.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene26", pano: 'level1/5.0.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene27", pano: 'level1/5.1.jpg', pitch: 20, yaw: 2, roll: 3 },
    ],

    'level2': [
        { sceneId: "scene28", pano: 'level2/4.2.jpg', pitch: 20, yaw: 2, roll: 3 },


        ]


    
};

// Updated navigation map to handle multiple hotspots per scene
const navigationMap = {
    "scene1": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene7", cssClass: "custom-arrow", targetYaw: 4, targetPitch: 25},
            { pitch: -10, yaw: 70, text: "", sceneId: "scene2", cssClass: "custom-arrow", targetYaw: 50, targetPitch: -2},
            { pitch: -20, yaw: -70, text: "", sceneId: "scene6", cssClass: "custom-arrow", targetYaw: -90, targetPitch: -20 }
        ]
    },
    "scene2": {
        hotspots: [
            { pitch: -10, yaw: -70, text: "", sceneId: "scene1", cssClass: "custom-arrow", targetYaw: -50, targetPitch: 10 },
            { pitch: -10, yaw: 70, text: "", sceneId: "scene3", cssClass: "custom-arrow", targetYaw: 50, targetPitch: -2 }
        ]
    },
    "scene3": {
        hotspots: [
            { pitch: -20, yaw: -70, text: "", sceneId: "scene2", cssClass: "custom-arrow", targetYaw: -50, targetPitch: 10},
            { pitch: -10, yaw: 70, text: "", sceneId: "scene4", cssClass: "custom-arrow", targetYaw: 50, targetPitch: -2 }
        ]
    },
    "scene4": {
        hotspots: [
            { pitch: -10, yaw: -70, text: "", sceneId: "scene3", cssClass: "custom-arrow", targetYaw: -50, targetPitch: 10 },
            { pitch: -10, yaw: 70, text: "", sceneId: "scene5", cssClass: "custom-arrow", targetYaw: 50, targetPitch: -2 }

        ]
    },
    "scene5": {
        hotspots: [
            { pitch: -10, yaw: -100, text: "", sceneId: "scene4", cssClass: "custom-arrow", targetYaw: -50, targetPitch: 10},
        ]
    },
    "scene6": {
        
        hotspots: [
            { pitch: -30, yaw: 100, text: "", sceneId: "scene1", cssClass: "custom-arrow", targetYaw: 80, targetPitch: -5},

        ]
        
    },
    "scene7": {
        hotspots: [
            { pitch: -8, yaw: 5, text: "", sceneId: "scene8", cssClass: "custom-arrow", targetPitch: 25 },
            { pitch: -80, yaw: -180, text: "", sceneId: "scene1", cssClass: "custom-arrow", targetYaw: 20, targetPitch: 2 }

        ]
    },
    "scene8": {
        hotspots: [
            { pitch: -8, yaw: 5, text: "", sceneId: "scene11", cssClass: "custom-arrow", targetPitch: 20 },
            { pitch: -35, yaw: -95, text: "", sceneId: "scene9", cssClass: "custom-arrow",targetYaw: 10, targetPitch: 8 },
            { pitch: -5, yaw: -105, type: "", text: "Self Service Book Return Kiosk", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "selfKiosk" }} ,
            { pitch: -15, yaw: -180, text: "", sceneId: "scene7", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }

        ]
    },
    "scene9": {
        hotspots: [
            { pitch: -15, yaw: 10, text: "", sceneId: "scene10", cssClass: "custom-arrow",targetYaw: 12, targetPitch: 8 },
            { pitch: -60, yaw: -160, text: "", sceneId: "scene8", cssClass: "custom-arrow", targetYaw: 60, targetPitch: -5},
            { pitch: -5, yaw: -105, type: "info", text: "Self Kiosk Return Book", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "type": "image", "src": "imageinfo.png" }} ,


    
        ]
    },
    "scene10": {
        hotspots: [
            { pitch: -50, yaw: -160, text: "", sceneId: "scene9", cssClass: "custom-arrow", targetYaw: -165, targetPitch: -20}

        ]
    },
    "scene11": {
        hotspots: [
            { pitch: -10, yaw: -1, text: "", sceneId: "scene13", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -20  },
            { pitch: -55, yaw: -210, text: "", sceneId: "scene8", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -20 }

        ]
    },
    "scene13": {
        hotspots: [
            { pitch: -30, yaw: 100, text: "", sceneId: "scene14", cssClass: "custom-arrow", targetPitch: 20 },
            { pitch: -40, yaw: -120, text: "", sceneId: "scene18", cssClass: "custom-arrow",targetYaw: 7, targetPitch: 30 },
            { pitch: -5, yaw: -8, text: "", sceneId: "scene11", cssClass: "custom-arrow" }

        ]
    },
    "scene14": {
        hotspots: [
            { pitch: 20, yaw: 6, type: "info", text: "Library Counter Information", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "counter" }} ,
            { pitch: -20, yaw: 100, text: "", sceneId: "scene15", cssClass: "custom-arrow",targetYaw: 5, targetPitch: 20},
            { pitch: -50, yaw: -180, text: "", sceneId: "scene18", cssClass: "custom-arrow",targetYaw: 70, targetPitch: -10 },
            { pitch: -50, yaw: -120, text: "", sceneId: "scene13", cssClass: "custom-arrow" }

        ]
    },
    "scene15": {
        hotspots: [
            { pitch: -10, yaw: 5, text: "", sceneId: "scene16", cssClass: "custom-arrow", targetYaw: 5, targetPitch: 25 },
            { pitch: -10, yaw: 60, text: "", sceneId: "scene26", cssClass: "custom-arrow" },
            { pitch: -40, yaw: -180, text: "", sceneId: "scene14", cssClass: "custom-arrow",targetYaw: -90, targetPitch: -20 },
            { pitch: 20, yaw: 45, type: "info", text: "Digital Corner", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "digitalCorner" }} ,


        ]
    },
    "scene16": {
        hotspots: [
            { pitch: 30, yaw: -5, type: "info", text: "Reserved Carrel", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "reservedCarrel" }} ,
            { pitch: -50, yaw: -170, text: "", sceneId: "scene15", cssClass: "custom-arrow",targetYaw: -160, targetPitch: -20 }

        ]
    },
    
    "scene18": {
        hotspots: [
            { pitch: -30, yaw: 80, text: "", sceneId: "scene19", cssClass: "custom-arrow",targetYaw: 70, targetPitch: -10 },
            { pitch: -40, yaw: -100, text: "", sceneId: "scene14", cssClass: "custom-arrow" },
            { pitch: -40, yaw: -160, text: "", sceneId: "scene13", cssClass: "custom-arrow" }


        ]
    },
    "scene19": {
        hotspots: [
            { pitch: -3, yaw: 5, type: "info", text: "Reference Information", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "reference" }},
            { pitch: -40, yaw: 80, text: "", sceneId: "scene20", cssClass: "custom-arrow" },
            { pitch: -60, yaw: 200, text: "", sceneId: "scene22", cssClass: "custom-arrow" },
            { pitch: -40, yaw: -80, text: "", sceneId: "scene18", cssClass: "custom-arrow" }

        ]
    },
    "scene20": {
        hotspots: [
            { pitch: -10, yaw: 50, text: "", sceneId: "scene21", cssClass: "custom-arrow" },
            { pitch: -50, yaw: -180, text: "", sceneId: "scene19", cssClass: "custom-arrow" }

        ]
    },
    "scene21": {
        hotspots: [
            { pitch: -10, yaw: 1, text: "", sceneId: "scene21", cssClass: "custom-arrow" },
            { pitch: -20, yaw: 80, text: "", sceneId: "scene20", cssClass: "custom-arrow" }

        ]
    },
    "scene22": {
        hotspots: [
            { pitch: -20, yaw: 5, text: "", sceneId: "scene23", cssClass: "custom-arrow" },
            { pitch: -60, yaw: -180, text: "", sceneId: "scene19", cssClass: "custom-arrow" }

        ]
    },
    "scene23": {
            hotspots: [
                { pitch: -30, yaw: 5, text: "", sceneId: "scene24", cssClass: "custom-arrow" },
                { pitch: -40, yaw: -200, text: "", sceneId: "scene22", cssClass: "custom-arrow" }

            ]
        },
    "scene24": {
            hotspots: [
                { pitch: -20, yaw: 5, text: "", sceneId: "scene24", cssClass: "custom-arrow" },
                { pitch: -60, yaw: -180, text: "", sceneId: "scene23", cssClass: "custom-arrow" }

            ]
        },

    "scene26": {
        hotspots: [
            { pitch: -10, yaw: 5, text: "", sceneId: "scene27", cssClass: "custom-arrow" },
            { pitch: -60, yaw: -180, text: "", sceneId: "scene15", cssClass: "custom-arrow" }

        ]
    },
    "scene27": {
        hotspots: [
            { pitch: -60, yaw: -90, text: "", sceneId: "scene26", cssClass: "custom-arrow" }

        ]
   
    },
    "scene28": {
        hotspots: [
            { pitch: -60, yaw: -90, text: "", sceneId: "scene21", cssClass: "custom-arrow" }


        ]
   
    }





    
    // Continue for other scenes if needed
};

document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.panorama-container');
    console.log("Found containers:", containers); // Debug: Check containers
    if (containers.length === 0) {
        console.error("No .panorama-container elements found.");
        return;
    }
    containers.forEach(container => {
        container.addEventListener('wheel', function (event) {
            event.preventDefault(); // Prevent default zooming behavior
        });
    });
});



// Function to add all hotspots for a scene based on the navigation map
function addNavigationHotspots(sceneId) {
    const hotspots = [];
    const navigation = navigationMap[sceneId];

    if (navigation && navigation.hotspots) {
        navigation.hotspots.forEach(hotspot => {
            hotspots.push({
                pitch: hotspot.pitch,
                yaw: hotspot.yaw,
                roll: 3, // Maintain roll consistency for hotspots
                type: "scene",
                text: hotspot.text,
                sceneId: hotspot.sceneId,
                cssClass: hotspot.cssClass,
                clickHandlerFunc: hotspot.clickHandlerFunc, // Ensure this is passed
                clickHandlerArgs: hotspot.clickHandlerArgs, // Ensure arguments are passed
                targetYaw: hotspot.targetYaw || 0, // Default to 0 if not set
                targetPitch: hotspot.targetPitch || 0 // Default to 0 if not set
            });
        });
    }

    return hotspots;
}


function preloadNextScene(sceneId, level) {
    const nextScene = levels[level].find(scene => scene.sceneId === sceneId); // Adjust 'level1' dynamically
    if (nextScene) {
        const img = new Image();
        img.src = nextScene.pano; // Cache next panorama image
    }
}
window.preloadNextScene = preloadNextScene;

// Function to start the tour
function beginTour() {
    console.log("Begin Tour button clicked!");
    const welcomeContainer = document.querySelector('.welcome-container');
    const tourPage = document.getElementById('tourPage');

    if (!welcomeContainer || !tourPage) {
        console.error("Elements not found: '.welcome-container' or '#tourPage'");
        return;
    }

    welcomeContainer.classList.add('hidden');
    tourPage.classList.remove('hidden');
}

// Attach to global scope
window.beginTour = beginTour;


// Function to initialize the viewer with multiple scenes and hotspots for each level
function initializeEquirectangularViewer(containerId, scenes) {
    const sceneConfigurations = {};

    // Configure scenes
    scenes.forEach(scene => {
        sceneConfigurations[scene.sceneId] = {
            type: "equirectangular",
            panorama: scene.pano,
            autoLoad: true, // Automatically preload this panorama
            hfov: 130, // Horizontal field of view
            yaw: scene.yaw || scene.targetYaw ||0,
            pitch: scene.pitch || scene.targetPitch || 0,
            maxPitch: 180,   //vertical 
            minPitch: -180,
            maxYaw: 180, // Limit how far users can pan horizontally
            minYaw: -180,
            yawStep: 5, // Controls how far left/right keys move (lower = smoother)
            pitchStep: 2,
            hotSpots: addNavigationHotspots(scene.sceneId),

        };
    });

    // Initialize Pannellum viewer
    const viewer = pannellum.viewer(containerId, {
        default: {
            firstScene:scenes[0].sceneId, // Start with the first scene
            autoLoad: true,
            sceneFadeDuration: 0, // Smooth fade transition in milliseconds
            loadingText: '' // Remove the "Loading..." text
        
        },
        scenes: sceneConfigurations,
        pitchLimits: [-30, 30], // Constrain vertical movement
        rollLimits: [3, 3]  // Restrict rotational tilt

    });

    
  viewer.on('keydown', function(event) {
      const key = event.key;
      if (key === 'ArrowLeft') {
          viewer.setYaw(viewer.getYaw() - 10); // Move left
      } else if (key === 'ArrowRight') {
          viewer.setYaw(viewer.getYaw() + 10); // Move right
      } else if (key === 'ArrowDown') {
          viewer.setPitch(Math.min(viewer.getPitch() + 5, 30)); // Move down
      } else if (key === 'ArrowUp') {
          viewer.setPitch(Math.max(viewer.getPitch() - 5, -30)); // Move up
      }
   
    event.preventDefault();
});


  // Enforce roll lock on scene changes
  viewer.on('scenechange', function () {
   
});



 return viewer;


}
// Function to show the appropriate level page
function showLevels(level) {
    const containerId = 'panorama' + level.slice(-1);
    document.getElementById('tourPage').classList.add('hidden');
    document.getElementById('level1Page').classList.add('hidden');
    document.getElementById('level2Page').classList.add('hidden');
    document.getElementById('level3Page').classList.add('hidden');
    document.getElementById('level4Page').classList.add('hidden');

    document.getElementById(level + 'Page').classList.remove('hidden');
    initializeEquirectangularViewer(containerId, levels[level]);
}
window.showLevels = showLevels;

// Function to toggle the side menu
function toggleMenu() {
    const sideNav = document.getElementById('sideNavigation');
    const arrowIcon = document.getElementById('arrow-icon');

    if (sideNav.classList.contains('active')) {
        sideNav.classList.remove('active');
        arrowIcon.classList.replace('fa-chevron-left', 'fa-chevron-right'); // Switch to right-facing arrow
    } else {
        sideNav.classList.add('active');
        arrowIcon.classList.replace('fa-chevron-right', 'fa-chevron-left'); // Switch to left-facing arrow
    }
}
window.toggleMenu = toggleMenu;

// Function to show the appropriate level page or to go back
function showTourPage() {
    document.getElementById('level1Page').classList.add('hidden');
    document.getElementById('level2Page').classList.add('hidden');
    document.getElementById('level3Page').classList.add('hidden');
    document.getElementById('level4Page').classList.add('hidden');
    document.getElementById('tourPage').classList.remove('hidden');
}
window.showTourPage = showTourPage;


function showDatabaseInfoModal(hotSpotDiv, args) {
    const category = args.category; // Get the category passed via `clickHandlerArgs`

    if (!category) {
        alert("No category specified for this hotspot.");
        return;
    }

    // Reference the Firebase path
    const infoRef = ref(database, `libraryInfo/${category}`);

    // Fetch the information from Firebase
    get(infoRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const info = snapshot.val();

                // Get modal elements
                const modal = document.getElementById("infoModal");
                const infoTitle = document.getElementById("infoTitle");
                const infoDescription = document.getElementById("infoDescription");

                // Update modal content
                infoTitle.textContent = info.title || "No Title Available";
                infoDescription.textContent = info.description || "No Description Available";

                // Show the modal
                modal.style.display = "block";
            } else {
                alert("No information found for this category.");
            }
        })
        .catch((error) => {
            console.error("Error fetching information from Firebase:", error);
        });
}

// Attach globally
window.showDatabaseInfoModal = showDatabaseInfoModal;
    

function closeModal() {
    const modal = document.getElementById("infoModal");
    modal.style.display = "none";
}

// Attach globally
window.closeModal = closeModal;

    