import { AppAdminModule } from './views/pages/app-admin/app-admin.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './views/layout/layout.module';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown"
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
2

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from '@fullcalendar/angular';

import { AsyncPipe, CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { FileSizePipePipe } from './core/Pipe/file-size-pipe.pipe';
import { SafePipe } from './core/Pipe/safe.pipe';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment.prod';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './views/pages/app-admin/welcome/welcome.component';



FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  listPlugin,
  timeGridPlugin,
  bootstrapPlugin
]);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    FileSizePipePipe,
    SafePipe,
    //BulkDocumentMetadataComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxDocViewerModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule,
    NgxPaginationModule,
    FullCalendarModule,
    NgbPaginationModule,
    RouterModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    })

  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },

  {
    provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
    useValue: {
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        xml: () => import('highlight.js/lib/languages/xml'),
        typescript: () => import('highlight.js/lib/languages/typescript'),
        scss: () => import('highlight.js/lib/languages/scss'),
      }
    }
  },
  { provide: LocationStrategy, useClass: HashLocationStrategy },

  ],

  bootstrap: [AppComponent],

})
export class AppModule { }
