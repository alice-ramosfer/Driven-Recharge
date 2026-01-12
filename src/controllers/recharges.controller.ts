import { Request, Response } from "express";
import { createRecharge, getRechargesByNumber } from "../services/recharges.service";


export async function postRecharge(req: Request, res: Response) {
  const recharge = await createRecharge(req.body);
  res.status(201).send(recharge);
}

export async function getRecharges(req: Request, res: Response) {
  const { number } = req.params;
  const recharges = await getRechargesByNumber(number);
  res.status(200).send(recharges);
}
