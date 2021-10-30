import { Component, OnInit } from '@angular/core';
import { File } from 'src/app/models/file.model';
import { FilesService } from 'src/app/services/files.service';
import { Settings } from 'src/app/models/settings.model';


@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.css']
})
export class FilesListComponent implements OnInit {
  files?: File[];
  filesAllowed?: Settings[];
  currentFile: File = {};
  name: string = "";
  errorMessage: string = "";
  url = "http://localhost:8000";

  constructor(private fileService: FilesService) { 
    this.retrieveFiles();
    this.getFilesAllowed();
  }

  ngOnInit(): void { }

  retrieveFiles(): void {
    this.fileService.getAll()
      .subscribe(
        data => {
          this.files = data;
        },
        error => {
          this.errorMessage = error.message;
        });
  }

  getFilesAllowed(): void {
    this.fileService.getFilesAllowed()
      .subscribe(
        data => {
          this.filesAllowed = data;
        },
        error => {
          this.errorMessage = error.message;
        });
  }

  sendFilesFiltered(extension:any): File[]{
    let filesFiltered = this.files!.filter((file) =>{
      return file.extension === extension;
    });

    return filesFiltered;
  }

  sendFilesFilteredLength(extension:any): number{
    let filesFiltered = this.files!.filter((file) =>{
      return file.extension === extension;
    });

    return filesFiltered.length;
  }
}

