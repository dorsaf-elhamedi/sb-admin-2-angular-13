import { Boutique } from './../Models/Boutique';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiUrl = 'http://localhost:7066/api/'

  constructor(private http: HttpClient) { }

  getBoutiques(): Observable<any>
  {
    console.log("getBoutiques function work");
    return this.http.get(this.apiUrl+'Boutiques');
  }
  addBoutique(boutique: Boutique): Observable<any>
  {
    console.log("addBoutiques function work");
    console.log(boutique.ToJson())
    return this.http.post(this.apiUrl+'Boutiques', boutique.ToJson());
  }
  deleteBoutique(etablissement: String): Observable<any>
  {
    console.log("deleteBoutique function work");
    return this.http.delete(this.apiUrl+'Boutiques/'+etablissement);
  }









  getPartenaires(): Observable<any>
  {
    console.log("getPartenaires function work");
    return this.http.get(this.apiUrl+'Partenaires');
  }

}
