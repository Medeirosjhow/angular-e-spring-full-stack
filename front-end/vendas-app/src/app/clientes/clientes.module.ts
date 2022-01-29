import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFromComponent } from './clientes-from/clientes-from.component';


@NgModule({
  declarations: [
    ClientesFromComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ], exports: [
    ClientesFromComponent
  ]
})
export class ClientesModule { }
