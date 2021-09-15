import { getCustomRepository } from "typeorm";
import { ICreateTodoDTO } from "./ICreateTodoDTO";

class CreateTodoUseCase {
  private todoRepository;

  constructor(customRepository) {
    if (customRepository.type === "MemoryRepository") {
      this.todoRepository = customRepository;
    } else {
      this.todoRepository = getCustomRepository(customRepository);
    }
  }

  async execute({
    title,
    description,
    done = false,
  }: ICreateTodoDTO): Promise<void> {
    const titleAlreadyExists = await this.todoRepository.findByTitle(title);

    if (titleAlreadyExists) {
      throw new Error("There is already a registered Todo with this title");
    }

    const todo = this.todoRepository.create({
      title,
      description,
      done,
    });

    await this.todoRepository.save(todo);
  }
}

export { CreateTodoUseCase };
