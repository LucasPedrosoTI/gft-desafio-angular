import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpSpinnerInterceptor } from './spinner.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpSpinnerInterceptor, multi: true },
];
