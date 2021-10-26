import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFileComponent } from './components/add-file/add-file.component';
import { FileDetailsComponent } from './components/file-details/file-details.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FilesListComponent } from './components/files-list/files-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'files', pathMatch: 'full'},
  { path: 'files', component: FilesListComponent},
  { path: 'files/:id', component: FileDetailsComponent},
  { path: 'add', component: AddFileComponent},
  { path: 'upload', component: FileUploadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
