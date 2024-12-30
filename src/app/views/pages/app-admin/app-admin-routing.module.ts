
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUserComponent } from './all-user/all-user.component';
import { AppAdminComponent } from './app-admin.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { WelcomeComponent } from './welcome/welcome.component';



const routes: Routes = [
  {
    path: '', component: AppAdminComponent,
    //canActivate:[AuthGuard],
    children: [
      { path: '', component: WelcomeComponent }, // Default route
      { path: "allUser", component: AllUserComponent },
      { path: "job/:id", component: JobDetailsComponent },

    ]
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAdminRoutingModule { }
