import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users: any = [];

    constructor(private userServ: UserService) { }

    ngOnInit(): void {
        this.userServ.getUsers().subscribe({
            next: (users: any) => {
                this.users = users
            }
        });
    }

}
