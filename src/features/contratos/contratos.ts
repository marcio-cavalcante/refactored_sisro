import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CsvFetchService } from '../../core/services/csv-fetch.service';
import { ContratoStoreService } from '../../core/services/contrato-store.service';
import { ContratoDados } from '../../shared/models/contrato-dados.model';
import { Loader } from '../../shared/components/loader/loader';
import { Alert } from '../../shared/components/modal/alert/alert';
import { ModalService } from '../../shared/components/modal/alert/modal.service';
import { delay, finalize } from 'rxjs';

@Component({
	selector: 'app-contratos',
	imports: [FormsModule, CommonModule, Loader, Alert],
	templateUrl: './contratos.html',
	styleUrl: './contratos.scss',
})
export class Contratos {

	modalService = inject(ModalService);

	loading = signal(false);

	private csvFetchService = inject(CsvFetchService);
	contratoStore = inject(ContratoStoreService);

	operacaoBuscada: string = '';
	buscaFalhou = signal(false);

	ngOnInit(): void {
		this.loading.set(true);

		this.csvFetchService.getCsvData('assets/data/Planilha_Tudo_Ogu.csv')
			.pipe(delay(50), // Inserção de um atraso artificial proposital
				finalize(() => this.loading.set(false)))
			.subscribe(data => {this.contratoStore.setListaContratos(data as ContratoDados[]);});
	}

	buscarOperacao(): void {

		if (this.loading()) {
			this.modalService.open({
				mensagem: 'Os dados ainda estão sendo carregados, tente novamente em alguns segundos.'
			});
			return;
		}

        const valorDigitado = this.operacaoBuscada.trim();
 
		if (!valorDigitado) {
			this.modalService.open({
				mensagem: 'Por favor, informe um número de operação ou convênio para busca.'
			});
			this.buscaFalhou.set(true);
			return;
		};

        // Efetua a busca pelos números de 'operacao' ou 'convenioTgov' dentro do Store
        const resultado = this.contratoStore.buscarPorOperacaoOuConvenio(valorDigitado);
   
        if (resultado) {
			this.buscaFalhou.set(false);
 
            // Oculta o campo de busca após a pesquisa
            // this.mostrarCampoBusca = false;
        } else {
			this.buscaFalhou.set(true);
			this.modalService.open({
				mensagem: `Operação ${valorDigitado} não encontrada.`
			});
            // this.mostrarCampoBusca = true;
        }
    }


}
