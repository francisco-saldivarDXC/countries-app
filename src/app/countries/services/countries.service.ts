import { Injectable } from '@angular/core';
import { Country } from './interfaces/country-interface';
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiURL = 'https://restcountries.com/v3.1';

  constructor( private http : HttpClient ) { }


  //Refactoricé el código porque el return se usaba en todos los métodos
  private getCountries( url : string ) : Observable<Country[]> {
    return this.http.get<Country[]>( url )
    .pipe(
      catchError( () => of([]) ),
      delay(2000)
    )
  }

  public getCountriesByCode ( term : string ) : Observable<Country[]> {
    const url = `${ this.apiURL }/alpha/${ term }`;
    return this.getCountries( url );
  }

  public getCountriesByCapital ( term : string ) : Observable<Country[]> {
    const url = `${ this.apiURL }/capital/${ term }`;
    return this.getCountries( url );
  }

  public getCountriesByCountry ( term : string ) : Observable<Country[]> {
    const url = `${ this.apiURL }/name/${ term }`;
    return this.getCountries( url );
  }

  public getCountriesByRegion ( term : string ) : Observable<Country[]> {
    const url = `${ this.apiURL }/region/${ term }`;
    return this.getCountries( url );
  }
}
