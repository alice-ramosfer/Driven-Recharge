import { Router } from "express";
import phonesRouter from "./phones.routes";
import rechargeRouter from "./recharges.routes";
import summaryRouter from "./summary.routes"

const router = Router();

router.use(phonesRouter);
router.use(rechargeRouter);
router.use(summaryRouter);


export default router;