import { Request, Response } from "express";
import { ListTodoUseCase } from "./ListTodoUseCase";

class ListTodoController {
  async handle(request: Request, response: Response) {
    const listTodoUseCase = new ListTodoUseCase();
    try {
      const list = await listTodoUseCase.execute();
      return response.status(200).json(list);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListTodoController };
