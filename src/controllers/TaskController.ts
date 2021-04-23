import {BodyParams, Controller, Delete, Get, PathParams, Post, Put} from "@tsed/common";
import {NotFound} from "@tsed/exceptions";
import {Task} from "../models/Task";
import {TaskService} from "../services/TaskService";

@Controller("/tasks")
export class TaskController {
  
  constructor(private taskService: TaskService) {}  

  @Get("/")
  async findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Get("/:id")
  async get(@PathParams("id") id: string): Promise<Task> {
    const task = await this.taskService.findById(id);

    if (task) {
      return task;
    }

    throw new NotFound("Task not found");
  }

  @Post("/")
  async save(@BodyParams() task: Task) {
    return this.taskService.save(task);
  }
  

  @Delete("/:id")
  async remove(@PathParams("id") id: string): Promise<void> {
    await this.taskService.remove(id);
  }  
}
