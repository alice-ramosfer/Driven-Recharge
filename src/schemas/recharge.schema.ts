import Joi from "joi";
import { RechargeInsert } from "../protocols/recharge.protocol";

export const rechargeSchema = Joi.object<RechargeInsert>({
  phoneId: Joi.number().required(),
  amount: Joi.number().min(10).max(1000).required()
});
