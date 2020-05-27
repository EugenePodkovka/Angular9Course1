import { User } from '../interfaces/user';

export class CurrentUserBase {
    data: User;
    isLoggedIn: boolean;
    isAdmin: boolean;

    constructor() {
        this.data = {} as User;
    }
}

export let currentUser = new CurrentUserBase();
