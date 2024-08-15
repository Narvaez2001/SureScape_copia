document.addEventListener("DOMContentLoaded", function() {
    // Casas y sus capacidades
    const casas = [
        { id: 'casa-villavicencio', capacidad: '10-12' },
        { id: 'casa-filipenses', capacidad: '20-30' },
        { id: 'casa-shanti', capacidad: '10-12' },
        { id: 'casa-ecoandina', capacidad: '20-30' },
        { id: 'casa-reyna', capacidad: '10-12' },
        { id: 'casa-reyna2', capacidad: '20-30' },
        { id: 'casa-mabe', capacidad: '10-12' },
        { id: 'casa-m&b', capacidad: '20-30' },
        { id: 'casa-los-anturios', capacidad: '10-12' },
        { id: 'casa-linares', capacidad: '20-30' },
        { id: 'casa-chavarri', capacidad: '10-12' },
        { id: 'casa-carballeira', capacidad: '20-30' }
    ];

    // Mostrar todas las casas inicialmente
    function mostrarTodasLasCasas() {
        document.querySelectorAll('.container-casas').forEach(function(casa) {
            casa.style.display = 'block';
        });
    }

    // Función para mostrar casas por capacidad
    function filtrarCasas(capacidad) {
        // Ocultar todas las casas primero
        document.querySelectorAll('.container-casas').forEach(function(casa) {
            casa.style.display = 'none';
        });

        // Mostrar solo las casas que cumplen con el filtro
        casas.forEach(function(casa) {
            if (casa.capacidad === capacidad) {
                const elementoCasa = document.querySelector('a[href="./casas/' + casa.id + '.html"]');
                if (elementoCasa) {
                    elementoCasa.closest('.container-casas').style.display = 'block';
                }
            }
        });
    }

    // Asignar eventos de clic a los filtros
    document.getElementById('filtro-10-12').addEventListener('click', function() {
        filtrarCasas('10-12');
    });

    document.getElementById('filtro-20-30').addEventListener('click', function() {
        filtrarCasas('20-30');
    });

    // Asignar evento de clic para mostrar todas las casas
    document.getElementById('filtro-todas').addEventListener('click', function() {
        mostrarTodasLasCasas();
    });

    // Mostrar todas las casas al cargar la página
    mostrarTodasLasCasas();
});
