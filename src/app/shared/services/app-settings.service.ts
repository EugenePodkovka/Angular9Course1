import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Observable, of, throwError } from 'rxjs';
import { map, retry, finalize, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AppSettingsService {
    private appSettingsURL = 'assets/app-settings.json';

    constructor(
        private http: HttpClient,
        private localStroageService: LocalStorageService
    ) { }

    get(keyPath: string): Observable<any> {
        const objFromLocalStorage = this.getFromLocalStorage(keyPath);
        if (objFromLocalStorage) {
            return of(objFromLocalStorage);
        } else {
            return this.http.get(this.appSettingsURL).pipe(
                retry(2),
                map((data: any) => {
                    this.localStroageService.setItem(this.localStroageService.keys.appSettings, data);
                    return data && data[keyPath] ? data[keyPath] : '';
                }),
                catchError(err => {
                    console.error(err);
                    return throwError(err);
                })
            );
        }
    }

    getFromLocalStorage(keyPath: string) {
        const appCondig = this.localStroageService.getItem(this.localStroageService.keys.appSettings);
        return appCondig && appCondig[keyPath] ? appCondig[keyPath] : '';
    }
}
