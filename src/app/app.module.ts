import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFileComponent } from './components/add-file/add-file.component';
import { FileDetailsComponent } from './components/file-details/file-details.component';
import { FilesListComponent } from './components/files-list/files-list.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFileComponent,
    FileDetailsComponent,
    FilesListComponent,
    FileUploadComponent
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
