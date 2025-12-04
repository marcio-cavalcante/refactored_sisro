import { Component, Input, Output, EventEmitter, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UnidadeService } from '../../core/services/unidade.service';
import { UNIDADES, Unidade } from '../../shared/models/unidades.model';

@Component({
	selector: 'app-header',
	imports: [ FormsModule, CommonModule ],
	templateUrl: './header.html',
	styleUrl: './header.scss',
})
export class Header {
	@Input() sidebarAberto = true;
	@Output() toggleSidebarEvent = new EventEmitter<void>();

	filtro: string = '';
	sugestoes: Unidade[] = [];
	unidades = UNIDADES
	escondeInputBusca: boolean = false;

	unidadeService = inject(UnidadeService)


	filtrar() {
		const valor = this.filtro.trim().toLowerCase();
		this.sugestoes = valor.length < 2
			? []
			: this.unidades.filter(u =>
				u.codigo.includes(valor) || u.nome.toLowerCase().includes(valor)
			);
		this.filtro = '';
	}

	selecionar(unidade: Unidade) {
		this.unidadeService.setUnidade(unidade);
		this.sugestoes = []
		this.escondeInputBusca = false;

	}

	alteraUnidade() {
		this.escondeInputBusca = true;
	}

	toggleSidebar() {
		this.toggleSidebarEvent.emit();
	};

}