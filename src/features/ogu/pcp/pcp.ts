import { Component, inject } from '@angular/core';
import { ContratoStoreService } from '../../../core/services/contrato-store.service';
import { Contratos } from "../../contratos/contratos";

@Component({
  selector: 'app-pcp',
  imports: [Contratos],
  templateUrl: './pcp.html',
  styleUrl: './pcp.scss',
})
export class Pcp {
	contratoStore = inject(ContratoStoreService);

}
