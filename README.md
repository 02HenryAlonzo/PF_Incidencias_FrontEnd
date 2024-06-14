# IncidentApp - Frontend

## Descripción
IncidentApp es una aplicación web para gestionar y reportar incidentes. Este repositorio contiene el frontend de la aplicación, construido con React y Tailwind CSS.

## Tecnologías Utilizadas
- **React**: Biblioteca para construir interfaces de usuario.
- **Tailwind CSS**: Framework de CSS para diseñar interfaces de usuario de manera rápida y eficiente.
- **React Router**: Para la navegación entre páginas.
- **React Icons**: Conjunto de iconos para React.
- **React Toastify**: Para mostrar notificaciones.
- **Framer Motion**: Para animaciones fluidas.

## Capturas de Pantalla

### Página de Inicio
![Home](/public/home.png)

### Página de Login
<img src="/public/login.png"  width="250">

### Página de Registro
<img src="/public/register.png"  width="250">

### Página de Incidentes
<img src="/public/my.png"  width="250">

### Página de Detalles
<img src="/public/detalles.png"  width="250">

### Página para Crear Incidenacias
<img src="/public/create.png"  width="250">

## Estructura del Proyecto
```plaintext
src/
│
├── components/      # Componentes reutilizables
│   ├── Navbar.js
│   ├── SocialMedia.js
│   └── ...
│
├── pages/           # Páginas de la aplicación
│   ├── Home.js
│   ├── Login.js
│   ├── Signup.js
│   └── ...
│
├── services/        # Servicios de API
│   └── api.js
│
├── styles/          # Archivos de estilos
│   └── background.css
│
├── App.js           # Componente principal
├── index.js         # Punto de entrada
└── ...
