import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CountryListComponent } from '../../components/by-capital/country-list/country-list.component';
import { CountrySearchInputComponent } from '../../components/by-capital/country-search-input/country-search-input.component';

@Component({
    selector: 'app-by-region-page',
    templateUrl: './by-region-page.component.html',
    styleUrls: ['./by-region-page.component.css'],
    imports: [CountryListComponent, CountrySearchInputComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ByRegionPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
