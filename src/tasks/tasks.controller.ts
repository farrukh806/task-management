import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { FetchTaskDto } from './dto/fetch-task.dto';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get('/:id')
  fetchTaskById(@Param() fetchTaskDto: FetchTaskDto): Task {
    return this.tasksService.fetchTaskById(fetchTaskDto);
  }
}
