import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RESTCountry } from '../../../interfaces/rest.countries.interface';
import { Country } from '../../../interfaces/country.interface';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent { 
  countries = input.required<Country[]>()
  
}
