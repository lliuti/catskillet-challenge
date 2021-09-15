import { getCustomRepository } from "typeorm";
import { TodoRepository } from "../../repositories/TodoRepository";
import { IUpdateTodoDTO } from "./UpdateTodoDTO";

class UpdateTodoUseCase {
  private todoRepository;

  constructor(customRepository) {
    if (customRepository.type === "MemoryRepository") {
      this.todoRepository = customRepository;
    } else {
      this.todoRepository = getCustomRepository(customRepository);
    }
  }

  async execute({
    id,
    title,
    description,
    done,
  }: IUpdateTodoDTO): Promise<void> {
    const doesTodoExist = await this.todoRepository.findOne(id);

    if (!doesTodoExist) {
      throw new Error("Todo not found");
    }

    await this.todoRepository.save({ id, title, description, done });
  }
}

export { UpdateTodoUseCase };
