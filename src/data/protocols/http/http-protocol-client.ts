import { HttpResponse } from "./http-response";

export type HttpParams<T> = {
  url: string
  body?: T
}

export interface HttpGetClient<T, R> {
  get: (params: HttpParams<T>) => Promise<HttpResponse<R>>
}
