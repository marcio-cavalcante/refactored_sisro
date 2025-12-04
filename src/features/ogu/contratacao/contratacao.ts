import { Component, inject } from '@angular/core';
import { ContratoStoreService } from '../../../core/services/contrato-store.service';
import { Contratos } from "../../contratos/contratos";

@Component({
  selector: 'app-contratacao',
  imports: [Contratos],
  templateUrl: './contratacao.html',
  styleUrl: './contratacao.scss',
})
export class Contratacao {
	contratoStore = inject(ContratoStoreService);

}
