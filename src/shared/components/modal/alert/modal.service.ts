import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {

    // controla se o modal está aberto
    isOpen = signal(false);

    // conteúdo passado para o modal
    data = signal<any | null>(null);

    open(data?: any) {
        this.data.set(data ?? null);
        this.isOpen.set(true);
    }

    close() {
        this.isOpen.set(false);
        this.data.set(null);
    }
}
