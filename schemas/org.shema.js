const Joi = require('joi');

const id = Joi.number().integer();
const organization = Joi.string().min(3).max(15);
const dateCreated = Joi.number().integer().min(10);
const dateModified = Joi.string();

const createOrgSchema = Joi.object({
  organization: organization.required(),
  dateCreated: dateCreated.required(),
  dateModified: dateModified.required(),
});

const getOrgSchema = Joi.object({
  id: id.required(),
});

module.exports = { createOrgSchema, getOrgSchema }
