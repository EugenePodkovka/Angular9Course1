import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpClientService {
    constructor(
        private http: HttpClient
    ) { }

    create<T>(url: string, model: T): Observable<T> {
        return this.http.post<T>(url, model);
    }

    read<T>(url: string): Observable<T> {
        return this.http.get<T>(url);
    }

    update<T>(url: string, model: T): Observable<T> {
        return this.http.put<T>(url, model);
    }

    delete<T>(url: string): Promise<T> {
        return this.http.delete<T>(url)
            .toPromise()
            .then(response => response as T)
            .catch(this.errorHandler);
    }

    private errorHandler(e: any): Promise<any> {
        console.error('Error: ', e);
        return Promise.reject(e.message || e);
    }
}
