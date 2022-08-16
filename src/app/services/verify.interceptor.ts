import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class VerifyInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token = localStorage.getItem('token');

        if (token && request.headers !== undefined) {
            return next.handle(request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token}`
                    }
                })).pipe(tap({
                    error: (error: HttpErrorResponse) => {
                        if (error.status === 401) {
                            this.router.navigate(['/authentication/signin']);
                        }
                    }
                }));
        }

        return next.handle(request).pipe(tap({
            error: (error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.router.navigate(['/authentication/signin']);
                }
            }
        }));
    }
}
