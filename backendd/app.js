import express from "express"

import cors from "cors"
import swaggerUI from "swagger-ui-express"  //swagger-ui-express is a package that allows you to serve auto-generated swagger-ui generated API docs from express. It is a middleware that serves the swagger-ui assets and provides a UI for interacting with the API.
import dotenv from "dotenv"
import cookieparser from "cookie-parser"  //cookie-parser is a middleware that parses cookies attached to the client request object. It populates the req.cookies object with the cookies sent by the client. This is useful for handling authentication and session management in web applications.
import morgan from "morgan"  //morgan is a middleware that logs HTTP requests and responses in the console. It provides information about the request method, URL, status code, response time, and other details. This is useful for debugging and monitoring the performance of the application.
import compression from "compression"  //compression is a middleware that compresses the response body using gzip or deflate algorithms. It reduces the size of the response and improves the performance of the application by reducing the amount of data sent over the network. This is useful for optimizing the speed and efficiency of web applications.
import helmet from "helmet"  //helmet is a middleware that helps secure the application by setting various HTTP headers. It protects against common web vulnerabilities such as cross-site scripting (XSS), clickjacking, and MIME sniffing. It also provides options to configure security policies and customize the headers according to the application's needs. This is useful for enhancing the security of web applications and protecting sensitive data.
import { swaggerSpec } from "./config/swagger.js";

dotenv.config()
export const app = express()
app.use(cookieparser());
app.use(helmet())
app.use(morgan("dev"));
app.use(compression());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec)); //swagger-ui-express is a package that allows you to serve auto-generated swagger-ui generated API docs from express. It is a middleware that serves the swagger-ui assets and provides a UI for interacting with the API.
