import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Hero} from '../models/hero';
import {Observable} from 'rxjs';
import { ConfigurationService } from './Configuration.service';

@Injectable({
  providedIn: 'root'
})
export class HeroProxyService {
  constructor(
      private http: HttpClient, private config: ConfigurationService) { }

  getHeroes(): Observable<Hero[]> {
    return (this.http.get<Hero[]>(this.config.getApiUrl()));
  }

  getHero(id: number): Observable<Hero>{
    const url = this.config.getApiUrl() + '/' + id;
    return this.http.get<Hero>(url);
  }

}
