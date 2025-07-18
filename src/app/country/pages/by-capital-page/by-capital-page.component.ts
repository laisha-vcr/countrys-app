import { Component, signal, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';

import { CountrySearchInputComponent } from '../../components/by-capital/country-search-input/country-search-input.component';
import { CountryListComponent } from '../../components/by-capital/country-list/country-list.component';
import { Country } from '../../interfaces/country.interface';



@Component({
    selector: 'app-by-capital-page',
    templateUrl: './by-capital-page.component.html',
    imports: [CountrySearchInputComponent, CountryListComponent],
    standalone: true
})
export class ByCapitalPageComponent   {
  countryService = inject(CountryService);

  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);

  onSearch(query: string){
    if(this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(query).subscribe({
      next: (countries) =>{
        this.isLoading.set(false);
        this.countries.set(countries);
      },

      error: (err) =>{
        this.isLoading.set(false);
        this.countries.set([]);
        this.isError.set(err);

      },
    });
  }
}
 



