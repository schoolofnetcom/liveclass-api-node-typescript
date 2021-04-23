import {Controller, Get} from "@tsed/common";
import {Task} from "../models/Task";
import {TaskService} from "../services/TaskService";

@Controller("/tasks")
export class TaskController {
  constructor(private taskService: TaskService) {}  
  @Get("/")
  async findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }
}
