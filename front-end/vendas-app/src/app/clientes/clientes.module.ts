import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFromComponent } from './clientes-from/clientes-from.component';
import { FormsModule } from'@angular/forms';

@NgModule({
  declarations: [
    ClientesFromComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ], exports: [
    ClientesFromComponent
  ]
})
export class ClientesModule { }
