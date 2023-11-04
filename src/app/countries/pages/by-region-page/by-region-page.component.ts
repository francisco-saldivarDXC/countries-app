import { Component } from '@angular/core';
import { Country } from '../../services/interfaces/country-interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public placeholder : string = "Buscar por región";

  public countries : Country[] = [];

  constructor( private countriesService : CountriesService ){

  }

  public searchByRegion ( term : string ) : void {
    this.countriesService.getCountriesByRegion( term )
      .subscribe(countries => this.countries = countries);
  }
}
