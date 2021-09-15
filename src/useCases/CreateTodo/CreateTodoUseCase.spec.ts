import { TodoMemoryRepository } from "../../repositories/MemoryRepositories/TodoMemoryRepository";
import { CreateTodoUseCase } from "./CreateTodoUseCase";

let todoMemoryRepository: TodoMemoryRepository;
let createTodoUseCase: CreateTodoUseCase;

describe("create todo use case", () => {
  beforeEach(() => {
    todoMemoryRepository = new TodoMemoryRepository();
    createTodoUseCase = new CreateTodoUseCase(todoMemoryRepository);
  });

  it("should create a new todo", async () => {
    const todo = {
      title: "Test title",
      description: "Test description",
      done: false,
    };

    await createTodoUseCase.execute({
      title: todo.title,
      description: todo.description,
      done: todo.done,
    });

    const createdTodo = await todoMemoryRepository.findByTitle(todo.title);

    expect(createdTodo).toHaveProperty("id");
  });

  it("should not create a todo with a title that is already registered", async () => {
    expect(async () => {
      const todo = {
        title: "Repeated todo Title",
        description: "Test description",
        done: false,
      };

      await createTodoUseCase.execute({
        title: todo.title,
        description: todo.description,
        done: todo.done,
      });

      await createTodoUseCase.execute({
        title: todo.title,
        description: todo.description,
        done: todo.done,
      });
    }).rejects.toThrowError();
  });
});
