import { getCustomRepository } from "typeorm";

class DeleteTodoUseCase {
  private todoRepository;

  constructor(customRepository) {
    if (customRepository.type === "MemoryRepository") {
      this.todoRepository = customRepository;
    } else {
      this.todoRepository = getCustomRepository(customRepository);
    }
  }

  async execute(id: string): Promise<void> {
    const doesTodoExist = await this.todoRepository.findOne(id);

    if (!doesTodoExist) {
      throw new Error("Todo not found");
    }

    await this.todoRepository.delete(id);
  }
}

export { DeleteTodoUseCase };
