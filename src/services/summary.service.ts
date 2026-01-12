import * as phonesRepository from "../repositories/phones.repository";
import * as rechargesRepository from "../repositories/recharges.repository";

export async function getSummaryByDocument(document: string) {
    
  const phones = await phonesRepository.findPhonesWithCarrierByDocument(document);

  const phonesWithRecharges = await Promise.all(
    phones.map(async (phone) => {
      const recharges = await rechargesRepository.findByPhoneId(phone.id);

      return {
        id: phone.id,
        number: phone.number,
        name: phone.name,
        description: phone.description,
        carrier: {
          id: phone.carrier_id,
          name: phone.carrier_name
        },
        recharges
      };
    })
  );

  return {
    document,
    phones: phonesWithRecharges
  };
}
