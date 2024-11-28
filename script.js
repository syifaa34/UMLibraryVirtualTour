// Define the levels and scenes with custom pitch, yaw, and roll values
const levels = {
    'level1': [
        { sceneId: "scene1", pano: 'level1/1.0.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene2", pano: 'level1/1.1.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene3", pano: 'level1/1.2.jpg', pitch: 5, yaw: -10, roll: 3 },
        { sceneId: "scene4", pano: 'level1/1.3.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene5", pano: 'level1/1.4.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene6", pano: 'level1/1.5.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene7", pano: 'level1/2.0.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene8", pano: 'level1/3.0.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene9", pano: 'level1/3.1.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene10", pano: 'level1/3.2.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene11", pano: 'level1/3.3.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene12", pano: 'level1/3.4.jpg', pitch: 20, yaw: 2, roll: 3 },
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
        { sceneId: "scene25", pano: 'level1/4.7.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene26", pano: 'level1/5.0.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene27", pano: 'level1/5.1.jpg', pitch: 20, yaw: 2, roll: 3 }


    
    ]
};

// Updated navigation map to handle multiple hotspots per scene
const navigationMap = {
    "scene1": {
        hotspots: [
            { pitch: -20, yaw: 15,  text: "To Scene 7", sceneId: "scene7", cssClass: "custom-arrow" },
            { pitch: -30, yaw: 70, text: "To Scene 2", sceneId: "scene2", cssClass: "custom-arrow" },
            { pitch: -30, yaw: -70, text: "To Scene 6", sceneId: "scene6", cssClass: "custom-arrow" }
        ]
    },
    "scene2": {
        hotspots: [
            { pitch: 10, yaw: -20, text: "Back to Scene 1", sceneId: "scene1", cssClass: "custom-arrow" },
            { pitch: 15, yaw: 45, text: "To Scene 3", sceneId: "scene3", cssClass: "custom-arrow" }
        ]
    },
    "scene3": {
        hotspots: [
            { pitch: 0, yaw: 10, text: "Back to Scene 2", sceneId: "scene2", cssClass: "custom-arrow" },
            { pitch: -5, yaw: 60, text: "To Scene 4", sceneId: "scene4", cssClass: "custom-arrow" }
        ]
    },
    "scene4": {
        hotspots: [
            { pitch: 0, yaw: 30, text: "Back to Scene 3", sceneId: "scene3", cssClass: "custom-arrow" },
            { pitch: -5, yaw: 60, text: "To Scene 5", sceneId: "scene5", cssClass: "custom-arrow" }

        ]
    },
    "scene5": {
        hotspots: [
            { pitch: 0, yaw: 30, text: "Back to Scene 4", sceneId: "scene4", cssClass: "custom-arrow" },
        ]
    },
    "scene6": {
        hotspots: [
            { pitch: 0, yaw: 30, text: "Back to Scene 1", sceneId: "scene1", cssClass: "custom-arrow" },

        ]
    },
    "scene7": {
        hotspots: [
            { pitch: 0, yaw: 30, text: "Enter the library", sceneId: "scene8", cssClass: "custom-arrow" },
            { pitch: -5, yaw: 60, text: "Go back", sceneId: "scene1", cssClass: "custom-arrow" }

        ]
    },
    "scene8": {
        hotspots: [
            { pitch: 10, yaw: 40, text: "To scene 11", sceneId: "scene11", cssClass: "custom-arrow" },
            { pitch: 0, yaw: 30, text: "To scene 9", sceneId: "scene9", cssClass: "custom-arrow" },
            { pitch: -5, yaw: 60, text: "Go back", sceneId: "scene7", cssClass: "custom-arrow" }

        ]
    },
    "scene9": {
        hotspots: [
            { pitch: 0, yaw: 30, text: "To scene 10", sceneId: "scene10", cssClass: "custom-arrow" },
            { pitch: -5, yaw: 60, text: "Go back", sceneId: "scene8", cssClass: "custom-arrow" },
            { pitch: -10, yaw: 45, type: "info", text: "Info 1", cssClass: "custom-arrowInfo", clickHandlerFunc: showInfoModal, clickHandlerArgs: { "type": "image", "src": "imageinfo.png" }} 

    
        ]
    },
    "scene10": {
        hotspots: [
            { pitch: -5, yaw: 60, text: "Go back", sceneId: "scene9", cssClass: "custom-arrow" }

        ]
    },
    "scene11": {
        hotspots: [
            { pitch: -5, yaw: 20, text: "To scene 12", sceneId: "scene12", cssClass: "custom-arrow" },
            { pitch: -5, yaw: 60, text: "Go back", sceneId: "scene8", cssClass: "custom-arrow" }

        ]
    },
    "scene12": {
        hotspots: [
            { pitch: -5, yaw: 5, text: "To scene 13", sceneId: "scene13", cssClass: "custom-arrow" },
            { pitch: -5, yaw: 60, text: "Go back", sceneId: "scene12", cssClass: "custom-arrow" }

        ]
    },
    "scene13": {
        hotspots: [
            { pitch: -5, yaw: 5, text: "To scene 14", sceneId: "scene14", cssClass: "custom-arrow" },
            { pitch: -5, yaw: 20, text: "To scene 18", sceneId: "scene18", cssClass: "custom-arrow" },
            { pitch: -5, yaw: 60, text: "Go back", sceneId: "scene12", cssClass: "custom-arrow" }

        ]
    },
    "scene14": {
        hotspots: [
            { pitch: -5, yaw: 5, text: "To scene 15", sceneId: "scene15", cssClass: "custom-arrow" },
            { pitch: -5, yaw: 20, text: "To scene 18", sceneId: "scene18", cssClass: "custom-arrow" },
            { pitch: -5, yaw: 60, text: "Go back", sceneId: "scene13", cssClass: "custom-arrow" }

        ]
    },
    "scene15": {
        hotspots: [
            { pitch: -5, yaw: 5, text: "To scene 16", sceneId: "scene16", cssClass: "custom-arrow" },
            { pitch: -5, yaw: 5, text: "To scene 26", sceneId: "scene26", cssClass: "custom-arrow" },
            { pitch: -5, yaw: 60, text: "Go back", sceneId: "scene14", cssClass: "custom-arrow" }

        ]
    },
    "scene16": {
        hotspots: [
            { pitch: -5, yaw: 5, text: "To scene 17", sceneId: "scene17", cssClass: "custom-arrow" },
            { pitch: -5, yaw: 60, text: "Go back", sceneId: "scene15", cssClass: "custom-arrow" }

        ]
    },
    "scene17": {
        hotspots: [
            { pitch: -5, yaw: 60, text: "Go back", sceneId: "scene16", cssClass: "custom-arrow" }

        ]
    },
    "scene18": {
        hotspots: [
            { pitch: -5, yaw: 5, text: "To scene 19", sceneId: "scene19", cssClass: "custom-arrow" },
            { pitch: -5, yaw: 20, text: "Go to scene 14", sceneId: "scene14", cssClass: "custom-arrow" },
            { pitch: -5, yaw: 60, text: "Go to scene 13", sceneId: "scene13", cssClass: "custom-arrow" }


        ]
    },
    "scene19": {
        hotspots: [
            { pitch: -5, yaw: 5, text: "To scene 20", sceneId: "scene20", cssClass: "custom-arrow" },
            { pitch: -5, yaw: 60, text: "Go back", sceneId: "scene18", cssClass: "custom-arrow" }

        ]
    },
    "scene20": {
        hotspots: [
            { pitch: -5, yaw: 5, text: "To scene 21", sceneId: "scene21", cssClass: "custom-arrow" },
            { pitch: -5, yaw: 60, text: "Go back", sceneId: "scene19", cssClass: "custom-arrow" }

        ]
    },
    "scene21": {
        hotspots: [
            { pitch: -5, yaw: 5, text: "To scene 22", sceneId: "scene22", cssClass: "custom-arrow" },
            { pitch: -5, yaw: 60, text: "Go back", sceneId: "scene20", cssClass: "custom-arrow" }

        ]
    },
    "scene22": {
        hotspots: [
            { pitch: -5, yaw: 60, text: "Go back", sceneId: "scene21", cssClass: "custom-arrow" }

        ]
    },
    

    "scene26": {
        hotspots: [
            { pitch: -5, yaw: 5, text: "To scene 27", sceneId: "scene27", cssClass: "custom-arrow" },
            { pitch: -5, yaw: 60, text: "Go back", sceneId: "scene15", cssClass: "custom-arrow" }

        ]
    },
    "scene27": {
        hotspots: [
            { pitch: -5, yaw: 60, text: "Go back", sceneId: "scene26", cssClass: "custom-arrow" }

        ]
   
    }



    
    // Continue for other scenes if needed
};

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

            });
        });
    }
    return hotspots;
}

pannellum.viewer('panorama', {
    hotSpotDebug: false,
    // other configuration options
});



// Function to lock the roll
function lockRoll() {
    const yaw = viewer.getYaw(); // Preserve yaw
    const pitch = viewer.getPitch(); // Preserve pitch
    viewer.setYaw(yaw); // Reapply yaw
    viewer.setPitch(pitch); // Reapply pitch
    viewer.setRoll(3); // Lock roll to 3
}

function preloadNextScene(sceneId) {
    const nextScene = levels['level1'].find(scene => scene.sceneId === sceneId); // Adjust 'level1' dynamically
    if (nextScene) {
        const img = new Image();
        img.src = nextScene.pano; // Cache next panorama image
    }
}
viewer.on('hotspotmouseover', (event) => {
    if (event.sceneId) {
        preloadNextScene(event.sceneId);
    }
});




// Function to initialize the viewer with multiple scenes and hotspots for each level
function initializeEquirectangularViewer(containerId, scenes) {
    const sceneConfigurations = {};

    // Configure scenes
    scenes.forEach(scene => {
        sceneConfigurations[scene.sceneId] = {
            type: 'equirectangular',
            panorama: scene.pano,
            autoLoad: true, // Automatically preload this panorama
            hfov: 110, // Horizontal field of view
            yaw: scene.yaw || 0,
            pitch: scene.pitch || 0,
            roll: 3,
            hotSpots: addNavigationHotspots(scene.sceneId),

        };
    });

    // Initialize Pannellum viewer
    const viewer = pannellum.viewer(containerId, {
        default: {
            firstScene:'scene1', // Start with the first scene
            autoLoad: true,
            sceneFadeDuration: 0, // Smooth fade transition in milliseconds
            loadingText: '' // Remove the "Loading..." text
        
        },
        scenes: sceneConfigurations,
        pitchLimits: [-30, 30], // Constrain vertical movement
        rollLimits: [3, 3]  // Restrict rotational tilt

    });

    

// Mouse interactions
viewer.on('mousedown', function() {
    lockRoll; // Lock roll when the mouse is clicked
});

viewer.on('mouseup', function() {
    lockRoll; // Ensure roll is locked when mouse interaction ends
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
    // Reapply roll lock
    lockRoll();
    event.preventDefault();
});

// Handle mouse scroll wheel interactions
document.getElementById('containerId').addEventListener('wheel', function(event) {
    lockRoll();
    event.preventDefault(); // Prevent default zooming behavior

});


  // Enforce roll lock on scene changes
  viewer.on('scenechange', function () {
    lockRoll(); // Reapply roll on scene change
});

  // Periodically enforce roll lock
  setInterval(function () {
    lockRoll(); // Ensure roll-lock is consistently applied
}, 50);


 return viewer;

// Ensure hotspots are active by default
function activateHotspots(sceneId) {
    const hotspots = navigationMap[sceneId]?.hotspots || [];
    hotspots.forEach(hotspot => {
        console.log(`Hotspot active: ${hotspot.text}`);
        // Optionally, add custom logic for activating hotspots visually or programmatically
    });
}


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


// Function to begin the tour
function beginTour() {
    document.querySelector('.welcome-container').classList.add('hidden');
    document.getElementById('tourPage').classList.remove('hidden');
}

// Add a function to handle hotspot clicks
viewer.on('hotspotclick', function () {
    lockRoll(); // Lock roll when hotspots are clicked
});

// Function to show the appropriate level page or to go back
function showTourPage() {
    document.getElementById('level1Page').classList.add('hidden');
    document.getElementById('level2Page').classList.add('hidden');
    document.getElementById('level3Page').classList.add('hidden');
    document.getElementById('level4Page').classList.add('hidden');
    document.getElementById('tourPage').classList.remove('hidden');
}


// Function to show the modal for info hotspots
function showInfoModal(hotSpotDiv, args) {
    const modal = document.getElementById('infoModal');
    const infoImage = document.getElementById('infoImage');
    const infoVideo = document.getElementById('infoVideo');

    modal.style.display = 'block';

    infoImage.classList.add('hidden');
    infoVideo.classList.add('hidden');

    if (args.type === 'image') {
        console.log("Displaying image:", args.src); // Debug log
        infoImage.src = args.src;
        infoImage.classList.remove('hidden');
    } else if (args.type === 'video') {
        infoVideo.src = args.src;
        infoVideo.classList.remove('hidden');
    }
}

// Function to close the modal
function closeInfoModal() {
    document.getElementById('infoModal').style.display = 'none';
}


// Include header dynamically
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    });





    
    