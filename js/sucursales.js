const sucursales = [
  { id: 1, nombre: "Campeche", estado: "Campeche", direccion: "Centro Histórico", telefono: "555-1234-5678", horario: "Lun - Sab: 9:00 AM - 8:00 PM", email: "campeche@rednatura.com" },
  { id: 2, nombre: "Cancún", estado: "Quintana Roo", direccion: "Zona Hotelera", telefono: "555-2345-6789", horario: "Lun - Sab: 10:00 AM - 9:00 PM", email: "cancun@rednatura.com" },
  { id: 3, nombre: "Cárdenas", estado: "Tabasco", direccion: "Centro", telefono: "555-3456-7890", horario: "Lun - Sab: 9:00 AM - 7:00 PM", email: "cardenas@rednatura.com" },
  { id: 4, nombre: "Ciudad Juárez", estado: "Chihuahua", direccion: "Avenida Principal", telefono: "555-4567-8901", horario: "Lun - Sab: 9:30 AM - 8:30 PM", email: "ciudadjuarez@rednatura.com" },
  { id: 5, nombre: "Ciudad Obregón", estado: "Sonora", direccion: "Centro Comercial", telefono: "555-5678-9012", horario: "Lun - Sab: 9:00 AM - 8:00 PM", email: "ciudadobregon@rednatura.com" },
  { id: 6, nombre: "Ciudad Nezahualcóyotl", estado: "Edomex", direccion: "Av. Benito Juárez", telefono: "555-6789-0123", horario: "Lun - Sab: 9:00 AM - 8:00 PM", email: "nezahualcoyotl@rednatura.com" },
  { id: 7, nombre: "Coatzacoalcos", estado: "Veracruz", direccion: "Centro", telefono: "555-7890-1234", horario: "Lun - Sab: 9:00 AM - 7:00 PM", email: "coatzacoalcos@rednatura.com" },
  { id: 8, nombre: "Comalcalco", estado: "Tabasco", direccion: "Av. Periférica", telefono: "555-8901-2345", horario: "Lun - Sab: 9:00 AM - 7:00 PM", email: "comalcalco@rednatura.com" },
  { id: 9, nombre: "Comitán", estado: "Chiapas", direccion: "Centro Histórico", telefono: "555-9012-3456", horario: "Lun - Sab: 9:00 AM - 7:00 PM", email: "comitan@rednatura.com" },
  { id: 10, nombre: "Córdoba", estado: "Veracruz", direccion: "Centro", telefono: "555-0123-4567", horario: "Lun - Sab: 9:00 AM - 7:00 PM", email: "cordoba@rednatura.com" },
  { id: 11, nombre: "Coyoacán", estado: "CDMX", direccion: "Av. Coyoacán", telefono: "555-1234-5679", horario: "Lun - Sab: 9:00 AM - 8:00 PM", email: "coyoacan@rednatura.com" },
  { id: 12, nombre: "Culiacán", estado: "Sinaloa", direccion: "Centro Comercial", telefono: "555-2345-6780", horario: "Lun - Sab: 9:00 AM - 8:00 PM", email: "culiacan@rednatura.com" },
  { id: 13, nombre: "Ecatepec", estado: "Edomex", direccion: "Blvd. Benito Juárez", telefono: "555-3456-7891", horario: "Lun - Sab: 9:30 AM - 8:30 PM", email: "ecatepec@rednatura.com" },
  { id: 14, nombre: "Irapuato", estado: "Guanajuato", direccion: "Centro", telefono: "555-4567-8902", horario: "Lun - Sab: 9:00 AM - 7:00 PM", email: "irapuato@rednatura.com" },
  { id: 15, nombre: "Los Mochis", estado: "Sinaloa", direccion: "Av. López Mateos", telefono: "555-5678-9013", horario: "Lun - Sab: 9:00 AM - 7:00 PM", email: "losmochis@rednatura.com" },
  { id: 16, nombre: "Mazatlán", estado: "Sinaloa", direccion: "Av. Camarón Sábalo", telefono: "555-6789-0124", horario: "Lun - Sab: 9:00 AM - 8:00 PM", email: "mazatlan@rednatura.com" },
  { id: 17, nombre: "Mérida", estado: "Yucatán", direccion: "Centro Histórico", telefono: "555-7890-1235", horario: "Lun - Sab: 9:00 AM - 8:00 PM", email: "merida@rednatura.com" },
  { id: 18, nombre: "Mexicali", estado: "Baja California", direccion: "Centro", telefono: "555-8901-2346", horario: "Lun - Sab: 9:00 AM - 8:00 PM", email: "mexicali@rednatura.com" },
  { id: 19, nombre: "Mixquiahuala", estado: "Hidalgo", direccion: "Centro", telefono: "555-9012-3457", horario: "Lun - Sab: 9:00 AM - 7:00 PM", email: "mixquiahuala@rednatura.com" },
  { id: 20, nombre: "Monterrey", estado: "Nuevo León", direccion: "Av. Constitución", telefono: "555-0123-4568", horario: "Lun - Sab: 9:00 AM - 8:00 PM", email: "monterrey@rednatura.com" },
  { id: 21, nombre: "Morelia", estado: "Michoacán", direccion: "Centro Histórico", telefono: "555-1234-5680", horario: "Lun - Sab: 9:00 AM - 8:00 PM", email: "morelia@rednatura.com" },
  { id: 22, nombre: "Oaxaca", estado: "Oaxaca", direccion: "Centro Histórico", telefono: "555-2345-6781", horario: "Lun - Sab: 9:00 AM - 7:00 PM", email: "oaxaca@rednatura.com" },
  { id: 23, nombre: "Pachuca", estado: "Hidalgo", direccion: "Centro", telefono: "555-3456-7892", horario: "Lun - Sab: 9:00 AM - 7:00 PM", email: "pachuca@rednatura.com" },
  { id: 24, nombre: "Puebla", estado: "Puebla", direccion: "Centro Histórico", telefono: "555-4567-8903", horario: "Lun - Sab: 9:00 AM - 8:00 PM", email: "puebla@rednatura.com" },
  { id: 25, nombre: "Puerto Vallarta", estado: "Jalisco", direccion: "Zona Turística", telefono: "555-5678-9014", horario: "Lun - Sab: 9:00 AM - 8:00 PM", email: "puertovallarta@rednatura.com" },
  { id: 26, nombre: "Querétaro", estado: "Querétaro", direccion: "Centro", telefono: "555-6789-0125", horario: "Lun - Sab: 9:00 AM - 8:00 PM", email: "queretaro@rednatura.com" },
  { id: 27, nombre: "Reynosa", estado: "Tamaulipas", direccion: "Centro Comercial", telefono: "555-7890-1236", horario: "Lun - Sab: 9:00 AM - 8:00 PM", email: "reynosa@rednatura.com" },
  { id: 28, nombre: "San Cristóbal de las Casas", estado: "Chiapas", direccion: "Centro Histórico", telefono: "555-8901-2347", horario: "Lun - Sab: 9:00 AM - 7:00 PM", email: "sancrystobal@rednatura.com" },
  { id: 29, nombre: "San Luis Potosí", estado: "San Luis Potosí", direccion: "Centro", telefono: "555-9012-3458", horario: "Lun - Sab: 9:00 AM - 8:00 PM", email: "sanluispotosi@rednatura.com" },
  { id: 30, nombre: "Tacámbaro", estado: "Michoacán", direccion: "Centro", telefono: "555-0123-4569", horario: "Lun - Sab: 9:00 AM - 7:00 PM", email: "tacambaro@rednatura.com" },
  { id: 31, nombre: "Tampico", estado: "Tamaulipas", direccion: "Centro", telefono: "555-1234-5681", horario: "Lun - Sab: 9:00 AM - 8:00 PM", email: "tampico@rednatura.com" },
  { id: 32, nombre: "Tapachula", estado: "Chiapas", direccion: "Centro", telefono: "555-2345-6782", horario: "Lun - Sab: 9:00 AM - 7:00 PM", email: "tapachula@rednatura.com" },
  { id: 33, nombre: "Tuzutlán", estado: "Puebla", direccion: "Centro", telefono: "555-3456-7893", horario: "Lun - Sab: 9:00 AM - 7:00 PM", email: "tuzutlan@rednatura.com" }
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
      <p>📮 ${sucursal.direccion}</p>
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
