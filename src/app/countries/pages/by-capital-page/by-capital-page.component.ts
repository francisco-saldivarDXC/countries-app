import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../services/interfaces/country-interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {
  public placeholder: string = "Buscar país por capital";
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {

  }

  public searchByCapital(term: string): void {
    this.countriesService.getCountriesByCapital(term).subscribe(countries => {
      this.countries = countries
    });
  }
}
