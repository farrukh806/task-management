import { CreateTaskDto } from './dto/create-task.dto';
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as generateId } from 'uuid';
import { FetchTaskDto } from './dto/fetch-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: generateId(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  fetchTaskById(fetchTaskDto: FetchTaskDto): Task {
    const { id } = fetchTaskDto;
    return this.tasks.find((task) => task.id === id);
  }
}
