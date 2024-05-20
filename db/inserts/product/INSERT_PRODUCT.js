const ProductInsert = require("./product_INS")

ProductInsert({
  orgId: 1,
  name: "Producto",
  description: "pepito",
  dateCreated: new Date(),
  dateModified: new Date(),
  creatorId: 3,
  modifierId: 6,
});
