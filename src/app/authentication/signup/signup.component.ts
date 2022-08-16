import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    // property
    signUpForm = {
        username: '',
        password: '',
        user_email: ''
    };
    // import service or library service
    constructor(private authServ: AuthenticationService, private router: Router) { }

    // method
    ngOnInit(): void {
    }

    submitSignUp() {
        this.authServ.signUp(this.signUpForm).subscribe({
            complete: () => {
                this.router.navigate(['/authentication/signin'])
            }
        });
    }

}
