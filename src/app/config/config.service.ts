import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class ConfigService {
    private URL='https://api-placeholder.herokuapp.com/api/v2/blogs';
  constructor(private http: HttpClient) {   }

  async getData(): Promise<any> {
    return this.http.get(this.URL,{headers: {'Content-Type': 'application/json'}});
  }
}
