import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidebarStore {
  readonly aberto = signal<boolean>(true);

  abrir() { this.aberto.set(true); };

  fechar() { this.aberto.set(false); };
  
  alternar() { this.aberto.update((value) => !value); };

}
