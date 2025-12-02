import { Injectable, signal } from '@angular/core';
import { ContratoDados } from '../../shared/models/contrato-dados.model'

@Injectable({
    providedIn: 'root'
})
export class ContratoStoreService {
    private contratoSelecionadoSignal = signal<ContratoDados | null>(null);

    contratoSelecionado$ = this.contratoSelecionadoSignal.asReadonly();

    setContrato(dados: ContratoDados) {
        const normalizado: ContratoDados = {
            ...dados,
            operacao: dados.operacao?.trim() ?? '',
            dv: dados.dv?.trim() ?? '',
            convenioTgov: dados.convenioTgov?.trim() ?? '',
            propostaTgov: dados.propostaTgov?.trim() ?? '',
            nomeTomador: dados.nomeTomador?.trim() ?? '',
            cnpjTomador: dados.cnpjTomador?.trim() ?? '',
            emailTomador: dados.emailTomador?.trim() ?? '',
            classificacao: dados.classificacao?.trim() ?? '',
            programa: dados.programa?.trim() ?? '',
            objetivo: dados.objetivo?.trim() ?? '',
            objeto: dados.objeto?.trim() ?? '',
            selecao: dados.selecao?.trim() ?? '',
            assinatura: dados.assinatura?.trim() ?? '',
            vigencia: dados.vigencia?.trim() ?? '',
            vi: dados.vi?.trim() ?? '00,0',
            vr: dados.vr?.trim() ?? '00,0',
            cp1: dados.cp1?.trim() ?? '00,0',
            cp2: dados.cp2?.trim() ?? '00,0',
            vrCreditado: dados.vrCreditado?.trim() ?? '0,00',
            vrDesbloqueado: dados.vrDesbloqueado?.trim() ?? '0,00',
            vrSaldoCreditado: dados.vrSaldoCreditado?.trim() ?? '0,00',
            cpDesbloqueado: dados.cpDesbloqueado?.trim() ?? '0,00',
            valorExecucaoVigente: dados.valorExecucaoVigente?.trim() ?? '0,00',
            cAgencia: dados.cAgencia?.trim() ?? '',
            agencia: dados.agencia?.trim() ?? '',
            cCorrente: dados.cCorrente?.trim() ?? '',
            idExterna: dados.idExterna?.trim() ?? '',
            obtv: dados.obtv?.trim() ?? '',
            gestor: dados.gestor?.trim() ?? '',
            etiquetasDaOperacao: dados.etiquetasDaOperacao?.trim() ?? '',
        };
        this.contratoSelecionadoSignal.set(normalizado);
    }

    limparContrato() {
        this.contratoSelecionadoSignal.set(null);
    }

    getEtiquetas(): string[] {
        const contrato = this.contratoSelecionadoSignal();
        return contrato?.etiquetasDaOperacao.split(',').map(e => e.trim()) ?? [];
    }

}