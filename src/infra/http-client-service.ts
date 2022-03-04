import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpResponse } from 'src/data/protocols/http/http-response';
import { HttpGetClient, HttpParams } from 'src/data/protocols/http/http-protocol-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService implements HttpGetClient<any, any> {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  get(params: HttpParams<any>): Promise<HttpResponse<any>> {
    return new Promise(resolve => {
      this.http.get(`${environment.BASE_URL}/${params.url}`).subscribe((response: any) => {
        resolve({
          body: response
        })
      });
    })
  }
}
