import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../services/authentication.guard';
import { UsersComponent } from './users.component';

const routes: Routes = [{ path: '', component: UsersComponent, canActivate: [AuthenticationGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
