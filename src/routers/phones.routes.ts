import { getPhones, postPhone } from "../controllers/phones.controller";
import { Router } from "express";
import { validateSchema } from "../middlewares/validation.middleware";
import { phoneSchema } from "../schemas/phone.schema";


const router = Router();

router.post("/phones", validateSchema(phoneSchema), postPhone);
router.get("/phones/:document", getPhones);

export default router;
