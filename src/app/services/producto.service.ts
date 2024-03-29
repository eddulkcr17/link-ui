import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product} from '../models/product.model';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

const baseUrl = '';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient ) { }

  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(baseUrl);
  }

  get(id:any): Observable<any>{
    return this.http.get<Product>(`${baseUrl}/${id}`);
  }

  create(data:any): Observable<any>{
    return this.http.post(baseUrl, data);
  }

  update(id: any, data :any):Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data);
  }

  delete (id: any):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(prodtName: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}?prodtName=${prodtName}`);
  }
}
