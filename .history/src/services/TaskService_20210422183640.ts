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

    async findById(id: string): Promise<Task | null> {
        const obj = await this.Task.findById(id).exec();
        return obj;
    }      
}