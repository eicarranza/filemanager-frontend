import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FilesListComponent } from './components/files-list/files-list.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FileSettingsComponent } from './components/file-settings/file-settings.component';
import { FilesTableComponent } from './components/files-table/files-table.component';

import {MatPaginatorModule} from '@angular/material/paginator';

// Error Handle
import { InterceptorService } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    FilesListComponent,
    FileUploadComponent,
    FileSettingsComponent,
    FilesTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
