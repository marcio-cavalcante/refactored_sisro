import { Injectable, signal } from "@angular/core";

export interface Unidade {
    codigo: string;
    nome: string;
}

@Injectable({
    providedIn: 'root'
})
export class UnidadeService {
    private readonly STORAGE_KEY = 'unidadeSelecionada';
    private _unidade = signal<Unidade | null>(this.carregarUnidade());
    unidade = this._unidade.asReadonly();

    // Salvar unidade e localstorage
    setUnidade(unidade: Unidade) {
        this._unidade.set(unidade);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(unidade));
    };

    // Carregar unidade do localstorage
    private carregarUnidade(): Unidade | null {
        const unidadeJson = localStorage.getItem(this.STORAGE_KEY);
        return unidadeJson ? JSON.parse(unidadeJson) as Unidade : null;
    }

    // Limpar unidade do localstorage
    limparUnidade() {
        this._unidade.set(null);
        localStorage.removeItem(this.STORAGE_KEY);
    }
}