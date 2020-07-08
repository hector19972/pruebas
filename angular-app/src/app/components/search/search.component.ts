import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BrowserStack } from 'protractor/built/driverProviders';
import { PolicyService } from 'src/app/services/policy.service';
import { Router } from '@angular/router';
import { Policy } from 'src/app/models/policy.model';
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
    { value: '0', viewValue: 'Nombre' },
    { value: '1', viewValue: 'Editorial' },
    { value: '2', viewValue: 'Autor' },
  ];
  forma: FormGroup;
  nombre: string;
  buscarPor: string;
  policies: Policy[];
  bandera: boolean;

  constructor(private policyService: PolicyService, private router: Router) {
    this.forma = new FormGroup({
      'nombre': new FormControl(),
      'buscarPor': new FormControl(),
    });

  }

  ngOnInit(): void {
    this.policyService.getPolicies().subscribe((data) => {
      this.policies = data.map((e) => {
        return {
          codigoLibro: e.payload.doc.id,
          nombre: e.payload.doc.data()['nombre'],
          autor: e.payload.doc.data()['autor'],
          editor: e.payload.doc.data()['editor'],
          url: e.payload.doc.data()['url'],
          copias: e.payload.doc.data()['copias'],
        } as Policy;
      });
    });
  }



  buscar() {
    this.nombre = this.forma.get('nombre').value as string;
    this.buscarPor = this.forma.get('buscarPor').value as string;
    console.log('Campo texto: ' + this.nombre + '  Tipo de busqueda: ' + this.buscarPor);
    switch (this.buscarPor) {
      case '0':
        console.log('Busqueda por Nombre');
        break;
      case '1':
        console.log('Busqueda por Editorial');
        break;
      case '2':
        console.log('Busqueda por Autor');
        break;
    }
    this.bandera = true;
  }
}
