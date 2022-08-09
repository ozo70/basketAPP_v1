import { Injectable,Inject } from '@angular/core';

import { Product } from '../product';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,catchError,tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root',

})
export class ProductService {

  //private productUrl = "https://northwind.vercel.app/api/products";
  constructor(private http:HttpClient, @Inject('apiUrl') private apiUrl:string)  { }

  public getProduct(id:number):Observable<Product[]>{
    if(id) {
      return this.http.get<any>(this.apiUrl + "/products?categoryId=" + id).pipe(map(Response => Response));
    } else {
      return this.http.get<Product[]>(this.apiUrl + "/products").pipe(map(Response => Response));
    }
  }


}
