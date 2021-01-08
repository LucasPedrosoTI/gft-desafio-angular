import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SpinnerService } from '../navigation/spinner/spinner.service';

@Injectable()
export class HttpSpinnerInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerService.requestStarted();
    return this.handler(next, request);
  }

  handler(next: HttpHandler, request: HttpRequest<any>) {
    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            this.spinnerService.requestEnded();
          }
        },
        (error: HttpErrorResponse) => {
          this.spinnerService.resetSpinner();
          throw error;
        }
      )
    );
  }
}
