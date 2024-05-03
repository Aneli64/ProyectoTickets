const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const description = Joi.number().integer().min(10);
const dateCreated = Joi.string();
const dateModified = Joi.string();
const creatorId = Joi.number().integer();
const modifierId = Joi.number().integer();

const createProductSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  dateCreated: dateCreated.required(),
  dateModified: dateModified.required(),
  creatorId: creatorId.required(),
  modifierId: modifierId.required()
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, getProductSchema }
