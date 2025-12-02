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
        path: 'menu',
        loadComponent: () => import('./features/menu-principal/menu-principal').then(m => m.MenuPrincipal),
        canActivate: [unidadeGuard]
    },

    {
        path: 'contratos',
        loadChildren: () => import('./features/contratos/contratos.routes').then(m => m.routes)
    },

    {
        path: 'desbloqueio',
        loadChildren: () => import('./features/ogu/desbloqueio/desbloqueio.routes').then(m => m.routes)
    },

    // Rota raiz redireciona para menu se tiver unidade
    {
        path: '',
        pathMatch: 'full',
        canActivate: [unidadeGuard],
        loadComponent: () => import('./features/menu-principal/menu-principal').then(m => m.MenuPrincipal)
    },

    { path: '**', redirectTo: '' }
];
