import { getCustomRepository } from "typeorm";
import { Todo } from "../../entities/Todo";
import { TodoRepository } from "../../repositories/TodoRepository";

class ListTodoUseCase {
  private todoRepository;

  constructor(customRepository) {
    if (customRepository.type === "MemoryRepository") {
      this.todoRepository = customRepository;
    } else {
      this.todoRepository = getCustomRepository(customRepository);
    }
  }

  async execute(): Promise<Todo[]> {
    const list = await this.todoRepository.find();

    return list;
  }
}

export { ListTodoUseCase };
