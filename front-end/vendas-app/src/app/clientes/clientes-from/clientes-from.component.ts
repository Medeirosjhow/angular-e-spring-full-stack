import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-from',
  templateUrl: './clientes-from.component.html',
  styleUrls: ['./clientes-from.component.css']
})
export class ClientesFromComponent implements OnInit {

  cliente : Cliente | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
