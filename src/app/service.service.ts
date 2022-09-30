import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  GetProducts():Observable<any[]>{
    const header = new HttpHeaders().set('X-RapidAPI-Key',' ff7061690dmshfd3e9f86e03558ap172814jsne4ba9b39c8b0')
    return this.http.get<any[]>('https://coinranking1.p.rapidapi.com/coins?limit=100',{'headers': header});
  }
}
