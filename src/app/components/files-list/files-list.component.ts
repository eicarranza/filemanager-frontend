import { Component, OnInit } from '@angular/core';
import { File } from 'src/app/models/file.model';
import { FilesService } from 'src/app/services/files.service';


@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.css']
})
export class FilesListComponent implements OnInit {
  files?: File[];
  currentFile: File = {};
  currentIndex = -1;
  name = '';

  constructor(private fileService: FilesService) { }

  ngOnInit(): void {
    this.retrieveFiles();
  }

  retrieveFiles(): void {
    this.fileService.getAll()
      .subscribe(
        data => {
          this.files = data;
          console.log(data);
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

  setActiveFile(file: File, index: number): void {
    this.currentFile = file;
    this.currentIndex = index;
  }

  removeAllFiles(): void {
    this.fileService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.currentFile = {};
    this.currentIndex = -1;

    this.fileService.findByName(this.name)
      .subscribe(
        data => {
          this.files = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
