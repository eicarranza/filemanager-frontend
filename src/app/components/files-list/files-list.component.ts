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
  currentIndex = -1;
  name = '';
  url = 'http://localhost:8000';

  constructor(private fileService: FilesService) { }

  ngOnInit(): void {
    this.retrieveFiles();
    this.getFilesAllowed();
  }

  retrieveFiles(): void {
    this.fileService.getAll()
      .subscribe(
        data => {
          this.files = data;
        },
        error => {
          console.log(error);
        });
  }

  getFilesAllowed(): void {
    this.fileService.getFilesAllowed()
      .subscribe(
        data => {
          this.filesAllowed = data;
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveFiles();
    this.currentFile = {}
    this.currentIndex = -1;
  }

}
