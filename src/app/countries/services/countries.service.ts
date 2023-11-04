import { Injectable } from '@angular/core';
import { Country } from './interfaces/country-interface';
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiURL = 'https://restcountries.com/v3.1';

  constructor( private http : HttpClient ) { }

  public getCountriesByCode ( term : string ) : Observable<Country[]> {
    return this.http.get<Country[]>(`${ this.apiURL }/alpha/${ term }`)
      .pipe(
        catchError( () => of([]) )
      )
  }

  public getCountriesByCapital ( term : string ) : Observable<Country[]> {
    return this.http.get<Country[]>(`${ this.apiURL }/capital/${ term }`)
      .pipe(
        catchError( () => of([]) )
      )
  }

  public getCountriesByCountry ( term : string ) : Observable<Country[]> {
    return this.http.get<Country[]>(`${ this.apiURL }/name/${ term }`)
      .pipe(
        catchError( () => of([]) )
      )
  }

  public getCountriesByRegion ( term : string ) : Observable<Country[]> {
    return this.http.get<Country[]>(`${ this.apiURL }/region/${ term }`)
      .pipe(
        catchError( () => of([]) )
      )
  }
}
