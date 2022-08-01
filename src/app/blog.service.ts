import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import { Blog } from './models/blog.model';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'https://62da01d75d893b27b2ef953c.mockapi.io/bloglist';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Blog[]>{
    return this.httpClient.get<Blog[]>(apiUrl).pipe(
    )
  }
  find(id:number):Observable<Blog>{
    return this.httpClient.get<Blog>(`${apiUrl}/${id}`).pipe(
    )
  }
}
