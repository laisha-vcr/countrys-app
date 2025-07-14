import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CountryListComponent } from "../../components/by-capital/country-list/country-list.component";
import { CountrySearchInputComponent } from "../../components/by-capital/country-search-input/country-search-input.component";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

import { of } from 'rxjs';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [CountryListComponent, CountrySearchInputComponent],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPageComponent {

  countryService = inject(CountryService);
  
  isLoading = signal(false);
  isError = signal<string|null>(null)

  countries = signal<Country[]>([]);

   busquedaValor(query: string) {
      if (this.isLoading()) return;
      
        this.isLoading.set(true)
        this.isError.set(null);

        this.countryService.searchByCountry(query).subscribe({
        next: (countries) =>{//Si todo sale bien 
          this.isLoading.set(false);
          this.countries.set(countries);
        },
        error: (err) =>{//Como se esta manehando el error
          console.log(err);
          this.isLoading.set(false)
          this.countries.set([])
          this.isError.set(`No se encontró el pais : ${query}`);
        },
      });

    }

      selectedZone: string | null = null;

  selectZone(zone: string) {
    this.selectedZone = zone;
    console.log('Zona seleccionada:', zone);
    // Aquí puedes emitir un evento, guardar en el backend, etc.
  }
 }

