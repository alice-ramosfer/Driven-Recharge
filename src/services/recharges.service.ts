import * as rechargesRepository from "../repositories/recharges.repository";
import * as phonesRepository from "../repositories/phones.repository";
import { RechargeInsert } from "../protocols/recharge.protocol";

export async function createRecharge(recharge: RechargeInsert) {
  const phone = await phonesRepository.findById(recharge.phoneId);

  if (!phone.rowCount) {
    throw { type: "not_found", message: "Telefone não encontrado" };
  }

  return rechargesRepository.insert(recharge);
}


export async function getRechargesByNumber(number: string) {
  return rechargesRepository.findByPhoneNumber(number);
}
