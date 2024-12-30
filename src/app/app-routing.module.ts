
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';
import { JobDetailsComponent } from './views/pages/app-admin/job-details/job-details.component';
import { WelcomeComponent } from './views/pages/app-admin/welcome/welcome.component';



const routes: Routes = [

  {
    path: '',
    component: BaseComponent,
    children: [

      { path: '', component: WelcomeComponent }, // Default route
      { path: 'job/:id', component: JobDetailsComponent },
    ],
  },


  { path: 'AppAdmin', loadChildren: () => import('./views/pages/app-admin/app-admin.module').then(m => m.AppAdminModule) },
  {
    path: 'error',
    component: ErrorPageComponent,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent
  },

  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
