import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CsvFetchService } from '../../core/services/csv-fetch.service';
import { ContratoStoreService } from '../../core/services/contrato-store.service';
import { ContratoDados } from '../../shared/models/contrato-dados.model';

@Component({
	selector: 'app-contratos',
	imports: [FormsModule],
	templateUrl: './contratos.html',
	styleUrl: './contratos.scss',
})
export class Contratos {

	private csvFetchService = inject(CsvFetchService);
	private contratoStore = inject(ContratoStoreService);

	dadosCsv: ContratoDados[] = [];
	resultado = signal<ContratoDados | undefined | null>(undefined);
	operacaoBuscada: string = '';

	ngOnInit(): void {
		this.csvFetchService.getCsvData('assets/data/Planilha_Tudo_Ogu.csv')
			.subscribe(data => {
			this.dadosCsv = data as ContratoDados[]
		});
	};

	buscarOperacao(): void {
        const valorDigitado = this.operacaoBuscada.trim();
 
        // if (!valorDigitado) {
        //     this.dialog.open(AlertDialogComponent, {
        //         data: { mensagem: 'Por favor, informe um número de operção ou convênio para busca.' }
        //     });
        //     return;
        // }

		if (!valorDigitado) {
            console.log('Por favor, informe um número de operção ou convênio para busca.');
            return;
        }
 
        // Efetua a busca pelos números de 'operacao' ou 'convenioTgov'
        const resultado = this.dadosCsv.find(linha =>
            linha.operacao?.trim() === valorDigitado ||
            linha.convenioTgov?.trim() === valorDigitado
        ) || null;
 
        // Armazena somente a linha do contrato pesquisado na variável resultado
        this.resultado.set(resultado);
  
        if (resultado) {
            this.contratoStore.setContrato(resultado); // Uso do service para setar o contrato selecionado
			console.log('Dados:')
			console.log('Operacao', resultado.operacao)
			console.log(typeof(resultado.operacao))
			console.log('vi', resultado.vi)
			console.log(typeof(resultado.vi))
			console.log('vr', resultado.vr)
			console.log(typeof(resultado.vr))
			console.log('cp1', resultado.cp1)
			console.log(typeof(resultado.cp1))
			console.log('cp2', resultado.cp2)
			console.log(typeof(resultado.cp2))


 
            // Oculta o campo de busca após a pesquisa
            // this.mostrarCampoBusca = false;
        } else {
			console.log('Operação não encontrada')
            // this.dialog.open(AlertDialogComponent, {
            //     data: { mensagem: `Operação ${valorDigitado} não encontrada.` }
            // });
            // this.mostrarCampoBusca = true;
        }
    }


}
