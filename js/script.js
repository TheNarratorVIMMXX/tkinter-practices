/*****************************************************************************************************************************************************************************/
/*                                                                                                                                                                           */
/*                                                                  Scripts para el Proyecto Python Tkinter                                                                  */
/*                                                                                                                                                                           */
/*****************************************************************************************************************************************************************************/
/*                                                                                                                                                                           */
/* Autor: Magallanes López Carlos Gabriel                                                                                                                                    */
/* Versión del Proyecto: 1.2                                                                                                                                                 */
/* Correo: cgmagallanes23@gmail.com                                                                                                                                          */
/* Ultima Modificación: 05/05/2026                                                                                                                                                                           */
/*                                                                                                                                                                           */
/*****************************************************************************************************************************************************************************/

// i18n - Traducciones
const translations = {
    es: {
        backBtn: "← Volver a Proyectos",
        projectDesc: "Prácticas de Interfaz Gráfica de Usuario (GUI) desarrollados en Python utilizando la biblioteca nativa Tkinter",
        overviewTitle: "📖 Descripción General",
        overviewText: "Este proyecto contiene una colección de 14 prácticas educativas desarrolladas con Tkinter, la biblioteca nativa de Python para crear Interfaces Gráficas de Usuario (GUI). Estas prácticas cubren los siguientes conceptos fundamentales de Tkinter:",
        featuresTitle: "✨ Características Principales",
        howToUseTitle: "🚀 Cómo Usar",
        installTitle: "Instalación",
        basicUseTitle: "Uso Básico",
        basicUseDesc: "Cada práctica es un script independiente, para ejecutar cualquiera:",
        screenshotsTitle: "📸 Capturas de Pantalla",
        techTitle: "🛠️ Tecnologías Utilizadas",
        licenseTitle: "📄 Licencia",
        licenseText: "Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.",
        contactTitle: "📧 Contacto",
        contactDesc: "Si tienes preguntas o sugerencias sobre este proyecto, contáctame:",
        footer: "© 2026 TheNarratorDev. Todos los derechos reservados.",
        langBtn: "🌐 English"
    },
    en: {
        backBtn: "← Back to Projects",
        projectDesc: "Graphical User Interface (GUI) exercises developed in Python using the native Tkinter library",
        overviewTitle: "📖 Overview",
        overviewText: "This project contains a collection of 14 educational exercises built with Tkinter, Python's native library for creating Graphical User Interfaces (GUI). These exercises cover the following core Tkinter concepts:",
        featuresTitle: "✨ Key Features",
        howToUseTitle: "🚀 How to Use",
        installTitle: "Installation",
        basicUseTitle: "Basic Usage",
        basicUseDesc: "Each exercise is a standalone script. To run any of them:",
        screenshotsTitle: "📸 Screenshots",
        techTitle: "🛠️ Technologies Used",
        licenseTitle: "📄 License",
        licenseText: "This project is licensed under the MIT License. See the LICENSE file for more details.",
        contactTitle: "📧 Contact",
        contactDesc: "If you have questions or suggestions about this project, feel free to reach out:",
        footer: "© 2026 TheNarratorDev. All rights reserved.",
        langBtn: "🌐 Español"
    }
};

// Detección y Aplicación de Idioma
function detectLanguage() {                                                                                                           
    const saved = localStorage.getItem('lang');                                                // Obtener el Lenguaje del Local Storage
    if (saved) return saved;                                                                   // Si se obtuvo el Lenguaje del Local Storage Retornar
    const browserLang = navigator.language || navigator.userLanguage;                          // Obtener el Lenguaje del Browser
    return browserLang.startsWith('es') ? 'es' : 'en';                                         // Español si es es-*, inglés para todo lo demás
}

// Aplicar traducciones al DOM
function applyLanguage(lang) {                         
    const translation = translations[lang];                                                     // Obtener Traducción según el Lenguaje
    document.querySelectorAll('[data-i18n]').forEach(element => {                               // Recorrer Elementos con Atributo data-i18n
        const key = element.getAttribute('data-i18n');                                          // Obtener Atributo data-i18n
        if (translation[key]) element.textContent = translation[key];                           // Reemplazar Texto con Traducción Correspondiente
    });
    document.documentElement.setAttribute('lang', lang);                                        // Actualizar Atributo lang del HTML para Accesibilidad
    const btn = document.getElementById('langToggleBtn');                                       // Obtener el Botón por su ID
    if (btn) btn.textContent = translation.langBtn;                                             // Actualizar Texto del Botón al Idioma Opuesto
    localStorage.setItem('lang', lang);                                                         // Guardar Idioma Seleccionado en localStorage
}

// Crear Botón Flotante de Cambio de Idioma
function createLangButton() {                                                                    
    const btn = document.createElement('button');                                                // Creamos el Elemento
    btn.id = 'langToggleBtn';                                                                    // ID para aplicar estilos desde CSS
    btn.addEventListener('click', () => {                                                        // Agregamos el Callback para el Botón
        const current = localStorage.getItem('lang') || detectLanguage();                        // Obtener Lenguaje Actual
        const next = current === 'es' ? 'en' : 'es';                                             // Alternar entre Español e Inglés
        applyLanguage(next);                                                                     // Aplicamos el Lenguaje
    });
    document.body.appendChild(btn);                                                              // Agregar Botón al Documento
}

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

// Inicialización 
createLangButton();                                                                              // Creación del Botón del Lenguaje
applyLanguage(detectLanguage());                                                                 // Aplicación del Lenguaje

/*****************************************************************************************************************************************************************************/
