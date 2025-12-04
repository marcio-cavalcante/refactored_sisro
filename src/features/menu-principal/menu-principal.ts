import { Component } from '@angular/core';
import { MenuButtons } from './menu-buttons'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  imports: [RouterModule],
  templateUrl: './menu-principal.html',
  styleUrl: './menu-principal.scss',
})
export class MenuPrincipal {

    botoes = MenuButtons;

}