import { EntityRepository, Repository } from "typeorm";
import { Todo } from "../entities/Todo";

@EntityRepository(Todo)
class TodoRepository extends Repository<Todo> {}

export { TodoRepository };
