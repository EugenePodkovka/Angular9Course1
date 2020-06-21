import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TimeRequestInterceptor, TimeResponseInterceptor } from './time.interceptor';

export const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TimeRequestInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TimeResponseInterceptor,
        multi: true
    }
];
