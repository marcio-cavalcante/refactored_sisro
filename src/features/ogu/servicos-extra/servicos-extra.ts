import { Component, inject } from '@angular/core';
import { ContratoStoreService } from '../../../core/services/contrato-store.service';
import { Contratos } from "../../contratos/contratos";

@Component({
  selector: 'app-servicos-extra',
  imports: [Contratos],
  templateUrl: './servicos-extra.html',
  styleUrl: './servicos-extra.scss',
})
export class ServicosExtra {
	contratoStore = inject(ContratoStoreService);

}
