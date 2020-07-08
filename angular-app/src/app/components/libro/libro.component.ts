import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PolicyService } from 'src/app/services/policy.service';
import { Policy } from 'src/app/models/policy.model';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  policies: Policy[];
  idLibro: any;

  constructor(private policyService: PolicyService, private router: ActivatedRoute) {
    this.router.params.subscribe((params) => {
      this.buscarLibro(params['id']);
      console.log(params['id']);
    });
  }
  buscarLibro(id: string) {
    console.log("hola "+this.policyService.getLibro(id));
    this.idLibro = id;
    console.log('El primer id del que creo es el librocomponent '+this.idLibro+" el otro id "+id)
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
    console.log(this.policies);
  }

  ngOnInit(): void { }

}
