import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Sidebar } from './sidebar/sidebar';
import { SidebarStore } from '../core/services/sidebar-store.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  sidebarStore = inject(SidebarStore);

  // sidebarAberto = true;

  //   toggleSidebar() {
  //   this.sidebarAberto = !this.sidebarAberto;
  // }
  
  protected readonly title = signal('SISRO');
}
