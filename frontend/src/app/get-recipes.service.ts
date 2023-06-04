import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable, switchMap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRecipesService {
  list: Observable<any[]> | any;

  constructor(private _http: HttpClient) { }
  baseURL = 'http://localhost:3000'

  getMeals(): Observable<any[]> {
    return this._http.get<any[]>(`${this.baseURL}/`)
  }
  getRecipeById(id: any): Observable<any[]> {
    return this._http.get<any[]>(`${this.baseURL}/getRecipeById/${id}`, {})
  }
}
