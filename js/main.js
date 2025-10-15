// Update current time
function updateTime() {
    const now = new Date();
    const options = { 
        hour: '2-digit', 
        minute: '2-digit',
        day: '2-digit',
        month: 'short'
    };
    document.getElementById('current-time').textContent = 
        now.toLocaleDateString('es-ES', options);
}

// Animate numbers on load
function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    const timer = setInterval(() => {
        current += increment;
        if (id === 'revenue') {
            obj.textContent = '$' + current.toLocaleString();
        } else if (id === 'conversion') {
            obj.textContent = (current / 10).toFixed(1) + '%';
        } else {
            obj.textContent = current.toLocaleString();
        }
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Toggle user menu
function toggleUserMenu() {
    alert('Menú de usuario - Aquí podrías agregar un dropdown con opciones');
}

// Initialize on page load
window.addEventListener('load', () => {
    // Start time update
    updateTime();
    setInterval(updateTime, 60000);

    // Animate stats
    animateValue('total-users', 0, 12458, 1000);
    animateValue('revenue', 0, 84250, 1000);
    animateValue('orders', 0, 1847, 1000);
    animateValue('conversion', 0, 32, 1000);

    // Add click handler to table rows
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            alert('Detalles de la transacción: ' + this.cells[0].textContent);
        });
    });
});