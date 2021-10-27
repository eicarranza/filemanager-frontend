import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { File } from '../models/file.model';
import { Settings } from '../models/settings.model';

const baseUrl = 'http://localhost:8000/files'

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<File[]> {
    return this.http.get<File[]>(`${baseUrl}`);
  }

  get(id: any): Observable<File> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  public upload(file: any):Observable<any>{
    const formData = new FormData();
    formData.append("file", file, file.name);
    console.log(formData);
    return this.http.post(`${baseUrl}/upload`, formData);
  }

  getFilesAllowed(): Observable<Settings[]> {
    return this.http.get<Settings[]>(`${baseUrl}/files_allowed`);
  }

  updateFilesAllowed(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/files_allowed/${id}`, data);
  }
}
