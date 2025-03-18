import {  Component } from '@angular/core';
import { CountrySearchInputComponent } from '../../components/by-capital/country-search-input/country-search-input.component';
import { CountryListComponent } from '../../components/by-capital/country-list/country-list.component';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  standalone: true,
  imports: [CountrySearchInputComponent, CountryListComponent]
})
export class ByCapitalPageComponent   {
    busquedaValor(value: string) {
      console.log("papa",value);
    }
}
