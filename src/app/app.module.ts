import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesListComponent } from './components/files-list/files-list.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FileSettingsComponent } from './components/file-settings/file-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    FilesListComponent,
    FileUploadComponent,
    FileSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
