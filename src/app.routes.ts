import { Routes } from '@angular/router';
import { unidadeGuard } from './core/guards/unidade.guard';

export const routes: Routes = [
    // Página de seleção de unidade
    {
        path: 'unidade',
        loadComponent: () => import('./features/unidade-page/unidade-page').then(m => m.UnidadePage)
    },

    // Rota principal protegida por guard
    {
        path: 'test',
        loadComponent: () => import('./features/ogu/test/test').then(m => m.Test),
        canActivate: [unidadeGuard]
    },

    // Rota raiz: redireciona para sistema se tiver unidade, senão unidade
    {
        path: '',
        pathMatch: 'full',
        canActivate: [unidadeGuard],
        loadComponent: () => import('./features/ogu/test/test').then(m => m.Test)
    },

    { path: '**', redirectTo: '' }
];
