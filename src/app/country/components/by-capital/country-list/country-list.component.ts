import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent { }
