import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'authentication', loadChildren: () => import('./authentication/authentication.module')
        .then(m => m.AuthenticationModule) 
    }, { path: '', loadChildren: () => import('./users/users.module')
        .then(m => m.UsersModule) 
    },
    { path: 'chats', loadChildren: () => import('./chats/chats.module').then(m => m.ChatsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
