/*****************************************************************************************************************************************************************************/
/*                                                                                                                                                                           */
/*                                                                  Scripts para el Proyecto Python Tkinter                                                                  */
/*                                                                                                                                                                           */
/*****************************************************************************************************************************************************************************/
/*                                                                                                                                                                           */
/* Autor: Magallanes López Carlos Gabriel                                                                                                                                    */
/* Versión del Proyecto: 1.1                                                                                                                                                 */
/* Correo: cgmagallanes23@gmail.com                                                                                                                                          */
/* Ultima Modificación: 20/03/2026                                                                                                                                                                           */
/*                                                                                                                                                                           */
/*****************************************************************************************************************************************************************************/
        
// Habilitar Scroll Suave
const links = document.querySelectorAll('a[href^="#"]')                                          // Obtener todos los Enlaces de Anclaje
links.forEach(anchor => {                                                                        // Aplicar la Siguente Función a Cada Enlace                                                 
    anchor.addEventListener('click', function (event) {                                          // Agregar un Evento de Click a Cada Enlace
        event.preventDefault();                                                                  // Prevenir Comportamiento Predeterminado del Enlace
        const target = document.querySelector(this.getAttribute('href'));                        // Obtener Elemento de Destino del Enlace
        if (target) target.scrollIntoView({behavior: 'smooth'});                                 // Si Elemento de Destino Existe, Scroll Suave hacia Él            
    }); 
});

// Efecto Fade In al hacer Scroll
const observer = new IntersectionObserver((entries) => {                                         // Instanciar Observador Intersección, Detección Elementos en Viewport 
    entries.forEach(entry => {                                                                   // Para Cada Elemento Detectado en el Viewport
        if (entry.isIntersecting) entry.target.classList.add('visible');                         // Si esta en Viewport, Agregar Clase 'visible' para Efecto Fade In
    });
}, {threshold: 0.1});                                                                            // Configuración del Observador: Activar cuando el 10% del Elemento sea Visible

// Observar secciones de contenido y encabezados de proyectos
const allSections = document.querySelectorAll('.content-section, .project-header');              // Obtener Secciones de Contenido y Encabezados de Proyectos
allSections.forEach(element => {observer.observe(element);});                                    // Observar Cada Sección y Encabezado para Activar Efecto Fade In al Hacer Scroll

/*****************************************************************************************************************************************************************************/
