const Product = require('../models/products.model');

const newProduct = Product.build({
  orgId: 1,
  name: 'Nombre del producto',
  description: 'Descripción del producto',
  dateCreated: new Date(),
  dateModified: new Date(),
  creatorId: 1,
  modifierId: 1
});

newProduct.save()
  .then(() => {
    console.log('Producto creado con éxito');
  })
  .catch(err => {
    console.error('Error en la creación del producto:', err);
  });
