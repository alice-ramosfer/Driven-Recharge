import { db } from "../database/database";
import { RechargeInsert } from "../protocols/recharge.protocol";

export async function insert(recharge: RechargeInsert) {
  const result = await db.query(
    `
    INSERT INTO recharges (phone_id, amount)
    VALUES ($1, $2)
    RETURNING *
    `,
    [recharge.phoneId, recharge.amount]
  );

  return result.rows[0];
}


export async function findByPhoneNumber(number: string) {
  const result = await db.query(
    `
    SELECT r.*
    FROM recharges r
    JOIN phones p ON p.id = r.phone_id
    WHERE p.number = $1
    ORDER BY r.created_at DESC
    `,
    [number]
  );

  return result.rows;
}

export async function findByPhoneId(phoneId: number) {
  const result = await db.query(
    `SELECT id, amount, created_at FROM recharges WHERE phone_id = $1`,
    [phoneId]
  );

  return result.rows;
}
