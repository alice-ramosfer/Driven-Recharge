export type Phone = {
  id: number;
  number: string;
  document: string;
  name: string;
  description: string;
  carrier_id: number;
};

export type PhoneInsert = Omit<Phone, "id" | "carrier_id"> & {
  carrierId: number;
};

export type PhoneGet = Phone;

export type CountResult = {
  count: string;
};

export type PhoneGetCarrierByPhone = Phone & {
  carrier_name: string
}