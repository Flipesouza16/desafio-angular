import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpGetClient, HttpParams, HttpResponse } from "@/data/protocols/http";
import { environment } from "@/environments/environment";

@Injectable({
  providedIn: "root",
})
export class HttpClientService implements HttpGetClient<any, any> {

  constructor(private http: HttpClient) {}

  get(params: HttpParams<any>): Promise<HttpResponse<any>> {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${environment.BASE_URL}/${params.url}`)
        .subscribe((response: any) => {
          resolve({
            body: response,
          });
        }, (error) => {
          reject(error);
        });
    });
  }
}
