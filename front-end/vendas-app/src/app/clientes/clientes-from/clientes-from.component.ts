import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-from',
  templateUrl: './clientes-from.component.html',
  styleUrls: ['./clientes-from.component.css']
})
export class ClientesFromComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[] = [];

  constructor( private service: ClientesService,
    private router: Router
     ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {}

  voltarParaListagem(){
    this.router.navigate(['/clientes-lista']);
  }

  onSubmit(){
    this.service
      .salvar(this.cliente)
      .subscribe( response => {
        this.success = true;
        this.errors = [];
        this.cliente = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      }
      )
  }

}
