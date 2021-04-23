import {Controller, Get} from "@tsed/common";

@Controller("/tasks")
export class TaskController {
  @Get("/")
  get() {
    return "hello";
  }
}
