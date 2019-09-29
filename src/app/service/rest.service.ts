import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http:HttpClient) { }
  getDetails(){
    return this._http.get("https://reqres.in/api/users?page=2");
  }
  viewDetails(id:number){
    return this._http.get("https://reqres.in/api/users?page=2/"+id);

  }
  updateDetails(data){
    return this._http.put("https://reqres.in/api/users?page=2","/"+data.id,data)
  }
  deleteDetails(data){
    return this._http.delete("https://reqres.in/api/users/2",data)
  }
  createEmployee(data){
    return this._http.post("https://reqres.in/api/users",data);_
  }

}
