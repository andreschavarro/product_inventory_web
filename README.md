# ProductInventoryWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Frontend de Gestión de Inventario de Productos Perecederos

## Descripción General
Este frontend está diseñado como la interfaz de usuario para interactuar con el sistema de gestión de inventario de productos perecederos. Proporciona una experiencia intuitiva para registrar productos, administrar entradas y salidas del inventario, y visualizar el estado de los productos.

### Características principales:
- **Dashboard intuitivo**: Navegación clara para acceder a las funcionalidades principales.
- **Formulario de creación de productos**: Permite a los usuarios registrar productos con validaciones en tiempo real.
- **Listado de productos**: Muestra información detallada sobre los productos y su estado actual.
- **Gestor de entradas y salidas de inventario**: Controla el inventario utilizando un enfoque de manejo FIFO.

---

## Requisitos para Ejecutar

### Dependencias del Proyecto
- **Node.js**: Versión 16 o superior.
- **Angular CLI**: Versión 16 o superior.
- **Tailwind CSS**: Framework de estilos utilizado para la interfaz de usuario.

### Instalación
1. Clona el repositorio en tu máquina local:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd frontend-inventario
   ```

2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

3. Configura el archivo `environment.ts` para asegurarte de que el frontend se comunique correctamente con el backend:
   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:8080/api'
   };
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```

5. Accede a la aplicación en tu navegador en: [http://localhost:4200](http://localhost:4200).

---

## Estructura del Proyecto

### Módulos principales
1. **AppModule**:
   - Configura los componentes principales y las rutas.

2. **PagesModule**:
   - Contiene las páginas principales: `HomePage`, `CreateProductPage`, y `ListProductsPage`.

3. **SharedModule**:
   - Contiene componentes reutilizables como `HeaderComponent` y `CardProductComponent`.

---

## Funcionalidades y Componentes Clave

### Rutas Principales
El sistema de enrutamiento está configurado para las siguientes rutas:

- **`/`**: Redirige a la página de inicio.
- **`/products`**: Muestra el listado de productos.
- **`/create-product`**: Formulario para registrar un nuevo producto.

#### Configuración de Rutas (`app-routing.module.ts`):
```typescript
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PageHomeComponent },
  { path: 'products', component: ListProductsComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: '**', redirectTo: '/home' }
];
```

### Componentes Clave
1. **`HeaderComponent`**:
   - Barra de navegación con enlaces a las rutas principales.

2. **`PageHomeComponent`**:
   - Pantalla inicial que da la bienvenida al usuario y presenta opciones principales.

3. **`ListProductsComponent`**:
   - Lista los productos del inventario consumiendo el endpoint `/api/products`.
   - Implementa tarjetas (`CardProductComponent`) para mostrar detalles de cada producto.

4. **`CreateProductComponent`**:
   - Formulario para registrar nuevos productos con validaciones:
     - Campos obligatorios: nombre, imagen y descripción.
     - Cantidad mínima de inventario: 0.

---

## Decisiones Clave (Archivo DETAILS.md)

### Tecnologías Seleccionadas
1. **Angular**:
   - Proporciona una arquitectura modular y mantenible.

2. **Tailwind CSS**:
   - Permite un diseño rápido y moderno sin necesidad de hojas de estilo extensas.

3. **Modularidad**:
   - División clara entre componentes reutilizables, páginas y servicios.

### Escalabilidad y Mejoras Futuras
1. **Mejoras en la experiencia de usuario (UX)**:
   - Agregar filtros avanzados en el listado de productos (por estado, fecha de caducidad, etc.).

2. **Internacionalización (i18n)**:
   - Implementar soporte para múltiples idiomas.

3. **Implementación de tests automatizados**:
   - Agregar pruebas unitarias y de integración para componentes clave.

4. **Despliegue en producción**:
   - Configurar CI/CD para automatizar el despliegue en un servidor como Netlify o Vercel.

---

