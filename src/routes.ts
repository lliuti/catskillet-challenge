import { Router } from "express";
import { CreateTodoController } from "./useCases/CreateTodo/CreateTodoController";
import { ListTodoController } from "./useCases/ListTodo/ListTodoController";
import { UpdateTodoController } from "./useCases/UpdateTodo/UpdateTodoController";

const routes = Router();

const createTodoController = new CreateTodoController();
const listTodoController = new ListTodoController();
const updateTodoController = new UpdateTodoController();

routes.get("/todos", listTodoController.handle);
routes.post("/todos", createTodoController.handle);
routes.put("/todos/:id", updateTodoController.handle);

export { routes };
