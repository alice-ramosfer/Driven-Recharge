import { Request, Response } from "express";
import { createPhone, getPhonesByDocument } from "../services/phones.service";


export async function postPhone(req: Request, res: Response) {
  const phone = await createPhone(req.body);
  res.status(201).send(phone);
}

export async function getPhones(req: Request, res: Response) {
  const { document } = req.params;
  const phones = await getPhonesByDocument(document);
  res.status(200).send(phones);
}
