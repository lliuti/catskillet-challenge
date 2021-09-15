import { getCustomRepository } from "typeorm";
import { TodoRepository } from "../../repositories/TodoRepository";

class DeleteTodoUseCase {
  async execute(id: string): Promise<void> {
    const todoRepository = getCustomRepository(TodoRepository);

    const doesTodoExist = todoRepository.findOne(id);

    if (!doesTodoExist) {
      throw new Error("Todo not found");
    }

    await todoRepository.delete(id);
  }
}

export { DeleteTodoUseCase };
