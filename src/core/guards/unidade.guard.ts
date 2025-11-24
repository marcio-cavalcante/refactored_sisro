// src/app/core/guards/unidade.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UnidadeService } from '../services/unidade.service';

export const unidadeGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const unidadeService = inject(UnidadeService);

  const unidade = unidadeService.unidade();
  
  if (!unidade) {
    // Se não tem unidade, vai para a página de seleção
    router.navigate(['/unidade']);
    return false;
  }

  // Se tem unidade, permite seguir para a rota (ex: página principal /sistema)
  return true;
};
