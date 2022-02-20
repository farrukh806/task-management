import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getAllTasks() {
  //   return this.tasksService.getAllTasks();
  // }

  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //   return this.tasksService.createTask(createTaskDto);
  // }

  // @Get('/:id')
  // fetchTaskById(@Param('id') id: string): Task {
  //   return this.tasksService.fetchTaskById(id);
  // }

  // @Delete('/:id')
  // deleteTaskById(@Param('id') id: string): void {
  //   return this.tasksService.deleteTaskById(id);
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatus: UpdateTaskStatusDto,
  // ): Task {
  //   const { status } = updateTaskStatus;
  //   return this.tasksService.updateTaskStatus(id, status);
  // }
}
