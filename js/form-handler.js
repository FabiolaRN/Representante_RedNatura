// Configuración de contacto
const CONTACT_CONFIG = {
  whatsapp: '5555070734',
  email: 'fabiola250204@gmail.com'
};

// Función para enviar registro por WhatsApp
function enviarRegistroWhatsApp(datos) {
  const mensaje = `
🎯 *NUEVO REGISTRO DE INTERES*

👤 *Nombre:* ${datos.nombre} ${datos.apellidos}
📱 *Teléfono:* ${datos.telefono}
📍 *Lugar de Nacimiento:* ${datos.lugar}
🎂 *Fecha de Nacimiento:* ${datos.fecha}
🛍️ *Producto/Sucursal:* ${datos.tipo}
💬 *Mensaje:* ${datos.mensaje || 'Sin mensaje adicional'}
📅 *Fecha de Registro:* ${new Date().toLocaleString('es-MX')}
  `.trim();

  const urlWhatsApp = `https://wa.me/${CONTACT_CONFIG.whatsapp}?text=${encodeURIComponent(mensaje)}`;
  window.open(urlWhatsApp, '_blank');
}

// Función para guardar registro localmente y mostrar confirmación
function registrarUsuario(datos) {
  // Guardar en localStorage
  let registros = JSON.parse(localStorage.getItem('registrosRedNatura') || '[]');
  registros.push({
    ...datos,
    id: Date.now(),
    fechaRegistro: new Date().toLocaleString('es-MX')
  });
  localStorage.setItem('registrosRedNatura', JSON.stringify(registros));
  console.log('✅ Registro guardado:', datos);
}

// Función para manejar envío del formulario
function enviarFormulario(event) {
  event.preventDefault();

  const form = event.target;
  const datos = {
    nombre: form.nombre.value.trim(),
    apellidos: form.apellidos.value.trim(),
    telefono: form.telefono.value.trim(),
    lugar: form.lugar.value.trim(),
    fecha: form.fecha.value,
    mensaje: form.mensaje ? form.mensaje.value.trim() : '',
    tipo: form.getAttribute('data-tipo') || 'General'
  };

  // Validar campos
  if (!datos.nombre || !datos.apellidos || !datos.telefono || !datos.lugar || !datos.fecha) {
    alert('⚠️ Por favor completa todos los campos requeridos');
    return;
  }

  // Validar teléfono (10 dígitos)
  if (!/^\d{10}$/.test(datos.telefono.replace(/\D/g, ''))) {
    alert('⚠️ Por favor ingresa un teléfono válido (10 dígitos)');
    return;
  }

  // Guardar registro
  registrarUsuario(datos);

  // Enviar por WhatsApp
  enviarRegistroWhatsApp(datos);

  // Mostrar confirmación
  const confirmacion = document.getElementById('mensaje-confirmacion');
  if (confirmacion) {
    confirmacion.innerHTML = `
      <div style="background: #d4edda; color: #155724; padding: 1rem; border-radius: 8px; margin-top: 1rem; border: 1px solid #c3e6cb;">
        <h3>✅ ¡Registro Exitoso!</h3>
        <p>Se abrirá WhatsApp para enviar tu información a Fabiola.</p>
        <p>Si no se abre automáticamente, copia este mensaje:</p>
        <textarea readonly style="width: 100%; height: 100px; margin-top: 0.5rem; padding: 0.5rem; border: 1px solid #999; border-radius: 4px;">${encodeURIComponent(mensaje)}</textarea>
      </div>
    `;
  }

  // Limpiar formulario
  form.reset();

  // Cerrar modal después de 2 segundos
  setTimeout(() => {
    cerrarRegistro();
  }, 2000);
}

// Función para abrir modal de registro
function abrirModalRegistro(tipo = 'General', nombre = '') {
  const modal = document.getElementById('registro-modal');
  if (!modal) return;

  const titulo = modal.querySelector('h2');
  const form = modal.querySelector('form');
  
  titulo.textContent = `📝 Registro de Interés - ${nombre || tipo}`;
  form.setAttribute('data-tipo', nombre || tipo);
  form.onsubmit = enviarFormulario;
  
  modal.classList.remove('hidden');
  modal.classList.add('show');
}

// Función para cerrar modal de registro
function cerrarRegistro() {
  const modal = document.getElementById('registro-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('show');
    const confirmacion = document.getElementById('mensaje-confirmacion');
    if (confirmacion) confirmacion.innerHTML = '';
  }
}

// Cerrar modal al hacer clic fuera de él
document.addEventListener('click', function(event) {
  const modal = document.getElementById('registro-modal');
  if (modal && event.target === modal) {
    cerrarRegistro();
  }
});
});
