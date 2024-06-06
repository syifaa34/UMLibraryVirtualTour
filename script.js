function beginTour() {
    document.querySelector('.welcome-container').classList.add('hidden');
    document.getElementById('tourPage').classList.remove('hidden');
}

function showLevels(level) {
    document.getElementById('tourPage').classList.add('hidden');
    document.getElementById('levelsPage').classList.remove('hidden');
    const levelsContainer = document.getElementById('levelsContainer');
    levelsContainer.innerHTML = `<h2>${level.toUpperCase()}</h2><p>Details about ${level}...</p>`;
}

function showTourPage() {
    document.getElementById('levelsPage').classList.add('hidden');
    document.getElementById('tourPage').classList.remove('hidden');
}

// Include header
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    });
