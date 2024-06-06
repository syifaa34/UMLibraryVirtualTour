function beginTour() {
    document.querySelector('.welcome-container').classList.add('hidden');
    document.getElementById('tourPage').classList.remove('hidden');
}

function showLevels(level) {
    document.getElementById('tourPage').classList.add('hidden');
    document.getElementById('levelsPage').classList.add('hidden');
    document.getElementById('level1Page').classList.add('hidden');
    document.getElementById('level2Page').classList.add('hidden');
    document.getElementById('level3Page').classList.add('hidden');
    document.getElementById('level4Page').classList.add('hidden');

    if (level === 'level1') {
        document.getElementById('level1Page').classList.remove('hidden');
        pannellum.viewer('panorama1', {
            "default": {
                "firstScene": "scene1",
                "sceneFadeDuration": 1000
            },
            "scenes": {
                "scene1": {
                    "type": "cubemap",
                    "cubeMap": [
                        'gambar/0.jpg',  // Front image
                        'gambar/1.jpg',  // Back image
                        'gambar/2.jpg',  // Left image
                        'gambar/3.jpg',  // Right image
                        'gambar/4.jpg',  // Up image
                        'gambar/5.jpg'   // Down image
                    ],
                    "hotSpots": [
                        {
                            "pitch": 0,
                            "yaw": 0,
                            "type": "scene",
                            "text": "Go to Scene 2",
                            "sceneId": "scene2"
                        }
                    ]
                },
                "scene2": {
                    "type": "cubemap",
                    "cubeMap": [
                        'images/0.jpg',  // Front image
                        'images/1.jpg',  // Back image
                        'images/2.jpg',  // Left image
                        'images/3.jpg',  // Right image
                        'images/4.jpg',  // Up image
                        'images/5.jpg'   // Down image
                    ],
                    "hotSpots": [
                        {
                            "pitch": 0,
                            "yaw": 180,
                            "type": "scene",
                            "text": "Go to Scene 1",
                            "sceneId": "scene1"
                        }
                    ]
                }
            }
        });
    } else if (level === 'level2') {
        document.getElementById('level2Page').classList.remove('hidden');
        pannellum.viewer('panorama2', {
            type: 'cubemap',
            cubeMap: [
                'images/0.jpg',  // Front image
                'images/1.jpg',  // Back image
                'images/2.jpg',  // Left image
                'images/3.jpg',  // Right image
                'images/4.jpg',  // Up image
                'images/5.jpg'   // Down image
            ],
            autoLoad: true
        });
    } else if (level === 'level3') {
        document.getElementById('level3Page').classList.remove('hidden');
        pannellum.viewer('panorama3', {
            type: 'cubemap',
            cubeMap: [
                'images/0.jpg',  // Front image
                'images/1.jpg',  // Back image
                'images/2.jpg',  // Left image
                'images/3.jpg',  // Right image
                'images/4.jpg',  // Up image
                'images/5.jpg'   // Down image
            ],
            autoLoad: true
        });
    } else if (level === 'level4') {
        document.getElementById('level4Page').classList.remove('hidden');
        pannellum.viewer('panorama4', {
            type: 'cubemap',
            cubeMap: [
                'images/0.jpg',  // Front image
                'images/1.jpg',  // Back image
                'images/2.jpg',  // Left image
                'images/3.jpg',  // Right image
                'images/4.jpg',  // Up image
                'images/5.jpg'   // Down image
            ],
            autoLoad: true
        });
    }
}

function showTourPage() {
    document.getElementById('levelsPage').classList.add('hidden');
    document.getElementById('level1Page').classList.add('hidden');
    document.getElementById('level2Page').classList.add('hidden');
    document.getElementById('level3Page').classList.add('hidden');
    document.getElementById('level4Page').classList.add('hidden');
    document.getElementById('tourPage').classList.remove('hidden');
}

// Include header
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    });
