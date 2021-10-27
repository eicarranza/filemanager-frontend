import { Component, Input, OnInit } from '@angular/core';
import { File } from 'src/app/models/file.model';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-files-table',
  templateUrl: './files-table.component.html',
  styleUrls: ['./files-table.component.css']
})

export class FilesTableComponent implements OnInit {
  constructor() { }

  @Input() fileTypeExtension?: string;
  @Input() files?: File[];
  filesFiltered?: File[];
  length:number = 0;

  url = 'http://localhost:8000';
  
  
  pageSize = 5;
  from:number = 0;
  to:number = 5;

  
  ngOnInit(): void { 
      this.filesFiltered = this.files!.filter((file) =>{
        return file.extension === this.fileTypeExtension;
      });
      
      this.length = this.objectSize(this.filesFiltered);
    
  }

  changePage(e:PageEvent){
    this.from = e.pageIndex * e.pageSize;
    this.to = this.from + e.pageSize;
  }
  
  objectSize(obj:any) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    console.log(size);
    return size;
  }
}