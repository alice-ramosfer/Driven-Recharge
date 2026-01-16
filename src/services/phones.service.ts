import * as phonesRepository from "../repositories/phones.repository";
import { PhoneInsert } from "../protocols/phone.protocol";

export async function createPhone(phone: PhoneInsert) {
  const existingPhone = await phonesRepository.findByNumber(phone.number);
  if (existingPhone.rowCount>0) {
    throw { type: "conflict", message: "Número já cadastrado" }; 
  }

  const phonesCount = await phonesRepository.countByDocument(phone.document);
  if (phonesCount >= 3) {
    throw { type: "conflict", message: "Limite de telefones atingido" };
  }

  return phonesRepository.insert(phone);
}

export async function getPhonesByDocument(document: string) {
  return phonesRepository.findByDocument(document);
}
