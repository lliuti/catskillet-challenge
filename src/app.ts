import "reflect-metadata";
import express from "express";
import "./database/index";

const app = express();

app.use(express.json());

export { app };
