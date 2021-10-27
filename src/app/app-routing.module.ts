import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileSettingsComponent } from './components/file-settings/file-settings.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FilesListComponent } from './components/files-list/files-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'files', pathMatch: 'full'},
  { path: 'files', component: FilesListComponent},
  { path: 'upload', component: FileUploadComponent},
  { path: 'settings', component: FileSettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
