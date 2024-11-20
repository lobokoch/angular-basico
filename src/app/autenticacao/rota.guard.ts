import { CanActivateFn, Router } from '@angular/router';

export const rotaGuard: CanActivateFn = (route, state) => {
  const rota = new Router;

  if (localStorage.getItem('usuario') === 'mk') {
    return true;
  } 

  rota.navigateByUrl('/pagina1');
  return false;
};
