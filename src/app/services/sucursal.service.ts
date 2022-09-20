import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Sucursal } from '../interface/sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  private apiURL = "http://127.0.0.1:8000";
  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
 }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Sucursal[]> {
    return this.httpClient.get<Sucursal[]>(this.apiURL + '/api/sucursal')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(sucursal: Sucursal): Observable<Sucursal> {
    const url = `${this.apiURL}/api/addSucursal`
    return this.httpClient.post<Sucursal>( url, {nom_sucursal: sucursal.nom_sucursal, nom_admin: sucursal.nom_admin, tel: sucursal.tel, direccion: sucursal.direccion, fax: sucursal?.fax, pedidos_mes: sucursal.pedidos_mes } );
  }

  find(id: any): Observable<Sucursal> {
    return this.httpClient.get<Sucursal>(this.apiURL + '/api/sucursal/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id: any, Sucursal: any): Observable<Sucursal> {
    return this.httpClient.put<Sucursal>(this.apiURL + '/api/updateSucursal/' + id, JSON.stringify(Sucursal), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id: any){
    return this.httpClient.delete<Sucursal>(this.apiURL + '/api/deleteSucursal/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
