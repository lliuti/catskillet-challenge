import { getCustomRepository } from "typeorm";
import { TodoRepository } from "../../repositories/TodoRepository";
import { IUpdateTodoDTO } from "./UpdateTodoDTO";

class UpdateTodoUseCase {
  async execute({
    id,
    title,
    description,
    done,
  }: IUpdateTodoDTO): Promise<void> {
    const todoRepository = getCustomRepository(TodoRepository);

    const doesTodoExist = todoRepository.findOne(id);

    if (!doesTodoExist) {
      throw new Error("Todo not found");
    }

    await todoRepository.save({ id, title, description, done });
  }
}

export { UpdateTodoUseCase };
