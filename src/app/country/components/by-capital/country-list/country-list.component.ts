import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RESTCountry } from '../../../interfaces/rest.countries.interface';
import { Country } from '../../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-country-list',
    imports: [DecimalPipe, RouterLink],
    templateUrl: './country-list.component.html',
    styleUrl: './country-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class CountryListComponent { 
  
  countries = input.required<Country[]>()
  
}
