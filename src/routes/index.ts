import { Router } from "express";
import phonesRouter from "./phones.routes";
const router = Router();

router.use(phonesRouter);


export default router;