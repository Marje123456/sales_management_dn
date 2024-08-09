Este es un proyecto de aplicación web SPA para gestionar un módulo de ventas, que incluye la gestión de productos, clientes y ventas.

## Tecnologías Utilizadas

- **Frontend:** React.js
- **Backend:** Node.js con Express y Sequelize
- **Base de Datos:** PostgreSQL

## Estructura del Proyecto
mi-proyecto-ventas/
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ │ ├── productController.js
│ │ │ ├── customerController.js
│ │ │ └── saleController.js
│ │ ├── models/
│ │ │ ├── product.js
│ │ │ ├── customer.js
│ │ │ └── sale.js
│ │ ├── migrations/
│ │ │ ├── YYYYMMDDHHMMSS-create-product.js
│ │ │ ├── YYYYMMDDHHMMSS-create-customer.js
│ │ │ └── YYYYMMDDHHMMSS-create-sale.js
│ │ ├── routes/
│ │ │ ├── productRoutes.js
│ │ │ ├── customerRoutes.js
│ │ │ └── saleRoutes.js
│ │ ├── app.js
│ │ └── config.json
│ ├── package.json
│ └── .sequelizerc
└── frontend/
├── src/
│ ├── components/
│ │ ├── ProductList.js
│ │ ├── ProductForm.js
│ │ ├── CustomerList.js
│ │ ├── CustomerForm.js
│ │ ├── SaleList.js
│ │ └── SaleForm.js
│ ├── services/
│ │ └── api.js
│ ├── App.js
│ └── index.js
├── package.json
└── .env

## Configuración del Proyecto

#### ** Clonar el Repositorio**

```bash
git clone https://github.com/tu_usuario/mi-proyecto-ventas.git

Instalar Dependencias
npm install

Crea un archivo .env en el directorio del frontend
