import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApifunctionsService {
  Url ="http://localhost:3000/so7apy"
  constructor( private http : HttpClient ) { }

  get(){
    return this.http.get(this.Url);
  }
  getById(id){
    return this.http.get(this.Url + `/${id}`);
  }
  post(object){
    return this.http.post(this.Url , object)
  }
  put(object ,id ){
    return this.http.put(this.Url + `/${id}` , object)
  }
  delete(id){
    return this.http.delete(this.Url + `/${id}`)
  }
}
