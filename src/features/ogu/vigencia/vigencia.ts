import { Component, inject } from '@angular/core';
import { ContratoStoreService } from '../../../core/services/contrato-store.service';
import { Contratos } from "../../contratos/contratos";

@Component({
  selector: 'app-vigencia',
  imports: [Contratos],
  templateUrl: './vigencia.html',
  styleUrl: './vigencia.scss',
})
export class Vigencia {
	contratoStore = inject(ContratoStoreService);

}
