import { Component } from '@angular/core';
import { PostService } from '../services/test.services';
import {Ng2PaginationModule} from 'ng2-pagination';
declare var jquery:any;
declare var $ :any;

@Component({
    moduleId: module.id,
    selector: 'user-info',
    templateUrl: 'user.component.html',
    providers: [PostService]
})

export class UserComponent  {
    name: string;
    sername: string;
    email: string;
    address: address;
    hobbies: string[];
    posts: Post[];
    page: number = 1;
    

    constructor(private PostService: PostService){

        this.name = 'John';
        this.sername = 'Doe';
        this.email = 'example@mail.com';
        this.address = {
            street: 'aleja Jana Pawla',
            city: 'Warsaw',
            postCode: '00-571',
        };
        
        this.hobbies = ['music', 'programming', 'sports'];

        this.PostService.getPosts().subscribe(posts => {
            this.posts = posts;
        });

    }

    togglePopUp(){
        $(".popUp").toggle();
    }

}

interface address {
    street: string;
    city: string;
    postCode: string;
}

interface Post {
    id: number;
    thumbnailUrl: string;
    title: string;
    url: string;
}
