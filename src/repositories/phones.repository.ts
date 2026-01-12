import { db } from "../database/database";
import { PhoneInsert } from "../protocols/phone.protocol";

export async function findByNumber(number: string) {
  const result = await db.query(
    `SELECT * FROM phones WHERE number = $1`,
    [number]
  );
  return result;
}

export async function countByDocument(document: string) {
  const result = await db.query(
    `SELECT COUNT(*) FROM phones WHERE document = $1`,
    [document]
  );
  return Number(result.rows[0].count);
}

export async function insert(phone: PhoneInsert) {
  const result = await db.query(
    `
    INSERT INTO phones (number, document, name, description, carrier_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `,
    [
      phone.number,
      phone.document,
      phone.name,
      phone.description,
      phone.carrierId
    ]
  );

  return result.rows[0];
}

export async function findByDocument(document: string) {
  const result = await db.query(
    `SELECT * FROM phones WHERE document = $1`,
    [document]
  );

  return result.rows;
}

export async function findById(id: number) {
  return db.query(
    `SELECT * FROM phones WHERE id = $1`,
    [id]
  );
}


export async function findPhonesWithCarrierByDocument(document: string) {
  const result = await db.query(
    `
    SELECT 
      p.id,
      p.number,
      p.name,
      p.description,
      c.id AS carrier_id,
      c.name AS carrier_name
    FROM phones p
    JOIN carriers c ON c.id = p.carrier_id
    WHERE p.document = $1
    `,
    [document]
  );

  return result.rows;
}
