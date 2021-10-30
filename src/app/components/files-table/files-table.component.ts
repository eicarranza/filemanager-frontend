import { Component, Input, OnInit } from '@angular/core';
import { File } from 'src/app/models/file.model';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-files-table',
  templateUrl: './files-table.component.html',
  styleUrls: ['./files-table.component.css']
})

export class FilesTableComponent implements OnInit {
  @Input() fileTypeExtension?: string;
  @Input() filesFiltered?: File[];
  @Input() filesFilteredLength?:number=0;

  url = 'http://localhost:8000';
  
  
  pageSize = 5;
  from:number = 0;
  to:number = 5;
  
  ngOnInit(): void {     
  }

  changePage(e:PageEvent){
    this.from = e.pageIndex * e.pageSize;
    this.to = this.from + e.pageSize;
  }
}