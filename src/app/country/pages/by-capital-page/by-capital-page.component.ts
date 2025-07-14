import {  Component, inject, signal } from '@angular/core';



import { CountrySearchInputComponent } from '../../components/by-capital/country-search-input/country-search-input.component';
import { CountryListComponent } from '../../components/by-capital/country-list/country-list.component';
import { CountryService } from '../../services/country.service';
import { RESTCountry } from '../../interfaces/rest.countries.interface';
import { CountryMapper } from '../../mappers/country.mapper';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  standalone: true,
  imports: [CountrySearchInputComponent, CountryListComponent]
})
export class ByCapitalPageComponent   {
  countryService = inject(CountryService);


  isLoading = signal(false);
  isError = signal<string|null>(null)
  countries = signal<Country[]>([]);

    busquedaValor(query: string) {
      if (this.isLoading()) return;
      
        this.isLoading.set(true)
        this.isError.set(null);

        this.countryService.searchByCapital(query).subscribe({
        next: (countries) =>{//Si todo sale bien 
          this.isLoading.set(false);
          this.countries.set(countries);
        },
        error: (err) =>{//Como se esta manehando el error
          console.log(err);
          this.isLoading.set(false)
          this.countries.set([])
          this.isError.set(`No se encontró un país con la capital : ${query}`);
        },
      });

    }
}
