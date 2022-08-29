import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralApiService {

  gender=['Male','Female','Other','fff']
  constructor(private http:HttpClient) { }

  getGender():any
  {
    return this.gender;
  }
  DisplayList():Observable<any>
  {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
