import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    signUp(data: any) {
        return this.http.post(`${environment.apiHost}/users`, data);
    }

    signIn(data: any) {
        return this.http.post(`${environment.apiHost}/login`, data);
    }
}
