import { Component } from '@angular/core';

@Component({
    selector: 'user-data',
    template:
    `
        <div class="user-data">
            <div class="user-photo"><i class="fa fa-user" aria-hidden="true"></i></div>
            <div class="user-name">Witaj <b>{{user.name}}</b></div>
        </div>
    `,
})

export class UserDataComponent  {
    user: string[];

    constructor(){
        this.user ={
            name: "Michał"
        };
    }
}

interface user {
    name: string;
}
