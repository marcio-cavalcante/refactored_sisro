import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { UnidadeService } from '../../core/services/unidade.service';
import { Unidade, UNIDADES } from '../../shared/models/unidades.model';
import { SidebarStore } from '../../core/services/sidebar-store.service';

@Component({
	selector: 'app-unidade-page',
	imports: [CommonModule, FormsModule, RouterModule],
	templateUrl: './unidade-page.html',
	styleUrl: './unidade-page.scss',
})
export class UnidadePage {
	filtro: string = '';
	sugestoes: Unidade[] = [];

	unidades: Unidade[] = UNIDADES;

	constructor(
		private unidadeService: UnidadeService,
		private router: Router,
		private sidebarStore: SidebarStore
	) { };

	ngOnInit(): void {
		this.sidebarStore.fechar(); // Fecha o sidebar
	};

	filtrar() {
		const valor = this.filtro.trim().toLowerCase();
		this.sugestoes = valor.length < 2
			? []
			: this.unidades.filter(u =>
				u.codigo.includes(valor) || u.nome.toLowerCase().includes(valor)
			);
	};

	selecionar(unidade: Unidade) {
		this.unidadeService.setUnidade(unidade);
		this.router.navigate(['/test']);
	};

}
