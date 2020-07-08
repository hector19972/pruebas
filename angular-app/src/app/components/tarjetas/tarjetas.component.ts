import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() busqueda: string;
  @Input() texto: string;
  bus0 = '0';
  bus1 = '1';
  bus2 = '2';

  constructor(private router: Router) { }

  ngOnInit(): void { }
  verLibro(item: string) {
    let libroId;
    libroId = item;
    console.log(item);
    // console.log(this.router);
    this.router.navigate(['/libro', libroId]);
  }
}
