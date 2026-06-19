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
            <a href="https://wa.me/5555070734?text=Estoy%20interesado%20en%20el%20producto%20${encodeURIComponent(producto.nombre)}%20-%20$${producto.precio}" target="_blank" class="btn-whatsapp">💬 WhatsApp</a>
        `;
        
        grid.appendChild(card);
    });
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
