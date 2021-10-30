import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/app/services/files.service';
import { Settings } from 'src/app/models/settings.model';
import { FileSettings } from 'src/app/models/file-settings.model';
import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {

  loading: boolean = false;
  file:any = false;
  filesAllowed?: Settings[];
  extensions: string = "";
  message: string = "";
  errorMessage: string = "";
  maxSizeFile?: number = 0;
  
  constructor(private filesService: FilesService) { 
    this.getFilesAllowed();
    this.getMaxSizeFile();
  }

  ngOnInit(): void {
    
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
          this.errorMessage = error.message;
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
          this.errorMessage = error.message;
        });
  }

  onUpload() {
    this.message = "";

    if(!this.isSizeValid(this.file)) {
      this.errorMessage = "The file size exceed the allowed. File size: " + this.file.size + ".Size allowed: " + this.maxSizeFile + ".  ";
    }
    else {
      if(this.isFileValid(this.file)){
        this.loading = !this.loading;
        this.uploadFile(this.file);
      }
      else{
        this.errorMessage = "Type of file non valid.";
      };
    }
  }

  isSizeValid(file:any): boolean{
    if(file.size > this.maxSizeFile!){
      return false;
    }
    else{
      return true;
    }
  }
  
  isFileValid(file: any): boolean{
    let fileType = file.name.split('.').pop();
    
    let validTypes= this.extensions.split(',');
    if(validTypes.findIndex(item=>item === ".".concat(fileType)) < 0) {
      return false;
    }  
    else{
      return true;
    }
  }

  uploadFile(file:any): boolean{
    let uploadStatus = false;

    this.filesService.upload(file)
      .subscribe(
        (event: any) => {
          if(typeof(event) === 'object') {
            this.loading = false;
            this.message = "File uploaded succesfully.";
            this.errorMessage = "";
          }
        },
        error => {
          console.log(error);
          uploadStatus = false;
        });

    return uploadStatus;
  }

}
