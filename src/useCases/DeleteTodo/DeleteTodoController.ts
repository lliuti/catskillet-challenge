import { Request, Response } from "express";
import { TodoRepository } from "../../repositories/TodoRepository";
import { DeleteTodoUseCase } from "./DeleteTodoUseCase";

class DeleteTodoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const todoRepository = new TodoRepository();
    const deleteTodoUseCase = new DeleteTodoUseCase(todoRepository);
    try {
      await deleteTodoUseCase.execute(id);
      return response.status(204).send();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { DeleteTodoController };
