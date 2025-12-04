import { Component, inject } from '@angular/core';
import { ContratoStoreService } from '../../../core/services/contrato-store.service';
import { Contratos } from "../../contratos/contratos";

@Component({
  selector: 'app-pcf',
  imports: [Contratos],
  templateUrl: './pcf.html',
  styleUrl: './pcf.scss',
})
export class Pcf {
	contratoStore = inject(ContratoStoreService);

}
