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
        { sceneId: "scene8", pano: 'level1/L13.0.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene9", pano: 'level1/3.1.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene10", pano: 'level1/3.2.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene11", pano: 'level1/L13.3.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene13", pano: 'level1/L13.5.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene14", pano: 'level1/L13.6.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene15", pano: 'level1/L13.7.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene16", pano: 'level1/3.8.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene17", pano: 'level1/3.9.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene18", pano: 'level1/L14.0.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene19", pano: 'level1/L14.1.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene20", pano: 'level1/L14.2.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene21", pano: 'level1/L14.3.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene22", pano: 'level1/L14.4.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene23", pano: 'level1/L14.5.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene24", pano: 'level1/4.6.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene26", pano: 'level1/L15.0.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene27", pano: 'level1/L15.1.jpg', pitch: 20, yaw: 2, roll: 3 },

    ],
    'level2': [
        { sceneId: "scene28", pano: 'level2/L21.0.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene29", pano: 'level2/L21.1.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene30", pano: 'level2/L21.2.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene31", pano: 'level2/L21.3.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene32", pano: 'level2/L21.4.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene33", pano: 'level2/L22.0.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene34", pano: 'level2/L22.1.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene35", pano: 'level2/L22.2.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene36", pano: 'level2/L22.3.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene37", pano: 'level2/L23.0.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene38", pano: 'level2/L23.1.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene39", pano: 'level2/L23.2.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene40", pano: 'level2/L23.3.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene41", pano: 'level2/L23.4.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene42", pano: 'level2/L23.5.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene43", pano: 'level2/L23.6.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene44", pano: 'level2/L23.7.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene45", pano: 'level2/L23.8.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene46", pano: 'level2/L23.9.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene47", pano: 'level2/L24.0.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene48", pano: 'level2/L24.1.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene49", pano: 'level2/L24.2.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene50", pano: 'level2/L24.3.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene51", pano: 'level2/L24.4.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene52", pano: 'level2/L24.5.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene53", pano: 'level2/L24.6.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene54", pano: 'level2/L24.7.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene55", pano: 'level2/L24.8.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene56", pano: 'level2/L24.9.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene57", pano: 'level2/L27.0.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene58", pano: 'level2/L27.1.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene59", pano: 'level2/L27.2.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene60", pano: 'level2/L27.3.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene61", pano: 'level2/L27.4.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene62", pano: 'level2/L27.5.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene63", pano: 'level2/L27.6.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene64", pano: 'level2/L27.7.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene65", pano: 'level2/L27.8.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene66", pano: 'level2/L25.0.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene67", pano: 'level2/L25.1.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene68", pano: 'level2/L25.2.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene69", pano: 'level2/L26.0.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene70", pano: 'level2/L26.1.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene71", pano: 'level2/L26.2.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene72", pano: 'level2/L26.3.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene73", pano: 'level2/L26.4.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene74", pano: 'level2/L26.5.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene75", pano: 'level2/L26.6.jpg', pitch: 20, yaw: 2, roll: 3 }
    ],
    'level3': [
        { sceneId: "scene76", pano: 'level3/L31.0.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene77", pano: 'level3/L31.1.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene78", pano: 'level3/L31.2.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene79", pano: 'level3/L31.3.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene80", pano: 'level3/L31.4.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene81", pano: 'level3/L31.5.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene82", pano: 'level3/L31.6.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene83", pano: 'level3/L31.7.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene84", pano: 'level3/L31.8.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene85", pano: 'level3/L31.9.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene86", pano: 'level3/L32.0.jpg', pitch: 20, yaw: 2, roll: 3 },
    ],
    'level4': [
        { sceneId: "scene87", pano: 'level4/L41.0.jpg', pitch: 20, yaw: 1, roll: 3 },
        { sceneId: "scene88", pano: 'level4/L41.1.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene89", pano: 'level4/L41.2.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene90", pano: 'level4/L41.3.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene91", pano: 'level4/L41.4.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene92", pano: 'level4/L41.5.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene93", pano: 'level4/L41.6.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene94", pano: 'level4/L41.7.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene95", pano: 'level4/L41.8.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene96", pano: 'level4/L41.9.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene97", pano: 'level4/L42.0.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene98", pano: 'level4/L42.1.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene99", pano: 'level4/L42.2.jpg', pitch: 20, yaw: 2, roll: 3 },
        { sceneId: "scene100", pano: 'level4/L42.3.jpg', pitch: 20, yaw: 2, roll: 3 }
        
    ]
};

// Updated navigation map to handle multiple hotspots per scene
const navigationMap = {
    "scene1": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene7", cssClass: "custom-arrow", targetYaw: 4, targetPitch: 25},
            { pitch: -10, yaw: 70, text: "To Zus Coffee", sceneId: "scene2", cssClass: "custom-arrow", targetYaw: 50, targetPitch: -2},
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
            { pitch: -8, yaw: 5, text: "", sceneId: "scene8", cssClass: "custom-arrow",targetYaw: 1, targetPitch: 25 },
            { pitch: -80, yaw: -180, text: "", sceneId: "scene1", cssClass: "custom-arrow", targetYaw: 20, targetPitch: 2 }

        ]
    },
    "scene8": {
        hotspots: [
            { pitch: -8, yaw: 5, text: "", sceneId: "scene11", cssClass: "custom-arrow", targetYaw: -1, targetPitch: 20 },
            { pitch: -35, yaw: -95, text: "To Self Returning Book Kiosk", sceneId: "scene9", cssClass: "custom-arrow",targetYaw: 10, targetPitch: 8 },
            { pitch: -5, yaw: -100, type: "", text: "Self Returning Book Kiosk", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "selfKiosk" }} ,
            { pitch: -60, yaw: -184, text: "Exit", sceneId: "scene7", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }

        ]
    },
    "scene9": {
        hotspots: [
            { pitch: -15, yaw: 10, text: "", sceneId: "scene10", cssClass: "custom-arrow",targetYaw: 12, targetPitch: 8 },
            { pitch: -60, yaw: -160, text: "", sceneId: "scene8", cssClass: "custom-arrow", targetYaw: 60, targetPitch: -5},


    
        ]
    },
    "scene10": {
        hotspots: [
            { pitch: -50, yaw: -160, text: "", sceneId: "scene9", cssClass: "custom-arrow", targetYaw: -165, targetPitch: -20}

        ]
    },
    "scene11": {
        hotspots: [
            { pitch: -13, yaw: -1, text: "", sceneId: "scene13", cssClass: "custom-arrow", targetYaw: 1, targetPitch: 20  },
            { pitch: -55, yaw: -210, text: "", sceneId: "scene8", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -20 }

        ]
    },
    "scene13": {
        hotspots: [
            { pitch: -30, yaw: -70, text: "To Counter Information", sceneId: "scene14", cssClass: "custom-arrow", targetPitch: 20 },
            { pitch: -20, yaw: 60, text: "", sceneId: "scene18", cssClass: "custom-arrow",targetYaw: -2, targetPitch: 20 },
            { pitch: -60, yaw: -190, text: "", sceneId: "scene11", cssClass: "custom-arrow",targetYaw: -170, targetPitch: -20 }

        ]
    },
    "scene14": {
        hotspots: [
            { pitch: 20, yaw: 3, type: "info", text: "Library Counter Information", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "counter" }} ,
            { pitch: -20, yaw: 100, text: "", sceneId: "scene15", cssClass: "custom-arrow",targetYaw: 2, targetPitch: 20},
            { pitch: -50, yaw: -180, text: "", sceneId: "scene13", cssClass: "custom-arrow",targetYaw: 60, targetPitch: -5 }

        ]
    },
    "scene15": {
        hotspots: [
            { pitch: -10, yaw: 5, text: "To Reserved Carrel", sceneId: "scene16", cssClass: "custom-arrow", targetYaw: 5, targetPitch: 25 },
            { pitch: -20, yaw: 70, text: "To Digital Corner", sceneId: "scene26", cssClass: "custom-arrow",targetYaw: -1, targetPitch: 12 },
            { pitch: -60, yaw: -180, text: "", sceneId: "scene14", cssClass: "custom-arrow",targetYaw: -90, targetPitch: -20 },
            { pitch: 20, yaw: 42, type: "info", text: "Digital Corner", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "digitalCorner" }} ,
            { pitch: 7, yaw: -80, type: "info", text: "", cssClass: "buttonInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "collection" }} ,



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
            { pitch: -20, yaw: -60, text: "To Reference Counter", sceneId: "scene19", cssClass: "custom-arrow",targetYaw: 5, targetPitch: 20 },
            { pitch: -40, yaw: -200, text: "", sceneId: "scene13", cssClass: "custom-arrow",targetYaw: -90, targetPitch: -20 },
            { pitch: -10, yaw: 5, text: "To Play and Rest Section", sceneId: "scene20", cssClass: "custom-arrow",targetYaw: -2, targetPitch: 20 },


        ]
    },
    "scene19": {
        hotspots: [
            { pitch: -3, yaw: 5, type: "info", text: "Reference Information", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "reference" }},
            { pitch: -40, yaw: 80, text: "", sceneId: "scene20", cssClass: "custom-arrow",targetYaw: -2, targetPitch: 20 },
            { pitch: -50, yaw: 205, text: "", sceneId: "scene22", cssClass: "custom-arrow",targetYaw: 1, targetPitch: 10 },
            { pitch: -40, yaw: -80, text: "", sceneId: "scene18", cssClass: "custom-arrow",targetYaw: -180, targetPitch: -20 }

        ]
    },
    "scene20": {
        hotspots: [
            { pitch: -8, yaw: 30, text: "To Lift", sceneId: "scene21", cssClass: "custom-arrow" },
            { pitch: -50, yaw: -180, text: "", sceneId: "scene19", cssClass: "custom-arrow", targetYaw: -90, targetPitch: -10  },
            { pitch: 20, yaw: -40, type: "info", text: "Play and Rest Information", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "playandrest" }} ,



        ]
    },
    "scene21": {
    hotspots: [
        { pitch: -40, yaw: 100, text: "", sceneId: "scene20", cssClass: "custom-arrow",targetYaw: -180, targetPitch: -20 }
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
                { pitch: -20, yaw: 30, text: "", sceneId: "scene24", cssClass: "custom-arrow" },
                { pitch: -30, yaw: -180, text: "", sceneId: "scene22", cssClass: "custom-arrow" }

            ]
        },
    "scene24": {
            hotspots: [
                { pitch: -20, yaw: 5, text: "", sceneId: "scene7", cssClass: "custom-arrow",targetYaw: -170, targetPitch: -30 },
                { pitch: -60, yaw: -180, text: "", sceneId: "scene23", cssClass: "custom-arrow", targetYaw: -150, targetPitch: -20 }

            ]
        },

    "scene26": {
        hotspots: [
            { pitch: -20, yaw: 5, text: "", sceneId: "scene27", cssClass: "custom-arrow",targetYaw: 2, targetPitch: 12  },
            { pitch: -60, yaw: -180, text: "", sceneId: "scene15", cssClass: "custom-arrow" }

        ]
    },
    "scene27": {
        hotspots: [
            { pitch: -20, yaw: 60,  text: "", sceneId: "scene18", cssClass: "custom-arrow", targetYaw: 90, targetPitch: -20},
            { pitch: -50, yaw: -180, text: "", sceneId: "scene26", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }

        ]
   
    },

    //level 2
    "scene28": {
    hotspots: [
        { pitch: 5, yaw: -30, text: "Go to Level 2", sceneId: "scene29", cssClass: "custom-arrow" , targetYaw: -8, targetPitch: 15},
        { pitch: -70, yaw: -120, text: "Return to Level 1", sceneId: "scene21", cssClass: "custom-arrow" }
    ]
   
    },
    "scene29": {
        hotspots: [
            { pitch: -10, yaw: -50,  text: "", sceneId: "scene30", cssClass: "custom-arrow", targetYaw: -4, targetPitch: 25},
            { pitch: -53, yaw: -120, text: "go back", sceneId: "scene28", cssClass: "custom-arrow", targetYaw: -135, targetPitch: -40 }
        ]

    },
    "scene30": {
        hotspots: [
            { pitch: 5, yaw: -17,  text: "", sceneId: "scene31", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 22},
            { pitch: -40, yaw: -100, text: "go back", sceneId: "scene29", cssClass: "custom-arrow", targetYaw: -120, targetPitch: -20 }
        ]

    },
    "scene31": {
        hotspots: [
            { pitch: -7, yaw: -35,  text: "", sceneId: "scene33", cssClass: "custom-arrow", targetYaw: -6, targetPitch: 23},
            { pitch: -70, yaw: -190, text: "", sceneId: "scene30", cssClass: "custom-arrow", targetYaw: -150, targetPitch: -20 }
        ]

    },
    "scene33": {
        hotspots: [
            { pitch: -2, yaw: -2, text: "", sceneId: "scene37", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20 },
            { pitch: -10, yaw: 60, text: "To Study Spaces", sceneId: "scene47", cssClass: "custom-arrow", targetYaw: -4, targetPitch: 22 },
            { pitch: -30, yaw: -87,  text: "To Minda Hall", sceneId: "scene34", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 15},
            { pitch: -50, yaw: -200, text: "", sceneId: "scene31", cssClass: "custom-arrow", targetYaw: -177, targetPitch: -40 }
        ]

    },
    "scene34": {
        hotspots: [
            { pitch: 30, yaw: 40, type: "info", text: "Minda Hall", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "mindaHall" }},
            { pitch: -13, yaw: -2,  text: "", sceneId: "scene35", cssClass: "custom-arrow", targetYaw: -1, targetPitch: 23},
            { pitch: -70, yaw: -180, text: "", sceneId: "scene33", cssClass: "custom-arrow", targetYaw: -260, targetPitch: -5 }
        ]

    },
    "scene35": {
        hotspots: [
            { pitch: -10, yaw: 70,  text: "", sceneId: "scene36", cssClass: "custom-arrow", targetYaw: 1, targetPitch: 25},
            { pitch: -60, yaw: -200, text: "Exit Minda Hall", sceneId: "scene34", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30}
        ]

    },
    "scene36": {
        hotspots: [
            { pitch: -60, yaw: -180, text: "", sceneId: "scene35", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30}
        ]

    },
    "scene37": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene38", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene33", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene38": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene39", cssClass: "custom-arrow", targetYaw: 0.4, targetPitch: 20},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene37", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene39": {
        hotspots: [
            { pitch: -10, yaw: -5,  text: "", sceneId: "scene40", cssClass: "custom-arrow", targetYaw: -4, targetPitch: 20},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene38", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene40": {
        hotspots: [
            { pitch: -10, yaw: -5,  text: "", sceneId: "scene41", cssClass: "custom-arrow", targetYaw: 2, targetPitch: 20},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene39", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene41": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene42", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene40", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene42": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene43", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene41", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene43": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene44", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene42", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene44": {
        hotspots: [
            { pitch: 30, yaw: 53, type: "info", text: "Computers", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "computers" }},
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene45", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene43", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene45": {
        hotspots: [
            { pitch: -10, yaw: -5,  text: "", sceneId: "scene46", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene44", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene46": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene66", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene45", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene47": {
        hotspots: [
            { pitch: -8, yaw: -10,  text: "", sceneId: "scene48", cssClass: "custom-arrow", targetYaw: -4, targetPitch: 24},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene33", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene48": {
        hotspots: [
            { pitch: -8, yaw: -10,  text: "", sceneId: "scene49", cssClass: "custom-arrow", targetYaw: -0.5, targetPitch: 24},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene47", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene49": {
        hotspots: [
            { pitch: -30, yaw: -75,  text: "", sceneId: "scene50", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene48", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene50": {
        hotspots: [
            { pitch: -8, yaw: -10,  text: "To Toilet", sceneId: "scene51", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene49", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene51": {
        hotspots: [
            { pitch: 20, yaw: -2, type: "info", text: "Toilet", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "toilet" }},
            { pitch: -30, yaw: 50,  text: "kanan", sceneId: "scene52", cssClass: "custom-arrow", targetYaw: 4, targetPitch: 25},
            { pitch: -30, yaw: -90,  text: "kiri", sceneId: "scene53", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 25},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene50", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },


    "scene52": {
        hotspots: [
            { pitch: -60, yaw: -200, text: "", sceneId: "scene51", cssClass: "custom-arrow", targetYaw: -90, targetPitch: -10 }
        ]

    },
    "scene53": {
        hotspots: [
            { pitch: -8, yaw: -10,  text: "", sceneId: "scene54", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 25},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene51", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene54": {
        hotspots: [
            { pitch: -30, yaw: 50,  text: "", sceneId: "scene56", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 25},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene53", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    }, 
    "scene56": {
        hotspots: [
            { pitch: -10, yaw: -5,  text: "", sceneId: "scene57", cssClass: "custom-arrow", targetYaw: 10, targetPitch: 15},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene54", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },

    "scene57": {
        hotspots: [
            { pitch: -15, yaw: 8,  text: "", sceneId: "scene58", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 25},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene56", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene58": {
        hotspots: [
            { pitch: 30, yaw: 25, type: "info", text: "Carrel room", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "carrelRoom" }},
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene59", cssClass: "custom-arrow", targetYaw: -5, targetPitch: 25},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene57", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene59": {
        hotspots: [
            { pitch: -10, yaw: -5,  text: "", sceneId: "scene60", cssClass: "custom-arrow", targetYaw: -40, targetPitch: 10},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene58", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene60": {
        hotspots: [
            { pitch: -20, yaw: -50,  text: "", sceneId: "scene61", cssClass: "custom-arrow", targetYaw: 80, targetPitch: 10},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene59", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene61": {
        hotspots: [
            { pitch: -20, yaw: 70,  text: "", sceneId: "scene62", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene60", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene62": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene63", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -40, yaw: -210, text: "", sceneId: "scene61", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene63": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene64", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene62", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene64": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene65", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene63", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene65": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene75", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 25},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene64", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene66": {
        hotspots: [
            { pitch: -30, yaw: -90,  text: "To Book Shelves", sceneId: "scene67", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -18, yaw: 80,  text: "", sceneId: "scene69", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -60, yaw: -200, text: "back", sceneId: "scene46", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene67": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene68", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene66", cssClass: "custom-arrow", targetYaw: -240, targetPitch: -10 }
        ]

    },
    "scene68": {
        hotspots: [
            { pitch: -60, yaw: -200, text: "", sceneId: "scene67", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene69": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene70", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene66", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30}
        ]

    },
    "scene70": {
        hotspots: [
            { pitch: -10, yaw: -40,  text: "To 24 Hours Library", sceneId: "scene71", cssClass: "custom-arrow", targetYaw: -1, targetPitch: 23},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene69", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene71": {
        hotspots: [
            { pitch: 30, yaw: 30, type: "info", text: "ASEAN corner", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "aseanCorner" }},
            { pitch: 30, yaw: -30, type: "info", text: "24 hours library", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "24HoursLibrary" }},
            { pitch: -20, yaw: 50,  text: "", sceneId: "scene73", cssClass: "custom-arrow", targetYaw: 1, targetPitch: 20},
            { pitch: -60, yaw: -210, text: "", sceneId: "scene70", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    
    "scene73": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene74", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene71", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene74": {
        hotspots: [
            { pitch: -10, yaw: 50,  text: "", sceneId: "scene75", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene73", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },
    "scene75": {
        hotspots: [
            { pitch: -10, yaw: -50, text: "", sceneId: "scene65", cssClass: "custom-arrow", targetYaw: -120, targetPitch: -20 },
            { pitch: -60, yaw: -200, text: "", sceneId: "scene74", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }
        ]

    },

    //level 3
    "scene76": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene77", cssClass: "custom-arrow", targetYaw: 3, targetPitch: 22},
        

        ]
    },
    "scene77": {
        hotspots: [
            { pitch: 10, yaw: -50, type: "info", text: "Printing", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "printing" }},
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene78", cssClass: "custom-arrow", targetYaw: 4, targetPitch: 22},
            { pitch: -60, yaw: -180, text: "", sceneId: "scene76", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }

        ]
    },
    "scene78": {
        hotspots: [
            { pitch: 20, yaw: 50, type: "info", text: "Blue zone", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "blueZone" }},
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene79", cssClass: "custom-arrow", targetYaw: 4, targetPitch: 25},
            { pitch: -60, yaw: -180, text: "", sceneId: "scene77", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }

        ]
    },
    "scene79": {
        hotspots: [
            { pitch: 8, yaw: 23,  text: "", sceneId: "scene80", cssClass: "custom-arrow", targetYaw: 4, targetPitch: 22},
            { pitch: -60, yaw: -180, text: "", sceneId: "scene78", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }

        ]
    },
    "scene80": {
        hotspots: [
            { pitch: -10, yaw: -7,  text: "", sceneId: "scene81", cssClass: "custom-arrow", targetYaw: 4, targetPitch: 22},
            { pitch: -60, yaw: -180, text: "", sceneId: "scene79", cssClass: "custom-arrow",targetYaw: -170, targetPitch: -30 }

        ]
    },
    "scene81": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene82", cssClass: "custom-arrow", targetYaw: 4, targetPitch: 22},
            { pitch: -60, yaw: -180, text: "", sceneId: "scene80", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }

        ]
    },
    "scene82": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "To CoLA", sceneId: "scene83", cssClass: "custom-arrow", targetYaw: 4, targetPitch: 22},
            { pitch: -60, yaw: -180, text: "", sceneId: "scene81", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }

        ]
    },
    "scene83": {
        hotspots: [
            { pitch: 20, yaw: 60, type: "info", text: "CoLA", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "colA" }},
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene84", cssClass: "custom-arrow", targetYaw: 4, targetPitch: 22},
            { pitch: -60, yaw: -180, text: "", sceneId: "scene82", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30}

        ]
    },
    "scene84": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene85", cssClass: "custom-arrow", targetYaw: 4, targetPitch: 22},
            { pitch: -60, yaw: -180, text: "", sceneId: "scene83", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }

        ]
    },
    "scene85": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene86", cssClass: "custom-arrow", targetYaw: 4, targetPitch: 25},
            { pitch: -60, yaw: -180, text: "", sceneId: "scene84", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }

        ]
    },
    "scene86": {
        hotspots: [
            { pitch: -60, yaw: -180, text: "", sceneId: "scene85", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }

        ]
    },
    //level 4
    "scene87": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene88", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},

        ]
    },
    "scene88": {
        hotspots: [
            { pitch: -10, yaw: 5,  text: "", sceneId: "scene89", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -60, yaw: -180, text: "", sceneId: "scene87", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }

        ]
    },
    "scene89": {
        hotspots: [
            { pitch: 20, yaw: -11, type: "info", text: "SDG Corner", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "SDGCorner" }},
            { pitch: -10, yaw: 11,  text: "To SDG Corner", sceneId: "scene90", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 25},
            { pitch: -60, yaw: -180, text: "", sceneId: "scene88", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }

        ]
    },
    "scene90": {
        hotspots: [
            { pitch: -8, yaw: -5,  text: "", sceneId: "scene91", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 22},
            { pitch: -60, yaw: -200, text: "", sceneId: "scene89", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }

        ]
    },
    "scene91": {
        hotspots: [
            { pitch: -40, yaw: -80,  text: "", sceneId: "scene92", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 22},
            { pitch: -60, yaw: -180, text: "", sceneId: "scene90", cssClass: "custom-arrow",targetYaw: -170, targetPitch: -30 }

        ]
    },
    "scene92": {
        hotspots: [
            { pitch: -5, yaw: -4,  text: "", sceneId: "scene95", cssClass: "custom-arrow", targetYaw: -2.5, targetPitch: 20},
            { pitch: -30, yaw: -70,  text: "To Computer Lab 2", sceneId: "scene93", cssClass: "custom-arrow", targetYaw: -2.5, targetPitch: 16},
            { pitch: -60, yaw: -180, text: "", sceneId: "scene91", cssClass: "custom-arrow", targetYaw: 80, targetPitch: 10 }

        ]
    },
    "scene93": {
        hotspots: [
            { pitch: 30, yaw: 27, type: "info", text: "Computer Lab 2", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "CompLab2" }},
            { pitch: -15, yaw: 5,  text: "", sceneId: "scene94", cssClass: "custom-arrow", targetYaw: 1, targetPitch: 18},
            { pitch: -60, yaw: -180, text: "", sceneId: "scene92", cssClass: "custom-arrow", targetYaw: -180, targetPitch: -20 }

        ]
    },
    "scene94": {
        hotspots: [
            { pitch: -70, yaw: -160, text: "", sceneId: "scene93", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30}

        ]
    },
    "scene95": {
        hotspots: [
            { pitch: -10, yaw: -4,  text: "", sceneId: "scene96", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -60, yaw: -180, text: "", sceneId: "scene92", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }

        ]
    },
    "scene96": {
        hotspots: [
            { pitch: -10, yaw: -4,  text: "", sceneId: "scene97", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20},
            { pitch: -60, yaw: -180, text: "", sceneId: "scene95", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }

        ]
    },
    "scene97": {
        hotspots: [
            { pitch: -10, yaw: -4, text: "", sceneId: "scene98", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20 },
            { pitch: -60, yaw: -180, text: "", sceneId: "scene96", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }

        ]
    },
    "scene98": {
        hotspots: [
            { pitch: -10, yaw: -50, text: "", sceneId: "scene100", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20 },
            { pitch: -30, yaw: 75, text: "", sceneId: "scene99", cssClass: "custom-arrow", targetYaw: -2, targetPitch: 20 },
            { pitch: -60, yaw: -180, text: "", sceneId: "scene97", cssClass: "custom-arrow", targetYaw: -170, targetPitch: -30 }

        ]
    },
    "scene99": {
        hotspots: [
            { pitch: -60, yaw: -180, text: "", sceneId: "scene98", cssClass: "custom-arrow", targetYaw: -90, targetPitch: -10 }

        ]
    },
    "scene100": {
        hotspots: [
            { pitch: -60, yaw: -180, text: "", sceneId: "scene98", cssClass: "custom-arrow", targetYaw: -200, targetPitch: -30 },
            { pitch: 33, yaw: 14, type: "info", text: "Musolla", cssClass: "custom-arrowInfo", clickHandlerFunc: showDatabaseInfoModal, clickHandlerArgs: { "category": "musolla" }},

        ]
    },
    
    
    
    
    
    
    
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
    const sideNavigation = document.getElementById('sideNavigation');
    const audio = document.getElementById('background-audio');
    const menuToggle = document.querySelector('.menu-toggle');


    if (!welcomeContainer || !tourPage || !sideNavigation || !menuToggle) {
        console.error("Elements not found: '.welcome-container', '#tourPage', or '#sideNavigation'");
        return;
    }

    welcomeContainer.classList.add('hidden');
    tourPage.classList.remove('hidden');
    sideNavigation.classList.remove('hidden');
    menuToggle.classList.remove('hidden');


}

// Attach to global scope
window.beginTour = beginTour;

function playWelcomeAudio() {
    const audio = document.getElementById('welcomeAudio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
window.playWelcomeAudio = playWelcomeAudio;

function toggleBackgroundAudio() {
    const audio = document.getElementById('backgroundAudio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
window.toggleBackgroundAudio = toggleBackgroundAudio;

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
            loadingText: '', // Remove the "Loading..." text
            
        
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

 // Refresh hotspots on scene change
    viewer.on('scenechange', (newSceneId) => {
        console.log(`Switching to scene: ${newSceneId}`); // Debug log
        addNavigationHotspots(newSceneId); // Re-add hotspots for the new scene
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
                const infoMedia = document.getElementById("infoMedia");

                // Update modal content
                infoTitle.textContent = info.title || "No Title Available";
                infoDescription.textContent = info.description || "No Description Available";

                // Add media content (image or video)
                let mediaHTML = "";
                if (info.mediaType === "image") {
                    mediaHTML = `<img src="${info.mediaURL}" alt="${info.title}" style="max-width: 100%; display: block; margin: 10px auto;">`;
                } else if (info.mediaType === "video") {
                    mediaHTML = `<video src="${info.mediaURL}" controls style="max-width: 100%; display: block; margin: 10px auto;"></video>`;
                }

                // Append media to the modal
                infoMedia.innerHTML = mediaHTML;

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



    