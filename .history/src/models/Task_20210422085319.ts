import {Property} from "@tsed/schema";
import {Model, ObjectID} from "@tsed/mongoose";

@Model()
export class Task {
  @ObjectID("id")
  _id: string;

  @Property()
  title: string;
}