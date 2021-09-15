import { Router } from "express";
import { CreateTodoController } from "./useCases/CreateTodo/CreateTodoController";
import { ListTodoController } from "./useCases/ListTodo/ListTodoController";
import { UpdateTodoController } from "./useCases/UpdateTodo/UpdateTodoController";
import { DeleteTodoController } from "./useCases/DeleteTodo/DeleteTodoController";

const routes = Router();

const createTodoController = new CreateTodoController();
const listTodoController = new ListTodoController();
const updateTodoController = new UpdateTodoController();
const deleteTodoController = new DeleteTodoController();

routes.get("/todos", listTodoController.handle);
routes.post("/todos", createTodoController.handle);
routes.put("/todos/:id", updateTodoController.handle);
routes.delete("/todos/:id", deleteTodoController.handle);

export { routes };
