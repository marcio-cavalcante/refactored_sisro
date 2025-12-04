import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'formatarNumeroExibicao',
})
export class FormatarNumeroExibicaoPipe implements PipeTransform {

	transform(valor: string | number): string {

		if (valor === null || valor === undefined || valor === '') {
			return '';
		}

		let numero: number;

		if (typeof valor === 'string') {
			numero = Number(valor.replace(/\./g, '').replace(',', '.'));
		} else {
			numero = valor
		}

		if (isNaN(numero)) {
			return '';
		}

		return numero.toLocaleString('pt-BR', {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		})

	}

}
