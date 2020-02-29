import { NUser } from "./user.interface";


export class User1 implements NUser {
    constructor(
        public id: number,
        public task: string,
        public check: boolean,
        public done: boolean
      ) {}
}
