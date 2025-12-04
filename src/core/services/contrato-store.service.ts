import { computed, Injectable, signal } from '@angular/core';
import { ContratoDados } from '../../shared/models/contrato-dados.model'
import { parseBRNumber } from '../../shared/utils/number/parse-br-number.util';

@Injectable({
    providedIn: 'root'
})
export class ContratoStoreService {
    private _contrato = signal<ContratoDados | null>(null);

    // Disponibilização do objeto Contrato inteiro
    readonly contrato = this._contrato.asReadonly();

    // Recebe número da operação pesquisada no componente
    private _listaContratos = signal<ContratoDados[]>([]);
    readonly listaContratos = this._listaContratos.asReadonly();

    setListaContratos(dados: ContratoDados[]) {
        this._listaContratos.set(dados);
    }

    // Expor campos individualizados do contrato tratados pelo computed
    operacao = computed(() => this._contrato()?.operacao?.trim() ?? '');
    dv = computed(() => this._contrato()?.dv?.trim() ?? '');
    convenioTgov = computed(() => this._contrato()?.convenioTgov?.trim() ?? '');
    propostaTgov = computed(() => this._contrato()?.propostaTgov?.trim() ?? '');
    nomeTomador = computed(() => this._contrato()?.nomeTomador?.trim() ?? '');
    cnpjTomador = computed(() => this._contrato()?.cnpjTomador?.trim() ?? '');
    emailTomador = computed(() => this._contrato()?.emailTomador?.trim() ?? '');
    classificacao = computed(() => this._contrato()?.classificacao?.trim() ?? '');

    // Verifica se o contrato é do tipo PAC - Retorna boolean
    ePac = computed(() => {
        const value = this.classificacao().toLowerCase();
        return value.includes('pac');
    });

    programa = computed(() => this._contrato()?.programa?.trim() ?? '');
    objetivo = computed(() => this._contrato()?.objetivo?.trim() ?? '');
    objeto = computed(() => this._contrato()?.objeto?.trim() ?? '');
    selecao = computed(() => this._contrato()?.selecao?.trim() ?? '');
    assinatura = computed(() => this._contrato()?.assinatura?.trim() ?? '');
    vigencia = computed(() => this._contrato()?.vigencia?.trim() ?? '');

    // Valores já convertidos para number
    vi = computed(() => parseBRNumber(this._contrato()?.vi));
    vr = computed(() => parseBRNumber(this._contrato()?.vr));
    cp1 = computed(() => parseBRNumber(this._contrato()?.cp1));
    cp2 = computed(() => parseBRNumber(this._contrato()?.cp2));

    cp = computed(() => this.cp1() + this.cp2());
    
    vrCreditado = computed(() => parseBRNumber(this._contrato()?.vrCreditado));
    vrDesbloqueado = computed(() => parseBRNumber(this._contrato()?.vrDesbloqueado));
    vrSaldoCreditado = computed(() => parseBRNumber(this._contrato()?.vrSaldoCreditado));
    cpDesbloqueado = computed(() => parseBRNumber(this._contrato()?.cpDesbloqueado));
    valorExecucaoVigente = computed(() => parseBRNumber(this._contrato()?.valorExecucaoVigente));

    // Tratamento do campo codigo agencia com inserção de zeros à esquerda
    cAgencia = computed(() => {
        const raw = this._contrato()?.cAgencia;
        
        if (!raw) return '';
        
        let digits = raw.trim().replace(/\D/g, ''); // pega só os dígitos
        digits = digits.replace(/^0+/, ''); // remove zeros à esquerda

        if (!digits) return ''; // vazio - significa "sem agência"

        if (digits.length > 4) { digits = digits.slice(-4); } // se > 4, pega os 4 últimos
        
        return digits.padStart(4, '0'); // garante 4 dígitos
    });

    agencia = computed(() => this._contrato()?.agencia?.trim() ?? '');
    cCorrente = computed(() => this._contrato()?.cCorrente?.trim() ?? '');
    idExterna = computed(() => this._contrato()?.idExterna?.trim() ?? '');
    obtv = computed(() => this._contrato()?.obtv?.trim() ?? '');
    gestor = computed(() => this._contrato()?.gestor?.trim() ?? '');

    // Etiquetas como array de strings
    etiquetas = computed(() => {
        const raw = this._contrato()?.etiquetasDaOperacao;
        
        if (!raw) return [];
        
        return raw
            .split(',')
            .map(e => e.trim())
            .filter(e => e.length > 0);
        });

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
        this._contrato.set(normalizado);
    };

    buscarPorOperacaoOuConvenio(valor: string): ContratoDados | null {
        const termo = valor.trim();
        if (!termo) return null;

        const lista = this._listaContratos();

        const encontrado = lista.find(linha =>
            linha.operacao?.trim() === termo ||
            linha.convenioTgov?.trim() === termo
        ) ?? null;

        if (encontrado) {
            this.setContrato(encontrado);
        }

        return encontrado;
    }

    limparContrato() {
        this._contrato.set(null);
    };

}