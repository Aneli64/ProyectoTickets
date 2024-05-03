const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const description = Joi.number().integer().min(10);
const dateCreated = Joi.string();
const dateModified = Joi.string();
const creatorId = Joi.number().integer();
const modifierId = Joi.number().integer();

// const limit = Joi.number().integer();
// const offset = Joi.number().integer();

// const price_min = Joi.number().integer();
// const price_max = Joi.number().integer();

const createProductSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  dateCreated: dateCreated.required(),
  dateModified: dateModified.required(),
  creatorId: creatorId.required(),
  modifierId: modifierId.required()
});

// const updateProductSchema = Joi.object({
//   name: name,
//   price: price,
//   image: image,
//   description: description,
//   categoryId
// });

const getProductSchema = Joi.object({
  id: id.required(),
});

// const queryProductSchema = Joi.object({
//   limit,
//   offset,
//   price,
//   price_min,
//   price_max: price_max.when('price_min', {
//     is: Joi.number().integer(),
//     then: Joi.required()
//   })
// });

// module.exports = { createProductSchema, updateProductSchema, getProductSchema, queryProductSchema }
module.exports = { createProductSchema, getProductSchema }
