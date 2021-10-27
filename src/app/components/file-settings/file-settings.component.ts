import { Component, OnInit } from '@angular/core';
import { FileSettings } from 'src/app/models/file-settings.model';
import { Settings } from 'src/app/models/settings.model';
import { FilesService } from 'src/app/services/files.service';

@Component({
  selector: 'app-file-settings',
  templateUrl: './file-settings.component.html',
  styleUrls: ['./file-settings.component.css']
})
export class FileSettingsComponent implements OnInit {
  filesAllowed?: Settings[];
  fileAllowedSelected?: Settings;
  fileSettings?: FileSettings;
  maxSizeFile?: number = 0;
  message?: string;

  constructor(private fileService: FilesService) { }

  ngOnInit(): void {
    this.getFilesAllowed();
    this.getMaxSizeFile();
  }
  
  onClick(fileAllowedSelected: Settings, event: Event) {
    const element = event.target as HTMLInputElement;
    this.fileAllowedSelected = fileAllowedSelected;
    this.fileAllowedSelected.is_active = element.checked;
    this.updateFileAllowed(this.fileAllowedSelected);
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

  getMaxSizeFile(): void {
    this.fileService.getMaxSizeFile()
      .subscribe(
        data => {
          this.maxSizeFile = data.value;
          this.fileSettings = data;
          console.log(data.value);
        },
        error => {
          console.log(error);
        });
  }

  updateFileAllowed(fileAllowedSelected: Settings) {
    this.fileService.updateFilesAllowed(fileAllowedSelected.id, fileAllowedSelected)
      .subscribe(
        response => {
          this.message = response.message ? response.message : 'The status was updated successfully!';
          this.getFilesAllowed();
        },
        error => {
          console.log(error);
        });
  }

  onUpdate() {
    this.fileSettings!.value = this.maxSizeFile;
    console.log(this.fileSettings);
    this.fileService.updateMaxSizeFile(this.fileSettings!.id, this.fileSettings!)
      .subscribe(
        response => {
          this.message = response.message ? response.message : 'The status was updated successfully!';
          this.getFilesAllowed();
        },
        error => {
          console.log(error);
        });
  }
}
