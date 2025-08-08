document.getElementById('activityForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const activity = {
    name: document.getElementById('activityName').value,
    type: document.getElementById('activityType').value,
    city: document.getElementById('activityCity').value,
    address: document.getElementById('activityAddress').value,
    coords: {
      lat: parseFloat(document.getElementById('activityLat').value),
      lng: parseFloat(document.getElementById('activityLng').value)
    }
  };

  // В реальном проекте здесь будет отправка на сервер
  alert(`Заняття "${activity.name}" додано!`);
  e.target.reset();
});
