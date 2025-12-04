import { Component, inject } from '@angular/core';
import { ContratoStoreService } from '../../../core/services/contrato-store.service';
import { Contratos } from "../../contratos/contratos";

@Component({
  selector: 'app-licitacao',
  imports: [Contratos],
  templateUrl: './licitacao.html',
  styleUrl: './licitacao.scss',
})
export class Licitacao {
	contratoStore = inject(ContratoStoreService);

}
