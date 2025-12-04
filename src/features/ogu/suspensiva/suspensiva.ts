import { Component, inject } from '@angular/core';
import { ContratoStoreService } from '../../../core/services/contrato-store.service';
import { Contratos } from "../../contratos/contratos";

@Component({
  selector: 'app-suspensiva',
  imports: [Contratos],
  templateUrl: './suspensiva.html',
  styleUrl: './suspensiva.scss',
})
export class Suspensiva {
	contratoStore = inject(ContratoStoreService);

}
