import "express-async-errors";
import express from "express";
import routers from "./routers";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();
app.use(express.json());
app.use(routers);



// ⚠️ SEMPRE por último
app.use(errorHandler);
export default app;