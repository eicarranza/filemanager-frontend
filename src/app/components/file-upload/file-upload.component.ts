import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/app/services/files.service';
import { Settings } from 'src/app/models/settings.model';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {

  shortLink: string = "";
  loading: boolean = false;
  file:any = false;
  filesAllowed?: Settings[];
  extensions: string = "";
  message: string = "";

  constructor(private filesService: FilesService) { }

  ngOnInit(): void {
    this.getFilesAllowed();
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  getFilesAllowed(): void {
    this.filesService.getFilesAllowed()
      .subscribe(
        data => {
          this.filesAllowed = data;
          this.extensions = this.filesAllowed.map(e => e.extension).join(",");
          console.log(this.extensions);
        },
        error => {
          console.log(error);
        });
  }
  
  fileValidations(): void {
    this.filesService.getFilesAllowed()
      .subscribe(
        data => {
          this.filesAllowed = data;
          console.log(this.filesAllowed);
        },
        error => {
          console.log(error);
        });
  }

  isFileValid(fileType: any){
    let is_validType: number | undefined;

    is_validType = this.filesAllowed?.findIndex(({ extension }) => extension === fileType);
    return is_validType;
  }

  onUpload() {
    let fileType = this.file.name.split('.').pop();
    if(this.isFileValid(fileType)){
      this.loading = !this.loading;
      this.filesService.upload(this.file)
        .subscribe(
          (event: any) => {
            if(typeof (event) === 'object') {
              this.shortLink = event.link;
              this.loading = false;
              this.message = "File uploaded succesfully."
            }
          },
          error => {
            console.log(error);
          });
    }
    else{
      console.log("Type of file non valid.");
    };    
  }
}
