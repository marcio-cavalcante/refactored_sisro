import { Component, computed, inject } from '@angular/core';
import { Contratos } from '../../contratos/contratos';
import { ContratoStoreService } from '../../../core/services/contrato-store.service';
import { ContratoDados } from '../../../shared/models/contrato-dados.model'

@Component({
	selector: 'app-desbloqueio',
	imports: [Contratos],
	templateUrl: './desbloqueio.html',
	styleUrl: './desbloqueio.scss',
})
export class Desbloqueio {

	contratoStore = inject(ContratoStoreService);

	dadosContrato = computed(() => this.contratoStore.contratoSelecionado$() ?? null);
	
	ngOnInit(): void {
		console.log(this.dadosContrato())
	}
	
	
}
