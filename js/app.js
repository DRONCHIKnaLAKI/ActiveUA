// Загрузка данных
async function loadActivities() {
  const response = await fetch('/data/activities.json');
  return await response.json();
}

// Инициализация карты
function initMap() {
  const map = L.map('map').setView([50.45, 30.52], 6);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);

  // Загрузка и отображение занятий
  loadActivities().then(activities => {
    activities.forEach(activity => {
      L.marker([activity.coords.lat, activity.coords.lng])
        .addTo(map)
        .bindPopup(`
          <h3>${activity.name}</h3>
          <p>${activity.address}, ${activity.city}</p>
          <p>Тип: ${activity.type === 'sport' ? 'Спорт' : 'Інтелект'}</p>
        `);
    });
  });
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', initMap);
