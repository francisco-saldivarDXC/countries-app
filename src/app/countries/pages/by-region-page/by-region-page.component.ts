import { Component } from '@angular/core';
import { Country } from '../../services/interfaces/country-interface';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public showLoader : boolean = false;

  public placeholder : string = "Buscar por región";

  public countries : Country[] = [];

  public regions : Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion ?: Region;

  constructor( private countriesService : CountriesService ){

  }

  public searchByRegion () : void {
    this.showLoader = true;
    this.countriesService.getCountriesByRegion( this.selectedRegion! )
      .subscribe(countries => {
        this.countries = countries
        this.showLoader = false;
      });
  }
}
