import { CreateTaskDto } from './dto/create-task.dto';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}

  async getAllTasks(): Promise<Task[]> {
    const tasks = await this.tasksRepository.find();
    return tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }

  async fetchTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task not found with ID ${id}`);
    }

    return found;
  }

  // deleteTaskById(id: string): void {
  //   this.fetchTaskById(id);
  //   this.tasks = this.tasks.filter((task) => task.id !== id);
  // }

  async deleteTaskById(id: string): Promise<void> {
    const found = await this.fetchTaskById(id);
    console.log(found);
    if (!found) {
      throw new NotFoundException(`Task with ${id} not found`);
    }
    await this.tasksRepository.delete({ id });
  }
  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.fetchTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
