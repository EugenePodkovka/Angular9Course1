import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TimeRequestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let clonedReq: HttpRequest<any>;

        if (req.method === 'DELETE') {
            clonedReq = req.clone({
                params: new HttpParams()
                    .set('time_interceptor', performance.now().toString())
            });
        } else {
            clonedReq = req;
        }
        return next.handle(clonedReq);
    }
}

@Injectable()
export class TimeResponseInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse && event.url.includes('time_interceptor')) {
                        const duraton = performance.now() - Number(new URL(event.url).searchParams.get('time_interceptor'));
                        console.log('RequestURL = ' + event.url + '; Duration (miliseconds) = ' + Math.round(duraton));
                    }
                    return event;
                })
            );
    }
}
