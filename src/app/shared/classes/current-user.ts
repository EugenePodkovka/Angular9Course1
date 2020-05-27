import { Injectable } from '@angular/core';
import { currentUser, CurrentUserBase } from '../global-variables/current-user';

@Injectable({
    providedIn: 'root',
    useValue: currentUser
})
export class CurrentUser extends CurrentUserBase { }
