import express from "express"

import cors from "cors"
import swaggerUI from "swagger-ui-express"
import dotenv from "dotenv"
import cookieparser from "cookie-parser"
import morgan from "morgan"
import compression from "compression"
import helmet from "helmet"

dotenv.config()
export const app = express()
app.use(cookieparser());
app.use(helmet())
app.use(morgan("dev"));
app.use(compression());
