import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'authentication', loadChildren: () => import('./authentication/authentication.module')
        .then(m => m.AuthenticationModule) 
    }, { path: '', loadChildren: () => import('./users/users.module')
        .then(m => m.UsersModule) 
    }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
