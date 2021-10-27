import { Component, OnInit } from '@angular/core';
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
  message?: string;

  constructor(private fileService: FilesService) { }

  ngOnInit(): void {
    this.getFilesAllowed();
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

  updateFileAllowed(fileAllowedSelected: Settings) {
    this.fileService.updateFilesAllowed(fileAllowedSelected.id, fileAllowedSelected)
      .subscribe(
        response => {
          this.message = response.message ? response.message : 'The status was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }
}
