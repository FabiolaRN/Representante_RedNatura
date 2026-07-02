// Función para filtrar productos
function filtrarProductos(categoria, btn) {
    const productosFiltrados = categoria === 'todos' 
        ? productos 
        : productos.filter(p => p.categoria === categoria);

    mostrarProductos(productosFiltrados);

    // Actualizar botón activo
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
}

// Función para mostrar productos en grid
function mostrarProductos(lista) {
    const grid = document.getElementById('productos-grid');
    grid.innerHTML = '';

    lista.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        
        const tieneDescuento = producto.precio > 350;
        const precioDescuento = tieneDescuento ? Math.round(producto.precio * 0.7) : null;

        card.innerHTML = `
            <div class="producto-imagen-container">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img" onerror="this.src='img/placeholder.png'">
                ${tieneDescuento ? '<div class="descuento-badge">🎁 30% DESC</div>' : ''}
            </div>
            <h3>${producto.nombre}</h3>
            <p class="desc-corta">${producto.descripcionCorta}</p>
            <div class="producto-info">
                <p class="precio">$${producto.precio.toLocaleString('es-MX')}</p>
                ${tieneDescuento ? `<p class="precio-descuento">💚 $${precioDescuento.toLocaleString('es-MX')} (30% OFF)</p>` : ''}
            </div>
            ${tieneDescuento ? `<p class="promo-text">✨ OFERTA LIMITADA - ¡AL INSCRIBIRSE HOY! ✨</p>` : ''}
            <button class="btn-producto" onclick="irAlDetalle(${producto.id})">📄 Ver Detalles</button>
            <a href="https://formspree.io/f/xyzgwkdj" method="POST" class="btn-interesado-link" onclick="return abrirFormularioInteres(event, '${producto.nombre.replace(/'/g, "\\'")}')">
                💌 Estoy Interesado
            </a>
        `;
        
        grid.appendChild(card);
    });
}

// Función para abrir formulario de interés con FormSubmit
function abrirFormularioInteres(event, nombreProducto) {
    event.preventDefault();
    
    const nombre = prompt('¿Cuál es tu nombre?');
    if (!nombre) return false;
    
    const email = prompt('¿Cuál es tu correo electrónico?');
    if (!email) return false;
    
    const telefono = prompt('¿Cuál es tu teléfono? (opcional)');
    
    // Enviar datos a FormSubmit
    const formData = new FormData();
    formData.append('Producto', nombreProducto);
    formData.append('Nombre', nombre);
    formData.append('Email', email);
    formData.append('Teléfono', telefono || 'No proporcionado');
    
    fetch('https://formspree.io/f/xyzgwkdj', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('¡Gracias! Tu interés ha sido registrado. Nos pondremos en contacto pronto.');
        } else {
            alert('Hubo un error. Por favor intenta nuevamente.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al enviar. Intenta nuevamente.');
    });
    
    return false;
}

// Función para ir al detalle del producto
function irAlDetalle(productoId) {
    window.location.href = `producto.html?id=${productoId}`;
}

// Cargar productos al iniciar
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);
    cargarSucursales();
});
