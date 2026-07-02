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
            <button class="btn-interesado" onclick="abrirFormularioInteres(${producto.id}, '${producto.nombre.replace(/'/g, "\\'")}')">💌 Estoy Interesado</button>
        `;
        
        grid.appendChild(card);
    });
}

// Función para ir al detalle del producto
function irAlDetalle(productoId) {
    window.location.href = `producto.html?id=${productoId}`;
}

// Función para abrir formulario de interés
function abrirFormularioInteres(productoId, nombreProducto) {
    const modal = document.getElementById('interesModal');
    document.getElementById('producto-id').value = productoId;
    document.getElementById('producto-nombre').value = nombreProducto;
    document.getElementById('nombre-interesado').value = '';
    document.getElementById('email-interesado').value = '';
    document.getElementById('telefono-interesado').value = '';
    modal.classList.add('show');
}

// Función para cerrar modal de interés
function cerrarFormularioInteres() {
    const modal = document.getElementById('interesModal');
    modal.classList.remove('show');
}

// Cerrar modal al hacer clic fuera
document.addEventListener('click', (e) => {
    const modal = document.getElementById('interesModal');
    if (e.target === modal) {
        cerrarFormularioInteres();
    }
});

// Cerrar modal al presionar ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cerrarFormularioInteres();
    }
});

// Cargar productos al iniciar
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);
    cargarSucursales();
});
