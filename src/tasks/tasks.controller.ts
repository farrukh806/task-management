import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { FilterTaskDto } from './dto/filter-tasks.dto';
import { Task } from './task.entity';
import { TaskStatus } from './tasks-status.enum';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(@Query() filterTaskDto: FilterTaskDto): Promise<Task[]> {
    return this.tasksService.getAllTasks(filterTaskDto);
  }

  @Post()
  createtask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get('/:id')
  fetchTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.fetchTaskById(id);
  }

  @Delete('/:id')
  deleteTaskById(@Param('id') id: string): Promise<void> {
    return this.tasksService.deleteTaskById(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') updateTaskStatus: TaskStatus,
  ): Promise<Task> {
    return this.tasksService.updateTaskStatus(id, updateTaskStatus);
  }
  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatus: UpdateTaskStatusDto,
  // ): Task {
  //   const { status } = updateTaskStatus;
  //   return this.tasksService.updateTaskStatus(id, status);
  // }
}
