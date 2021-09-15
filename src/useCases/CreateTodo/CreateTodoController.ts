import { Request, Response } from "express";
import { TodoRepository } from "../../repositories/TodoRepository";
import { CreateTodoUseCase } from "./CreateTodoUseCase";

class CreateTodoController {
  async handle(request: Request, response: Response) {
    const { title, description, done } = request.body;

    const todoRepository = new TodoRepository();
    const createTodoUseCase = new CreateTodoUseCase(todoRepository);

    try {
      await createTodoUseCase.execute({ title, description, done });
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateTodoController };
