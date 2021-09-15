import { TodoMemoryRepository } from "../../repositories/MemoryRepositories/TodoMemoryRepository";
import { UpdateTodoUseCase } from "./UpdateTodoUseCase";

let todoMemoryRepository: TodoMemoryRepository;
let updateTodoUseCase: UpdateTodoUseCase;

describe("update todo use case", () => {
  beforeEach(() => {
    todoMemoryRepository = new TodoMemoryRepository();
    updateTodoUseCase = new UpdateTodoUseCase(todoMemoryRepository);
  });

  it("should not update an unexisting todo", async () => {
    expect(async () => {
      const id = "unexisting-id";
      const title = "example title";
      const description = "example description";
      const done = false;

      await updateTodoUseCase.execute({ id, title, description, done });
    }).rejects.toThrowError();
  });
});
