import { Request, Response } from "express";
import { getSummaryByDocument } from "../services/summary.service";

export async function getSummary(req: Request, res: Response) {
  const { document } = req.params;
  const summary = await getSummaryByDocument(document);
  res.status(200).send(summary);
}
