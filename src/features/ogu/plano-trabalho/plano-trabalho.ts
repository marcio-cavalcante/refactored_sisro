import { Component, inject } from '@angular/core';
import { ContratoStoreService } from '../../../core/services/contrato-store.service';
import { Contratos } from "../../contratos/contratos";

@Component({
  selector: 'app-plano-trabalho',
  imports: [Contratos],
  templateUrl: './plano-trabalho.html',
  styleUrl: './plano-trabalho.scss',
})
export class PlanoTrabalho {
	contratoStore = inject(ContratoStoreService);

}
