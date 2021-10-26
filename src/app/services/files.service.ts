import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { File } from '../models/file.model';

const baseUrl = 'http://localhost:8000/files'

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<File[]> {
    return this.http.get<File[]>(baseUrl);
  }

  get(id: any): Observable<File> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<File[]> {
    return this.http.get<File[]>(`${baseUrl}?name=${name}`);
  }

  public upload(file: any):Observable<any>{
    const formData = new FormData();
    formData.append("file", file, file.name);
    console.log(formData);
    return this.http.post(`${baseUrl}/upload`, formData);
  }
}
