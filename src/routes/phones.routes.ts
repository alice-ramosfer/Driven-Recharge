import { postPhone } from "controllers/phones.controller";
import { Router } from "express";
import { validateSchema } from "middlewares/validation.middleware";
import { phoneSchema } from "schemas/phone.schema";


const router = Router();

router.post("/phones", validateSchema(phoneSchema), postPhone);

export default router;
