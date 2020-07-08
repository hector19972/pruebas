import { Component, OnInit } from '@angular/core';
import { CorreoService } from '../../services/correo.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/models/policy.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  forma: FormGroup;
  datos: any;
  mensaje: string;
  asunto: string;
  usuarioLogueado: Usuario = {
    uid: '',
    nombre: '',
    rol: '',
    ApPaterno: '',
    ApMaterno: '',
    correo: '',
    contraseña: '',
  };
  constructor(private correo: CorreoService, private servUsrs: UsuariosService) {
    this.forma = new FormGroup({
      'mensaje': new FormControl(),
      'asunto': new FormControl(),
    });
  }

  ngOnInit(): void {
    this.usuarioLogueado = this.servUsrs.optenerUsuario();
  }

  enviarCorreo(): void {
    console.log('EnviadoCorreo');
    this.mensaje = this.forma.get('mensaje').value;
    this.asunto = this.forma.get('asunto').value;
    let urlapi = `https://api-palanaeum.herokuapp.com/enviar/${this.mensaje}/${this.asunto}/${this.usuarioLogueado.correo}`;
    this.correo.enviarCorreo(urlapi).subscribe((data) => {
      console.log(data);
      this.datos = data;
    });
  }

}
