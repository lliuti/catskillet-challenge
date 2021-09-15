import { Request, Response } from "express";
import { DeleteTodoUseCase } from "./DeleteTodoUseCase";

class DeleteTodoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteTodoUseCase = new DeleteTodoUseCase();
    try {
      await deleteTodoUseCase.execute(id);
      return response.status(204).send();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { DeleteTodoController };
