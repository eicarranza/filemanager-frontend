import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/app/services/files.service';
import { Settings } from 'src/app/models/settings.model';
import { FileSettings } from 'src/app/models/file-settings.model';

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
  maxSizeFile?: number = 0;
  
  constructor(private filesService: FilesService) { }

  ngOnInit(): void {
    this.getFilesAllowed();
    this.getMaxSizeFile();
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  getMaxSizeFile(): void {
    this.filesService.getMaxSizeFile()
      .subscribe(
        data => {
          this.maxSizeFile = data.value;
        },
        error => {
          console.log(error);
        });
  }

  getFilesAllowed(): void {

    this.filesService.getFilesAllowed()
      .subscribe(
        data => {
          this.filesAllowed = data.filter(e => e.is_active);
          this.extensions = this.filesAllowed.map(
                    (e) => {
                      return ".".concat(e.extension!);
                    }).join(",");
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
        },
        error => {
          console.log(error);
        });
  }

  isFileValid(fileType: string){
    let validTypes= this.extensions.split(',');
    if(validTypes.findIndex(item=>item === ".".concat(fileType)) < 0) {
      return false;
    }  
    else{
      return true;
    }
  }

  isSizeValid(file:any){
    if(file.size > this.maxSizeFile!){
      return false;
    }
    else{
      return true;
    }
    
  }

  onUpload() {
    let fileType = this.file.name.split('.').pop();
    
    if(!this.isSizeValid(this.file)) {
      this.message = "The file size exceed the allowed. File size: " + this.file.size + ".Size allowed: " + this.maxSizeFile + ".  ";
    }
    else {
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
        this.message = "Type of file non valid.";
      };    
    }
  }
}
