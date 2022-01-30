import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-clientes-from',
  templateUrl: './clientes-from.component.html',
  styleUrls: ['./clientes-from.component.css']
})
export class ClientesFromComponent implements OnInit {

  cliente: Cliente;

  constructor( private service: ClientesService ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.salvar(this.cliente).subscribe( function (response) {
        console.log(response);
      })
  }

}
