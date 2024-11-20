import { Routes } from '@angular/router';
import { Componente01Component } from './componente01/componente01.component';
import { Componente02Component } from './componente02/componente02.component';
import { Pagina1Component } from './paginas/pagina1/pagina1.component';
import { Pagina2Component } from './paginas/pagina2/pagina2.component';
import { PaginaErroComponent } from './paginas/pagina-erro/pagina-erro.component';
import { rotaGuard } from './autenticacao/rota.guard';

export const routes: Routes = [
    {path: 'pagina1', component: Pagina1Component},
    {path: 'pagina2', component: Pagina2Component, canActivate: [rotaGuard]},
    {path: '', redirectTo: '/pagina1', pathMatch: 'full'},
    {path: '**', component: PaginaErroComponent} ,
];
