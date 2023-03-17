import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StorageService } from "../helper/storage.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor {

    constructor(
        private storageSrvc: StorageService
    ) { }

    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.storageSrvc.getLocalStorage('token')) {
            req = req.clone({
                setHeaders: {
                    'Access-Control-Allow-Origin': 'http://localhost:4200/',
                    Authorization: this.storageSrvc.getLocalStorage('token')
                }
            })
        }
        return next.handle(req);
    }
}