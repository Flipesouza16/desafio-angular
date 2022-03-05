import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
  HttpGetClient,
  HttpParams,
  HttpResponse
} from '@/data/protocols/http';
import { environment } from '@/environments/environment';

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
