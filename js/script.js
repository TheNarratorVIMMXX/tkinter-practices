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
        githubBtn: "Ver en GitHub",
        overviewTitle: "📖 Descripción General",
        overviewText: "Este proyecto contiene una colección de 14 prácticas educativas desarrolladas con Tkinter, la biblioteca nativa de Python para crear Interfaces Gráficas de Usuario (GUI). Estas prácticas cubren los siguientes conceptos fundamentales de Tkinter:",
        li1: "Creación y configuración de ventanas (Tk())",
        li2: "Widgets básicos: Label, Button, Entry, Listbox, Canvas",
        li3: "Gestores de geometría: pack(), grid(), place()",
        li4: "Manejo de eventos con command y bind()",
        li5: "Organización con frame y marcos anidados",
        li6: "Validación de entrada de datos",
        li7: "Uso de temporizadores con after()",
        li8: "Mensajes emergentes con Messagebox",
        li9: "Personalización avanzada (colores, fuentes, estilos)",
        featuresTitle: "✨ Características Principales",
        feat1Title: "🎯 Widgets",
        feat1Desc: "Uso de botones, labels, listbox, entries y más elementos nativos de Tkinter",
        feat2Title: "⚡ Layouts & Grid",
        feat2Desc: "Organización de interfaces usando el sistema de grid y frames para estructurar ventanas",
        feat3Title: "🚀 Interactividad",
        feat3Desc: "Manejo de eventos, acciones de usuario y respuestas dinámicas dentro de las ventanas",
        feat4Title: "💡 Diseño de Interfaz",
        feat4Desc: "Principios de UX/UI aplicados a ventanas de escritorio con estilos y configuraciones visuales",
        howToUseTitle: "🚀 Cómo Usar",
        installTitle: "Instalación",
        basicUseTitle: "Uso Básico",
        basicUseDesc: "Cada práctica es un script independiente, para ejecutar cualquiera:",
        step1: "Asegúrate de tener Python 3.11 instalado en tu sistema",
        step2: "Tkinter viene incluido con Python, no necesitas instalar dependencias extra",
        step3: "Navega a la carpeta del proyecto y ejecuta la práctica deseada",
        step4: "Se abrirá una ventana gráfica con la interfaz de esa práctica",
        step5: "Cierra la ventana para terminar la ejecución",
        screenshotsTitle: "📸 Capturas de Pantalla",
        shot1: "P7 - Cuestionario",
        shot2:  "P13 - Semáforo",
        shot3: "P14 - Calculadora",
        techTitle: "🛠️ Tecnologías Utilizadas",
        tech1: "Python 3.11 - Lenguaje de Programación",
        tech2: "Tkinter - Biblioteca para crear Interfaces Gráficas de Usuario (GUI)",
        tech3: "Visual Studio Code - Entorno de Desarrollo (IDE)",
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
        githubBtn: "View on GitHub",
        overviewTitle: "📖 Overview",
        overviewText: "This project contains a collection of 14 educational exercises built with Tkinter, Python's native library for creating Graphical User Interfaces (GUI). These exercises cover the following core Tkinter concepts:",
        li1: "Creating and configuring windows (Tk())",
        li2: "Basic widgets: Label, Button, Entry, Listbox, Canvas",
        li3: "Geometry managers: pack(), grid(), place()",
        li4: "Event handling with command and bind()",
        li5: "Organization with frames and nested frames",
        li6: "Input data validation",
        li7: "Using timers with after()",
        li8: "Pop-up messages with Messagebox",
        li9: "Advanced customization (colors, fonts, styles)",
        featuresTitle: "✨ Key Features",
        feat1Title: "🎯 Widgets",
        feat1Desc: "Use of buttons, labels, listboxes, entries and more native Tkinter elements",
        feat2Title: "⚡ Layouts & Grid",
        feat2Desc: "Interface organization using the grid system and frames to structure windows",
        feat3Title: "🚀 Interactivity",
        feat3Desc: "Event handling, user actions and dynamic responses within windows",
        feat4Title: "💡 Interface Design",
        feat4Desc: "UX/UI principles applied to desktop windows with visual styles and configurations",
        howToUseTitle: "🚀 How to Use",
        installTitle: "Installation",
        basicUseTitle: "Basic Usage",
        basicUseDesc: "Each exercise is a standalone script. To run any of them:",
        step1: "Make sure you have Python 3.11 installed on your system",
        step2: "Tkinter is bundled with Python, no extra dependencies needed",
        step3: "Navigate to the project folder and run the desired exercise",
        step4: "A graphical window with the exercise interface will open",
        step5: "Close the window to end execution",
        screenshotsTitle: "📸 Screenshots",
        shot1: "P7 - Quiz",
        shot2: "P13 - Traffic Light",
        shot3: "P14 - Calculator",
        techTitle: "🛠️ Technologies Used",
        tech1: "Python 3.11 - Programming Language",
        tech2: "Tkinter - Library for creating Graphical User Interfaces (GUI)",
        tech3: "Visual Studio Code - Development Environment (IDE)",
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
