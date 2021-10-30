import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FileSettings } from '../models/file-settings.model';
import { File } from '../models/file.model';
import { Settings } from '../models/settings.model';




@Injectable({
  providedIn: 'root'
})
export class FilesService {
  baseUrl = 'http://localhost:8000/files/'
  
  constructor(private http: HttpClient) { }
  
  getAll(): Observable<File[]> {
    return this.http.get<File[]>(`${this.baseUrl}`);
  }

  get(id: any): Observable<File[]> {
    return this.http.get<File[]>(`${this.baseUrl}filtered_files/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  public upload(file: any):Observable<any>{
    const formData = new FormData();
    formData.append("file", file, file.name);
    return this.http.post(`${this.baseUrl}upload`, formData);
  }

  getFilesAllowed(): Observable<Settings[]> {
    return this.http.get<Settings[]>(`${this.baseUrl}files_allowed`);
  }

  updateFilesAllowed(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}files_allowed/${id}`, data);
  }

  getMaxSizeFile(): Observable<FileSettings> {
    return this.http.get<FileSettings>(`${this.baseUrl}file_settings`);
  }

  updateMaxSizeFile(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}file_settings/${id}`, data);
  }

}