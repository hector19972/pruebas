import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BrowserStack } from 'protractor/built/driverProviders';
interface Tag {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  tags: Tag[] = [
    { value: '0', viewValue: 'Autor' },
    { value: '1', viewValue: 'Editorial' },
    { value: '2', viewValue: 'Nombre' },
  ];
  forma: FormGroup;
  nombre: string;
  buscarPor: string;

  constructor() {
    this.forma = new FormGroup({
      'nombre': new FormControl(),
      'buscarPor': new FormControl(),
    });

  }

  ngOnInit(): void { }



  buscar() {
    this.nombre = this.forma.get('nombre').value as string;
    this.buscarPor = this.forma.get('buscarPor').value as string;
    console.log('Campo texto: ' + this.nombre + '  Tipo de busqueda: ' + this.buscarPor);
    switch (this.buscarPor) {
      case '0':
        console.log('Busqueda por Autor');
        break;
      case '1':
        console.log('Busqueda por Editorial');
        break;
      case '2':
        console.log('Busqueda por Nombre');
        break;
    }
  }
}
