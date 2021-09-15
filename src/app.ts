import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerConfig from "./swagger.json";
import "./database/index";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use(routes);

export { app };
