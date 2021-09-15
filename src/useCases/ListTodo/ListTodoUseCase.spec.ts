import { TodoMemoryRepository } from "../../repositories/MemoryRepositories/TodoMemoryRepository";
import { ListTodoUseCase } from "./ListTodoUseCase";

let todoMemoryRepository: TodoMemoryRepository;
let listTodoUseCase: ListTodoUseCase;

describe("list todo use case", () => {
  beforeEach(() => {
    todoMemoryRepository = new TodoMemoryRepository();
    listTodoUseCase = new ListTodoUseCase(todoMemoryRepository);
  });

  it("should list all existing todos", async () => {
    const list = await listTodoUseCase.execute();
    expect(list).not.toBeNull();
  });
});
