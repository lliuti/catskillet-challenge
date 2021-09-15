import { getCustomRepository } from "typeorm";
import { Todo } from "../../entities/Todo";
import { TodoRepository } from "../../repositories/TodoRepository";

class ListTodoUseCase {
  async execute(): Promise<Todo[]> {
    const todoRepository = getCustomRepository(TodoRepository);
    const list = await todoRepository.find();

    if (list.length < 1) {
      throw new Error("Could not find any Todo");
    }

    return list;
  }
}

export { ListTodoUseCase };
