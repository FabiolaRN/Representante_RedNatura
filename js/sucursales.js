const sucursales = [
  { id: 1, nombre: "Coyoacán", estado: "CDMX" },
  { id: 2, nombre: "Vallejo", estado: "CDMX" },
  { id: 3, nombre: "Campeche", estado: "Campeche" },
  { id: 4, nombre: "Cancún", estado: "Quintana Roo" },
  { id: 5, nombre: "Cárdenas", estado: "Tabasco" },
  { id: 6, nombre: "Ciudad Juárez", estado: "Chihuahua" },
  { id: 7, nombre: "Ciudad Obregón", estado: "Sonora" },
  { id: 8, nombre: "Ciudad Nezahualcóyotl", estado: "Edomex" },
  { id: 9, nombre: "Coatzacoalcos", estado: "Veracruz" },
  { id: 10, nombre: "Comalcalco", estado: "Tabasco" },
  { id: 11, nombre: "Comitán", estado: "Chiapas" },
  { id: 12, nombre: "Córdoba", estado: "Veracruz" },
  { id: 13, nombre: "Culiacán", estado: "Sinaloa" },
  { id: 14, nombre: "Ecatepec", estado: "Edomex" },
  { id: 15, nombre: "Irapuato", estado: "Guanajuato" },
  { id: 16, nombre: "Los Mochis", estado: "Sinaloa" },
  { id: 17, nombre: "Mazatlán", estado: "Sinaloa" },
  { id: 18, nombre: "Mérida", estado: "Yucatán" },
  { id: 19, nombre: "Mexicali", estado: "Baja California" },
  { id: 20, nombre: "Mixquiahuala", estado: "Hidalgo" },
  { id: 21, nombre: "Monterrey", estado: "Nuevo León" },
  { id: 22, nombre: "Morelia", estado: "Michoacán" },
  { id: 23, nombre: "Oaxaca", estado: "Oaxaca" },
  { id: 24, nombre: "Pachuca", estado: "Hidalgo" },
  { id: 25, nombre: "Puebla", estado: "Puebla" },
  { id: 26, nombre: "Puerto Vallarta", estado: "Jalisco" },
  { id: 27, nombre: "Querétaro", estado: "Querétaro" },
  { id: 28, nombre: "Reynosa", estado: "Tamaulipas" },
  { id: 29, nombre: "San Cristóbal de las Casas", estado: "Chiapas" },
  { id: 30, nombre: "San Luis Potosí", estado: "San Luis Potosí" },
  { id: 31, nombre: "Tacámbaro", estado: "Michoacán" },
  { id: 32, nombre: "Tampico", estado: "Tamaulipas" },
  { id: 33, nombre: "Tapachula", estado: "Chiapas" },
  { id: 34, nombre: "Tuzutlán", estado: "Puebla" }
];

// Estados únicos para el chatbot
const estados = [
  "Campeche", "Quintana Roo", "Tabasco", "Chihuahua", "Sonora", "Edomex",
  "Veracruz", "Chiapas", "CDMX", "Sinaloa", "Guanajuato", "Yucatán",
  "Baja California", "Hidalgo", "Nuevo León", "Michoacán", "Oaxaca",
  "Puebla", "Jalisco", "Querétaro", "Tamaulipas", "San Luis Potosí"
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
      <div style="margin-top: 1.5rem;">
        <a href="https://wa.me/5555070734?text=Estoy%20interesado%20en%20la%20sucursal%20de%20${encodeURIComponent(sucursal.nombre)}" target="_blank" class="btn-contacto" style="display: block; width: 100%;">💬 Estoy Interesado</a>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Función para encontrar sucursal por estado
function encontrarSucursalesPorEstado(estado) {
  return sucursales.filter(s => s.estado === estado);
}
