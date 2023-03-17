import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  options = { headers: { 'Content-Type': 'application/json' ,'responseType':'json'} };
  
  constructor(private http: HttpClient) { }
  get(url: string): Observable<any | any[]> {
    return this.http.get(environment.apiUrl + url);
  }
  post(url: string, data:any): Observable<any | any[]> {
    return this.http.post(environment.apiUrl + url, data, this.options);
  }
  postImage(url: string, data = {}): Observable<any | any[]> {
    return this.http.post(environment.apiUrl + url, data);
  }
  put(url: string, data = {}): Observable<any | any[]> {
    return this.http.put(environment.apiUrl + url, data, this.options)
  }
  delete(url: string, data = {}): Observable<any | any[]> {
    return this.http.delete(environment.apiUrl + url, data)
  }

}
