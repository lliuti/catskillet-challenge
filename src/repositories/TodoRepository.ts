import { EntityRepository, Repository } from "typeorm";
import { Todo } from "../entities/Todo";

@EntityRepository(Todo)
class TodoRepository extends Repository<Todo> {
  async findByTitle(title: string): Promise<Todo> {
    const todo = await this.findOne({ title: title });
    return todo;
  }
}

export { TodoRepository };
