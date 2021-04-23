import {Required} from "@tsed/schema";
import {Model, ObjectID} from "@tsed/mongoose";

@Model()
export class Task {
  @ObjectID("id")
  _id: string;
  
  @Required()
  title: string;
}