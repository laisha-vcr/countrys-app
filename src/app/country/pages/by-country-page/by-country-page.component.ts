import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountryListComponent } from "../../components/by-capital/country-list/country-list.component";
import { CountrySearchInputComponent } from "../../components/by-capital/country-search-input/country-search-input.component";

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [CountryListComponent, CountrySearchInputComponent],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPageComponent { }
