import {Inject, Service} from "@tsed/common";
import {$log} from "@tsed/logger";
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
}