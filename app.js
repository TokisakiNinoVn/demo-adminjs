import express from 'express';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize'; // import adapter
import sequelize from './config/database.js';
// import Product from './models/Product.js';
import User from './models/User.js';

// Đăng ký adapter cho AdminJS
AdminJS.registerAdapter(AdminJSSequelize);

const adminJs = new AdminJS({
  resources: [
    // { resource: Product, options: { parent: { name: 'Database' } } },
    { resource: User, options: { parent: { name: 'Database' } } },
  ],
  rootPath: '/admin',
});

const router = AdminJSExpress.buildRouter(adminJs);
const app = express();
app.use(adminJs.options.rootPath, router);

sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables created!');
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`>> AdminJS Board: http://localhost:${PORT}/admin`);
  });
}).catch((error) => {
  console.error('Không thể kết nối và đồng bộ hóa database:', error);
});
