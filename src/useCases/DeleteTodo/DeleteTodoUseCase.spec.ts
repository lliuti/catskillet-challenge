import { TodoMemoryRepository } from "../../repositories/MemoryRepositories/TodoMemoryRepository";
import { CreateTodoUseCase } from "../CreateTodo/CreateTodoUseCase";
import { DeleteTodoUseCase } from "./DeleteTodoUseCase";

let todoMemoryRepository: TodoMemoryRepository;
let deleteTodoUseCase: DeleteTodoUseCase;
let createTodoUseCase: CreateTodoUseCase;

describe("delete todo use case", () => {
  beforeEach(() => {
    todoMemoryRepository = new TodoMemoryRepository();
    deleteTodoUseCase = new DeleteTodoUseCase(todoMemoryRepository);
    createTodoUseCase = new CreateTodoUseCase(todoMemoryRepository);
  });

  it("should delete existing todo", async () => {
    const fakeTodoToDelete = {
      title: "fake title",
      description: "fake desc",
      done: false,
    };

    await createTodoUseCase.execute(fakeTodoToDelete);

    const createdTodo = await todoMemoryRepository.findByTitle(
      fakeTodoToDelete.title
    );

    await deleteTodoUseCase.execute(createdTodo.id);

    const searchForDeletedTodo = await todoMemoryRepository.findByTitle(
      fakeTodoToDelete.title
    );

    expect(searchForDeletedTodo).toBeUndefined();
  });

  it("should not delete unexisting todo", async () => {
    expect(async () => {
      const fakeTodoToDelete = {
        id: "fake-id-to-attempt-to-delete",
        title: "fake title",
        description: "fake desc",
        done: false,
      };

      await deleteTodoUseCase.execute(fakeTodoToDelete.id);
    }).rejects.toThrowError();
  });
});
