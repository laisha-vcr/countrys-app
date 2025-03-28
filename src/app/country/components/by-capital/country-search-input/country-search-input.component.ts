import { Component, EventEmitter, input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-country-search-input',
  templateUrl: './country-search-input.component.html',
  styleUrls: ['./country-search-input.component.css'],
  standalone: true
})
export class CountrySearchInputComponent implements OnInit {

  @Output() valorBusqueda = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSearch(value: string) {
    console.log("hijo", value);
    this.valorBusqueda.emit(value); // Emisión del valor
  }

  placeholder = input('Buscar')
}
