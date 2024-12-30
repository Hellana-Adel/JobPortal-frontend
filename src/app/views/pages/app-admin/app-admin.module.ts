import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAdminRoutingModule } from './app-admin-routing.module';
import { AppAdminComponent } from './app-admin.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FeatherIconModule } from 'src/app/core/feather-icon/feather-icon.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AllUserComponent } from './all-user/all-user.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table'

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { JobDetailsComponent } from './job-details/job-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppAdminComponent,

    AllUserComponent,
    JobDetailsComponent,
    //WelcomeComponent,


  ],
  imports: [
    CommonModule,
    AppAdminRoutingModule,
    PerfectScrollbarModule,
    FeatherIconModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    NgApexchartsModule,
    MatTreeModule,
    NgxPaginationModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,
    AngularEditorModule,
    MatStepperModule,
    NgxOrgChartModule,
    NgMultiSelectDropDownModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MatTableModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },

      defaultLanguage: 'en',

      isolate: true
    })
  ],
  providers: []
})
export class AppAdminModule { }
