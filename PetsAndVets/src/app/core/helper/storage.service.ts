import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() { }
    async setLocalStorage(key: string | any, data: string | any) {
        data = JSON.stringify(data);
        await localStorage.setItem(key, data);
    }
    getLocalStorage(key: any): any {
        if(localStorage.getItem(key))
            return JSON.parse(localStorage.getItem(key));
    }
    async clearLocalStorage(): Promise<any> {
        await localStorage.clear();
    }
    async removeLocalStorage(key: string): Promise<any> {
        await localStorage.removeItem(key);
    }

}
