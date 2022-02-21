import { CreateTaskDto } from './dto/create-task.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { UpdateResult } from 'typeorm';
import { TaskStatus } from './tasks-status.enum';
import { FilterTaskDto } from './dto/filter-tasks.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}

  async getAllTasks(filterTaskDto: FilterTaskDto): Promise<Task[]> {
    return await this.tasksRepository.getTasks(filterTaskDto);

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

  async deleteTaskById(id: string): Promise<void> {
    const found = await this.fetchTaskById(id);

    if (!found) {
      throw new NotFoundException(`Task with ${id} not found`);
    }
    await this.tasksRepository.delete({ id });
  }

  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    const task = await this.fetchTaskById(id);

    task.status = status;

    await this.tasksRepository.save(task);
    return task;
  }
}
