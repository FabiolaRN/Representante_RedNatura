// Configuración de contacto
const CONTACT_CONFIG = {
  whatsapp: '5555070734',
  email: 'fabiola250204@gmail.com'
};

// Función para enviar registro por WhatsApp
function enviarRegistroWhatsApp(datos) {
  const mensaje = `
🏪 *NUEVO REGISTRO DE INTERES*

👤 *Nombre:* ${datos.nombre} ${datos.apellidos}
📱 *Teléfono:* ${datos.telefono}
📧 *Email:* ${datos.email}
📍 *Lugar de Nacimiento:* ${datos.lugar}
🎂 *Fecha de Nacimiento:* ${datos.fecha}
🛍️ *Producto/Sucursal:* ${datos.tipo}
💬 *Mensaje:* ${datos.mensaje || 'Sin mensaje adicional'}
📅 *Fecha de Registro:* ${new Date().toLocaleString('es-MX')}
  `.trim();

  const urlWhatsApp = `https://wa.me/${CONTACT_CONFIG.whatsapp}?text=${encodeURIComponent(mensaje)}`;
  window.open(urlWhatsApp, '_blank');
}

// Función para guardar registro localmente
function registrarUsuario(datos) {
  let registros = JSON.parse(localStorage.getItem('registrosRedNatura') || '[]');
  registros.push({
    ...datos,
    id: Date.now(),
    fechaRegistro: new Date().toLocaleString('es-MX')
  });
  localStorage.setItem('registrosRedNatura', JSON.stringify(registros));
  console.log('✅ Registro guardado localmente:', datos);
}

// Función para manejar envío del formulario
function enviarFormulario(event) {
  // No evitamos el envío porque Netlify necesita que el formulario se envíe
  // event.preventDefault();

  const form = event.target;
  const datos = {
    nombre: form.nombre.value.trim(),
    apellidos: form.apellidos.value.trim(),
    telefono: form.telefono.value.trim(),
    email: form.email.value.trim(),
    lugar: form.lugar.value.trim(),
    fecha: form.fecha.value,
    mensaje: form.mensaje ? form.mensaje.value.trim() : '',
    tipo: form.getAttribute('data-tipo') || 'General'
  };

  // Validar campos
  if (!datos.nombre || !datos.apellidos || !datos.telefono || !datos.email || !datos.lugar || !datos.fecha) {
    alert('⚠️ Por favor completa todos los campos requeridos');
    event.preventDefault();
    return false;
  }

  // Validar teléfono (10 dígitos)
  const telLimpio = datos.telefono.replace(/\D/g, '');
  if (telLimpio.length !== 10) {
    alert('⚠️ Por favor ingresa un teléfono válido (10 dígitos)');
    event.preventDefault();
    return false;
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(datos.email)) {
    alert('⚠️ Por favor ingresa un email válido');
    event.preventDefault();
    return false;
  }

  // Guardar registro localmente
  registrarUsuario(datos);

  // Mostrar confirmación
  mostrarEstadoEnvio();

  // Permitir que Netlify envíe el formulario
  return true;
}

// Función para mostrar estado de envío
function mostrarEstadoEnvio() {
  const confirmacion = document.getElementById('mensaje-confirmacion');
  if (confirmacion) {
    confirmacion.innerHTML = `
      <div style="background: #d4edda; color: #155724; padding: 1.5rem; border-radius: 8px; margin-top: 1rem; border: 1px solid #c3e6cb;">
        <h3 style="margin-top: 0;">✅ ¡Registro Enviado Exitosamente!</h3>
        <p>📧 Tu información ha sido enviada a:</p>
        <ul style="text-align: left; margin: 1rem 0;">
          <li>📬 <strong>Email:</strong> fabiola250204@gmail.com</li>
          <li>💾 <strong>Base de datos local:</strong> Guardado como respaldo</li>
        </ul>
        <hr style="border: none; border-top: 1px solid #c3e6cb; margin: 1rem 0;">
        <p style="margin-bottom: 1rem;">🙏 Fabiola se pondrá en contacto contigo pronto.</p>
      </div>
      <button onclick="continuarConWhatsApp()" style="width: 100%; padding: 1rem; margin-top: 1rem; background: #25d366; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1rem;">
        📱 Continuar por WhatsApp (Opcional)
      </button>
      <button onclick="cerrarRegistro()" style="width: 100%; padding: 0.8rem; margin-top: 0.5rem; background: #6c757d; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
        ✕ Cerrar
      </button>
    `;
  }
}

// Función para continuar por WhatsApp
function continuarConWhatsApp() {
  const form = document.getElementById('registro-form');
  const nombre = form.nombre.value;
  const apellidos = form.apellidos.value;
  const telefono = form.telefono.value;
  const email = form.email.value;
  const lugar = form.lugar.value;
  const fecha = form.fecha.value;
  const mensaje = form.mensaje ? form.mensaje.value : '';
  const tipo = form.getAttribute('data-tipo') || 'General';

  const datos = {
    nombre: nombre,
    apellidos: apellidos,
    telefono: telefono,
    email: email,
    lugar: lugar,
    fecha: fecha,
    mensaje: mensaje,
    tipo: tipo
  };

  enviarRegistroWhatsApp(datos);
  
  setTimeout(() => {
    cerrarRegistro();
  }, 500);
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
  
  // Limpiar confirmación previa
  const confirmacion = document.getElementById('mensaje-confirmacion');
  if (confirmacion) confirmacion.innerHTML = '';
  
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
    const form = document.getElementById('registro-form');
    if (form) form.reset();
  }
}

// Cerrar modal al hacer clic fuera de él
document.addEventListener('click', function(event) {
  const modal = document.getElementById('registro-modal');
  if (modal && event.target === modal) {
    cerrarRegistro();
  }
});
