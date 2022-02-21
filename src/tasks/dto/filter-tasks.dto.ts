import { TaskStatus } from '../tasks-status.enum';

export interface FilterTaskDto {
  status?: TaskStatus;
  search?: string;
}
