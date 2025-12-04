// contrato-can-deactivate.guard.ts
import { CanDeactivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { ContratoStoreService } from '../services/contrato-store.service';

export const contratoCanDeactivateGuard: CanDeactivateFn<unknown> = () => {
    const contratoStore = inject(ContratoStoreService);

    if (!contratoStore.temContextoEmUso()) {
        return true;
    }

    const sair = confirm(
        'Tem certeza que deseja sair? As informações em uso serão perdidas.'
    );

    // se quiser, você pode limpar aqui quando o usuário aceitar
    if (sair) {
        contratoStore.limparContrato();
    }

    return sair;
};
