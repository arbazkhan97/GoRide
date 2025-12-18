

    const vehicles = [
      { name: 'Sedan', type: 'sedan', icon: 'fa-car', desc: 'Comfort for small family' },
      { name: 'SUV', type: 'suv', icon: 'fa-truck-monster', desc: 'More space & power' },
      { name: 'Luxury', type: 'luxury', icon: 'fa-car-side', desc: 'Premium comfort ride' },
      { name: 'Hatchback', type: 'hatchback', icon: 'fa-car-rear', desc: 'Budget friendly' },
      { name: 'Tempo Traveller', type: 'tempo', icon: 'fa-bus', desc: 'Group travel best' },
      { name: 'Mini Truck', type: 'mini-truck', icon: 'fa-truck', desc: 'Goods & luggage' },
      { name: 'Pickup 4x4', type: 'pickup', icon: 'fa-truck-pickup', desc: 'Rough terrain ride' },
      { name: 'Electric Car', type: 'ev', icon: 'fa-bolt', desc: 'Eco friendly travel' },
      { name: 'Van', type: 'van', icon: 'fa-van-shuttle', desc: 'Office & family' },
      { name: '10 Wheeler Truck', type: '10wheeler', icon: 'fa-truck-ramp-box', desc: 'Heavy transport option' }
    ];

    const vehicleList = document.getElementById('vehicleList');

    function renderVehicles() {
      vehicleList.innerHTML = vehicles.map(v => `
        <div class="vehicle-card">
          <div class="vehicle-info" style="text-align:center">
            <i class="fa-solid ${v.icon}" style="font-size:3rem;color:var(--primary)"></i>
            <h3 style="margin-top:1rem">${v.name}</h3>
            <p>${v.desc}</p>
            <button class="btn" style="margin-top:1rem" onclick="bookVehicle('${v.name}')">Book Now</button>
          </div>
        </div>
      `).join('');
    }

    function getDistance(lat1, lon1, lat2, lon2) {
      const R = 6371;
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLon = (lon2 - lon1) * Math.PI / 180;
      const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLon/2) * Math.sin(dLon/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      return (R * c).toFixed(2);
    }

    async function getCoordinates(place) {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${place}`);
      const data = await res.json();
      if (!data.length) throw new Error('Location not found');
      return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
    }

    async function handleBooking(e) {
      e.preventDefault();
      const pickup = document.getElementById('pickup').value;
      const drop = document.getElementById('drop').value;
      const resultBox = document.getElementById('distanceResult');

      try {
        resultBox.innerText = 'Calculating distance...';
        const p1 = await getCoordinates(pickup);
        const p2 = await getCoordinates(drop);
        const distance = getDistance(p1.lat, p1.lon, p2.lat, p2.lon);
        resultBox.innerText = `Distance between locations: ${distance} KM`;
        // auto scroll removed
      } catch {
        resultBox.innerText = 'Unable to calculate distance. Try valid locations.';
      }
    }

    function sendMail(e) {
      e.preventDefault();
      const name = document.getElementById('cname').value;
      const email = document.getElementById('cemail').value;
      const msg = document.getElementById('cmsg').value;
      const body = `Name: ${name}%0AEmail: ${email}%0AMessage: ${msg}`;
      window.location.href = `mailto:arbazkhan97431@gmail.com?subject=GoRide Contact&body=${body}`;
    }

    renderVehicles();
  