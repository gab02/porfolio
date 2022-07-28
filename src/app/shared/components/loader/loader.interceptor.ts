// import { LoaderService } from './../loader.service';
// import { Injectable } from '@angular/core';
// import {
//   HttpEvent,
//   HttpInterceptor,
//   HttpHandler,
//   HttpRequest,
// } from '@angular/common/http';
// import { finalize, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class LoadingInterceptor implements HttpInterceptor {
//   constructor(public loaderService: LoaderService) {}
//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     this.loaderService.show();
//     return next.handle(req).pipe(finalize(() => this.loaderService.hide()));
//   }
// }
