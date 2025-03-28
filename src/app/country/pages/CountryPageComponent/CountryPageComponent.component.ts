import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-country-page-component',
  standalone: true,
  imports: [],
  templateUrl: './CountryPageComponent.component.html',
  styleUrl: './CountryPageComponent.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPageComponentComponent { }
