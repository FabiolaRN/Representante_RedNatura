const sucursales = [
  { id: 1, nombre: "Coyoacán", estado: "CDMX", direccion: "Av. Coyoacán", telefono: "555-1234-5679", horario: "Lun - Sab: 9:00 AM - 8:00 PM", email: "coyoacan@rednatura.com" },
  { id: 2, nombre: "Vallejo", estado: "CDMX", direccion: "Av. Vallejo", telefono: "555-9876-5432", horario: "Lun - Sab: 9:30 AM - 8:30 PM", email: "vallejo@rednatura.com" }
];

// Estados únicos para el chatbot
const estados = [
  "CDMX"
];

// Función para cargar sucursales
function cargarSucursales() {
  const grid = document.getElementById('sucursales-grid');
  if (!grid) return;
  
  grid.innerHTML = '';

  sucursales.forEach(sucursal => {
    const card = document.createElement('div');
    card.className = 'sucursal-card';

    card.innerHTML = `
      <h3>📍 ${sucursal.nombre}</h3>
      <p><strong>${sucursal.estado}</strong></p>
      <p>📮 ${sucursal.direccion}</p>
      <p>📞 ${sucursal.telefono}</p>
      <p>⏰ ${sucursal.horario}</p>
      <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <a href="https://wa.me/5551234567?text=Estoy%20interesado%20en%20la%20sucursal%20de%20${encodeURIComponent(sucursal.nombre)}" target="_blank" class="btn-contacto" style="flex: 1;">💬 WhatsApp</a>
        <a href="mailto:fabiola250204@gmail.com?subject=Interés en sucursal ${sucursal.nombre}" class="btn-contacto" style="flex: 1;">📧 Email</a>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Función para encontrar sucursal por estado
function encontrarSucursalesPorEstado(estado) {
  return sucursales.filter(s => s.estado === estado);
}
