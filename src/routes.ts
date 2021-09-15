import { Router } from "express";
import { CreateTodoController } from "./useCases/CreateTodo/CreateTodoController";
import { ListTodoController } from "./useCases/ListTodo/ListTodoController";

const routes = Router();

const createTodoController = new CreateTodoController();
const listTodoController = new ListTodoController();

routes.get("/todos", listTodoController.handle);
routes.post("/todos", createTodoController.handle);

export { routes };
