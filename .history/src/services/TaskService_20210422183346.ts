import {Inject, Service} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {Task} from "../models/Task";

@Service()
export class TaskService {
    @Inject(Task)
    private Task: MongooseModel<Task>;

    async findAll(): Promise<Task[]> {
        const list = await this.Task.find({}).exec();
        return list;
    }    

    async get(@PathParams("id") @CalendarId() id: string): Promise<Calendar> {
        const calendar = await this.calendarsService.find(id);
    
        if (calendar) {
          return calendar;
        }
    
        throw new NotFound("Calendar not found");
      }
    
}