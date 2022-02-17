import { Injectable } from '@angular/core';
import {Produto} from './Produdo'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AppListaService {

   apiURL: string = environment.apiURL;

  constructor(private http: HttpClient) { }

  save(produto : Produto) : Observable<Produto>{
      return this.http.post<Produto>(this.apiURL, produto)
  }

  listaTodos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.apiURL)
  }

  deletar(id:number):Observable<void>{
    const url = this.apiURL+ '/'+id 
    //const url = `${this.apiURL}/${id}`
    return this.http.delete<void>(url)
  }

  pedidoConcluido(id:number): Observable<Produto>{
    const url = this.apiURL+ '/'+id+'/'+"feito" 
    return this.http.patch<Produto>(url,{})
  }
}
