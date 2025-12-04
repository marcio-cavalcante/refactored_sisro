import { Component, inject } from '@angular/core';
import { Contratos } from '../../contratos/contratos';
import { ContratoStoreService } from '../../../core/services/contrato-store.service';

@Component({
	selector: 'app-desbloqueio',
	imports: [Contratos],
	templateUrl: './desbloqueio.html',
	styleUrl: './desbloqueio.scss',
})
export class Desbloqueio {

	contratoStore = inject(ContratoStoreService);

	ngOnInit(): void {
		console.log('Desbloqueio - Dados do Contrato:');
		console.log(this.contratoStore.convenioTgov());
		console.log(this.contratoStore.propostaTgov());
		console.log(this.contratoStore.nomeTomador());
	}
	
	
}
