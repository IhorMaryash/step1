import { IUser } from './user.interface';

export class MUser implements IUser  {
    constructor(
       public firstName: string,
       public lastName: string,
       public phoneNumber: string
    ) {}
}