export type RechargeInsert = {
  phoneId: number;
  amount: number;
};

export type RechargeGetId = {
  id: number;
  amount: string; 
  created_at: string;
}
 export type RechargeGetNumber = RechargeGetId & {
    phone_id: number;
 }