import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../services/interfaces/country-interface';

@Component({
  selector: 'country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {
  public country : Country[] = [];

  constructor(
    private activatedRoute : ActivatedRoute,
    private countriesService : CountriesService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({ id }) => {
        console.log(id);
        this.countriesService.getCountriesByCode( id )
          .subscribe(countries => {
            this.country = countries;
            if(countries.length <= 0)
              this.router.navigate(['']);
          })
      });
  }
}
