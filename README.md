# online-store-app

## Descripción
"Online Store App" es una aplicación web desarrollada con Vue.js y Vuetify que permite a los usuarios buscar y comprar productos en línea. La aplicación incluye funcionalidades como búsqueda de productos, gestión de usuarios y un carrito de compras.

## Estructura del Proyecto
- **src/**
  - **components/**: Componentes reutilizables de la aplicación.
  - **views/**: Vistas principales de la aplicación.
  - **store/**: Gestión del estado global de la aplicación utilizando Pinia.
  - **router/**: Configuración de las rutas de la aplicación.
  - **assets/**: Recursos estáticos como imágenes y estilos.
  - **App.vue**: Componente raíz de la aplicación.
  - **main.js**: Punto de entrada de la aplicación.

## Dependencias Principales
- **Vue.js**: Framework progresivo para construir interfaces de usuario.
- **Vuetify**: Biblioteca de componentes UI basada en Material Design.
- **Pinia**: Gestión del estado centralizado para aplicaciones Vue.js.
- **Vue Router**: Enrutador oficial para Vue.js.

## Componentes Clave
- **Shop.vue**: Vista principal de la tienda en línea que incluye:
  - Barra de herramientas con título y botón de cierre de sesión.
  - Campo de búsqueda para filtrar productos.
  - Tabla de datos para mostrar los productos disponibles.

## Funcionalidades
- **Búsqueda de Productos**: Permite a los usuarios buscar productos utilizando un campo de texto.
- **Gestión de Usuarios**: Funcionalidad para que los usuarios inicien y cierren sesión.
- **Endpoint de Categorías**: Se utiliza un endpoint para obtener y gestionar las categorías de productos.
- **Agregar al Carrito**: Se utiliza un endpoint para agregar productos al carrito.

## Project Setup

```sh
npm install
```

### Run the app

```sh
npm run dev
```


