import { Injectable, signal } from "@angular/core";
import { Unidade } from '../../shared/models/unidades.model';

@Injectable({
    providedIn: 'root'
})
export class UnidadeService {
    private readonly STORAGE_KEY = 'unidadeSelecionada';
    private _unidade = signal<Unidade | null>(this.carregarUnidade());
    unidade = this._unidade.asReadonly();

    constructor() {
        window.addEventListener('storage', (evt) => {
            if (evt.key === this.STORAGE_KEY) {
                const nova = evt.newValue ? (JSON.parse(evt.newValue) as Unidade) : null;
                this._unidade.set(nova);
            }
        })
    };

    // Salvar unidade e localstorage
    setUnidade(unidade: Unidade) {
        this._unidade.set(unidade);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(unidade));
    };

    getUnidade(): Unidade | null {
        return this._unidade();
    };

    // Carregar unidade do localstorage
    private carregarUnidade(): Unidade | null {
        const unidadeJson = localStorage.getItem(this.STORAGE_KEY);
        return unidadeJson ? JSON.parse(unidadeJson) as Unidade : null;
    };

    // Limpar unidade do localstorage
    limparUnidade() {
        this._unidade.set(null);
        localStorage.removeItem(this.STORAGE_KEY);
    };
}