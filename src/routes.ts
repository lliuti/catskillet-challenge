import { Router } from "express";
import { CreateTodoController } from "./useCases/CreateTodo/CreateTodoController";

const routes = Router();

const createTodoController = new CreateTodoController();

routes.post("/todos", createTodoController.handle);

export { routes };
