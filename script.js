function showInfo() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('info-screen').style.display = 'flex';
}

function showMap() {
    document.getElementById('info-screen').style.display = 'none';
    document.getElementById('map-screen').style.display = 'flex';
}

function startTour() {
    document.getElementById('map-screen').style.display = 'none';
    document.getElementById('tourFrame').style.display = 'block';
}
