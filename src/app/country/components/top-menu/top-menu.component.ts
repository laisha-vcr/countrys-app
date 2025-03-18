import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';  // Importar el módulo de íconos de Angular Material
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [ MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopMenuComponent { }
