import { Request, Response, NextFunction } from "express";

export function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.type === "conflict") {
    return res.status(409).send(error.message);
  }

  if (error.type === "not_found") {
    return res.status(404).send(error.message);
  }

  if (error.type === "unprocessable") {
    return res.status(422).send(error.message);
  }

  console.error(error);
  return res.sendStatus(500);
}
