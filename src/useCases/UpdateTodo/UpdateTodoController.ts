import { Request, Response } from "express";
import { UpdateTodoUseCase } from "./UpdateTodoUseCase";

class UpdateTodoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title, description, done } = request.body;

    const updateTodoUseCase = new UpdateTodoUseCase();

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
