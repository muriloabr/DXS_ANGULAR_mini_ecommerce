import { Routes } from '@angular/router';
import { DataBindingComponent } from './aplications/data-binding/data-binding.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CorpoComponent } from './navegacao/corpo/corpo.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/loja', pathMatch: 'full'},
    { path: 'loja', component: CorpoComponent},
    { path: 'contato', component: ContatoComponent},
    { path: 'sobre', component: SobreComponent},
    { path: 'apps', component: DataBindingComponent},
    { path: 'produtos', component: ListaProdutoComponent},
    { path: 'produto-detalhe/:id', component: ListaProdutoComponent}
];
