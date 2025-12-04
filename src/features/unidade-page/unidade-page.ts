import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { UnidadeService } from '../../core/services/unidade.service';
import { Unidade } from '../../shared/models/unidades.model';

@Component({
	selector: 'app-unidade-page',
	imports: [CommonModule, FormsModule, RouterModule],
	templateUrl: './unidade-page.html',
	styleUrl: './unidade-page.scss',
})
export class UnidadePage {
	filtro: string = '';
	sugestoes: Unidade[] = [];

	unidades: Unidade[] = [
		{ codigo: '1234', nome: 'GIGOV/JP' },
		{ codigo: '5678', nome: 'GIGOV/SP' },
		{ codigo: '9012', nome: 'GIGOV/RJ' },
		{ codigo: '9999', nome: 'GIGOV/PA' },
		{ codigo: '0000', nome: 'GIGOV/PE' },
	];

	constructor(
		private unidadeService: UnidadeService,
		private router: Router
	) { };

	filtrar() {
		const valor = this.filtro.trim().toLowerCase();
		this.sugestoes = valor.length < 2
			? []
			: this.unidades.filter(u =>
				u.codigo.includes(valor) || u.nome.toLowerCase().includes(valor)
			);
	}

	selecionar(unidade: Unidade) {
		this.unidadeService.setUnidade(unidade);
		this.router.navigate(['/test']);
	}

}
