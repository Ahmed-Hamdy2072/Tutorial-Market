import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, pipe, retry, throwError } from 'rxjs';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private httpClient: HttpClient) {


  }
  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('https://fakestoreapi.com/products').pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  getCatergories() {
    return this.httpClient.get('https://fakestoreapi.com/products/categories').pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  getPrdByCatID(cID: any) {
    return this.httpClient.get<IProduct[]>('https://fakestoreapi.com/products/category/' + cID).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  getPrdByID(pid: number) {
    return this.httpClient.get<IProduct[]>('https://fakestoreapi.com/products/' + pid).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  getLimitedPrd() {
    return this.httpClient.get<IProduct[]>('https://fakestoreapi.com/products?limit=5').pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  addProduct(Model: any) {
    return this.httpClient.post<IProduct>("http://localhost:3000/Admin", Model).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  deleteProduct(pid: number) {
    return this.httpClient.delete("https://fakestoreapi.com/products/" + pid).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  editProduct(pid: any, model: any) {
    return this.httpClient.put("https://fakestoreapi.com/products/" + pid, model)
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
