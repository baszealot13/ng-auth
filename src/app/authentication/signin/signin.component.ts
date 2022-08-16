import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    signInForm = {
        username: '',
        password: ''
    }
    constructor(private authServ: AuthenticationService, private router: Router) { }

    ngOnInit(): void {
    }

    submitSignIn() {
        this.authServ.signIn(this.signInForm).subscribe({
            next: ({ token }: any) => {
                localStorage.setItem('token', token);
            },
            complete: () => {
                this.router.navigate(['/']);
            }
        })
    }

}
