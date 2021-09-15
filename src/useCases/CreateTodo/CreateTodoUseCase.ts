import { getCustomRepository } from "typeorm";
import { TodoRepository } from "../../repositories/TodoRepository";
import { ICreateTodoDTO } from "./ICreateTodoDTO";

class CreateTodoUseCase {
  async execute({
    title,
    description,
    done = false,
  }: ICreateTodoDTO): Promise<void> {
    const todoRepositories = getCustomRepository(TodoRepository);
    const todo = todoRepositories.create({
      title,
      description,
      done,
    });

    await todoRepositories.save(todo);
  }
}

export { CreateTodoUseCase };
