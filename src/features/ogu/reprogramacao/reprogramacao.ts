import { Component, inject } from '@angular/core';
import { ContratoStoreService } from '../../../core/services/contrato-store.service';
import { Contratos } from "../../contratos/contratos";

@Component({
  selector: 'app-reprogramacao',
  imports: [Contratos],
  templateUrl: './reprogramacao.html',
  styleUrl: './reprogramacao.scss',
})
export class Reprogramacao {
	contratoStore = inject(ContratoStoreService);

}
