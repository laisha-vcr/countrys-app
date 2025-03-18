import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css'],
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class ByRegionPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
