import Joi from "joi";
import { PhoneInsert } from "../protocols/phone.protocol";

export const phoneSchema = Joi.object<PhoneInsert>({
  number: Joi.string().length(11).required(),
  document: Joi.string().length(11).required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  carrierId: Joi.number().required()
});