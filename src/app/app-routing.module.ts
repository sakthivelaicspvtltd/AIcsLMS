import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { PolicyComponent } from './policy/policy.component';
import { ProfileComponent } from './profile/profile.component';
import { LeaveApplyComponent } from './leave-apply/leave-apply.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { LeaveManageComponent } from './leave-manage/leave-manage.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},

  {path:'home', component:HomeComponent},
  {path:'leave', component:LeaveApplyComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'about', component:AboutComponent},
  {path:'policy', component:PolicyComponent},
  {path:'profile', component:ProfileComponent},
  {path:'leaveStatus', component:LeaveStatusComponent},
  {path:'leaveManage', component:LeaveManageComponent},
  {path:'**', component:NotfoundComponent},
    // children:[
    // ]


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  routingComponent = [ LoginComponent,HomeComponent,NotfoundComponent,DashboardComponent,AboutComponent,PolicyComponent,ProfileComponent,LeaveApplyComponent,LeaveManageComponent,LeaveStatusComponent ];
