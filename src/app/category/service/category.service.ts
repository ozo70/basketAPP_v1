import { Injectable,Inject } from '@angular/core';
import { Category } from '../category';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,catchError,tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http:HttpClient,
    @Inject("apiUrl") private apiUrl:string
  ) { }

  getCategories():Observable<Category[]>
  {
    return this.http.get<any>(this.apiUrl + "/categories").pipe(map(Response => Response))
  }

}
