import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnhideApiService {
  private username:string = 'josenildoaf'
  private url = 'https://api.unhideschool.com/api/user/getbyusername/' + this.username

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any>{

    return this.http.get<any>(this.url)
    .pipe(map((data: any) => data));

  }
  
}
