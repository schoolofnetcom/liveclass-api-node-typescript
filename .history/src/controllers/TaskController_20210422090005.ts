import {Controller, Get} from "@tsed/common";
import {TaskService} from "../services/TaskService";

@Controller("/tasks")
export class TaskController {
  constructor(private taskService: TaskService) {}  
  @Get("/")
  get() {
    return "hello";
  }
}
