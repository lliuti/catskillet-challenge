import { Request, Response } from "express";
import { TodoRepository } from "../../repositories/TodoRepository";
import { UpdateTodoUseCase } from "./UpdateTodoUseCase";

class UpdateTodoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title, description, done } = request.body;

    const todoRepository = new TodoRepository();
    const updateTodoUseCase = new UpdateTodoUseCase(todoRepository);

    try {
      const todo = await updateTodoUseCase.execute({
        id,
        title,
        description,
        done,
      });

      return response.status(201).json(todo);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }
}

export { UpdateTodoController };
