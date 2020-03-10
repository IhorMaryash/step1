import { ITask } from "./user.interface";


export class MTask implements ITask {
  constructor(
    public taskName: string,
    public taskStatus: string
  ) { }
}
