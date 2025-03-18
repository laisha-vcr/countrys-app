import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPageComponent { }
