import { Component, OnInit } from '@angular/core';
import { File } from 'src/app/models/file.model';
import { FilesService } from 'src/app/services/files.service';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css']
})
export class AddFileComponent implements OnInit {

  file: File = {
    name: '',
    url: '',
    size: 0,
    extension: ''
  }
  submitted = false;

  constructor(private fileService: FilesService) { }
  
  ngOnInit(): void {
  }

  saveFile(): void {
    const data = {
      name: this.file.name,
      url: this.file.url
    };

    this.fileService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error=>{
          console.log(error);
        });
  }

  newFile(): void {
    this.submitted = false;
    this.file = {
      name: '',
      url: '',
      size: 0,
      extension: ''
    }
  }
}
