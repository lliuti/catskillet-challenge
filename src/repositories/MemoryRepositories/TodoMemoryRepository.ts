import { Todo } from "../../entities/Todo";
import { ICreateTodoDTO } from "../../useCases/CreateTodo/ICreateTodoDTO";

class TodoMemoryRepository {
  storedTodos: Todo[] = [];
  public type = "MemoryRepository";

  async create({
    title,
    description,
    done = false,
  }: ICreateTodoDTO): Promise<void> {
    const todo = new Todo();
    const data = { title, description, done };
    Object.assign(todo, data);
    this.storedTodos.push(todo);
  }

  async findOne(id: string): Promise<Todo> {
    const todo = this.storedTodos.find((todo) => todo.id === id);
    return todo;
  }

  async findByTitle(title: string): Promise<Todo> {
    const todo = this.storedTodos.find((todo) => todo.title === title);
    return todo;
  }

  async find(): Promise<Todo[]> {
    const list = this.storedTodos;
    return list;
  }

  async save(): Promise<void> {}

  delete() {}
}

export { TodoMemoryRepository };
