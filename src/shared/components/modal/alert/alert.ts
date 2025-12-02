import { Component, inject } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
	selector: 'app-alert',
	imports: [],
	templateUrl: './alert.html',
	styleUrl: './alert.scss',
})
export class Alert {
	modal = inject(ModalService);

	fechar() {
		this.modal.close();
	}

}
