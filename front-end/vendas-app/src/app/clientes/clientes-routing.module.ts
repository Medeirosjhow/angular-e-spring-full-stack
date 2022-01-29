import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesFromComponent } from './clientes-from/clientes-from.component'
const routes: Routes = [
  { path: 'clientes-form', component: ClientesFromComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
