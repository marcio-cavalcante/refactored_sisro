import { Routes } from '@angular/router';
import { unidadeGuard } from './core/guards/unidade.guard';
import { contratoCanDeactivateGuard } from './core/guards/contrato-can-deactivate.guard';

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
        loadChildren: () => import('./features/contratos/contratos.routes').then(m => m.routes),
        canActivate: [unidadeGuard],
    },
    {
        path: 'desbloqueio',
        loadChildren: () => import('./features/ogu/desbloqueio/desbloqueio.routes').then(m => m.routes),
        canActivate: [unidadeGuard],
        canDeactivate: [contratoCanDeactivateGuard]
    },
    {
        path: 'contratacao',
        loadChildren: () => import('./features/ogu/contratacao/contratacao.routes').then(m => m.routes),
        canActivate: [unidadeGuard]
    },
    {
        path: 'licitacao',
        loadChildren: () => import('./features/ogu/licitacao/licitacao.routes').then(m => m.routes),
        canActivate: [unidadeGuard]
    },
    {
        path: 'pcf',
        loadChildren: () => import('./features/ogu/pcf/pcf.routes').then(m => m.routes),
        canActivate: [unidadeGuard]
    },
    {
        path: 'pcp',
        loadChildren: () => import('./features/ogu/pcp/pcp.routes').then(m => m.routes),
        canActivate: [unidadeGuard]
    },
    {
        path: 'pt',
        loadChildren: () => import('./features/ogu/plano-trabalho/plano-trabalho.routes').then(m => m.routes),
        canActivate: [unidadeGuard]
    },
    {
        path: 'reprogramacao',
        loadChildren: () => import('./features/ogu/reprogramacao/reprogramacao.routes').then(m => m.routes),
        canActivate: [unidadeGuard]
    },
    {
        path: 'servicos',
        loadChildren: () => import('./features/ogu/servicos-extra/servicos-extra.routes').then(m => m.routes),
        canActivate: [unidadeGuard]
    },
    {
        path: 'suspensiva',
        loadChildren: () => import('./features/ogu/suspensiva/suspensiva.routes').then(m => m.routes),
        canActivate: [unidadeGuard]
    },
    {
        path: 'vigencia',
        loadChildren: () => import('./features/ogu/vigencia/vigencia.routes').then(m => m.routes),
        canActivate: [unidadeGuard]
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
