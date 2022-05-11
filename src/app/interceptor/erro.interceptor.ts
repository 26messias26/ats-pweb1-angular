import { MensagemService } from './../shared/service/mensagem.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErroInterceptor implements HttpInterceptor {

  constructor(private mensagemService: MensagemService) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(resposta => this.trataRespostaErro(resposta))
    );
  }

private trataRespostaErro(resposta:object): Observable<HttpEvent<any>>{
 if (resposta instanceof HttpErrorResponse){
   this.mensagemService.error(`Erro: ${resposta.status} - ${resposta.message}` )
 }
  return throwError(resposta);
}

}
