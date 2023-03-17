import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "../http/http.service";

@Injectable({
    providedIn: 'root' // just before your class
  })
export class Service {
    
    
    constructor(private http: HttpService) { }

    login(data): Observable<any> {
        return this.http.post('/user/login', data);
    }
    getPetsList(): Observable<any> {
        return this.http.get('/userpet/list')
    }
    getPetsListByUser(userName:any): Observable<any> {
        return this.http.get('/userpet/list/'+userName);
      }
    register(data): Observable<any> {
        return this.http.post('/user/create', data);
    }
    deletePets(id:any) {
        return this.http.delete('/userpet/delete/'+id);
    }
    updatePets(data: any) {
        return this.http.put('/userpet/update', data);
    }
    addPets(data: any) {
        return this.http.post('/userpet/create', data);
    }
    getUsersList() {
        return this.http.get('/user/list')
    }
    updateUser(data: any) {
        return this.http.put('/user/update', data);
    }
      
}