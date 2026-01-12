import { Router } from "express";
import { getRecharges, postRecharge } from "../controllers/recharges.controller";
import { validateSchema } from "../middlewares/validation.middleware";
import { rechargeSchema } from "../schemas/recharge.schema";

const router = Router();

router.post("/recharges", validateSchema(rechargeSchema), postRecharge);
router.get("/recharges/:number", getRecharges);

export default router;
