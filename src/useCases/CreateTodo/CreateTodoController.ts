import { Request, Response } from "express";
import { CreateTodoUseCase } from "./CreateTodoUseCase";

class CreateTodoController {
  async handle(request: Request, response: Response) {
    const { title, description, done } = request.body;

    const createTodoUseCase = new CreateTodoUseCase();

    try {
      await createTodoUseCase.execute({ title, description, done });
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateTodoController };
