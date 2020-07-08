import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/policy.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  forma: FormGroup;
  bandera: boolean;
  auxUsuario: Usuario = {
    uid: '',
    nombre: '',
    ApPaterno: '',
    ApMaterno: '',
    correo: '',
    contraseña: '',
    rol: ''
  };

  constructor(private usuarioNuevo: UsuariosService, private router: Router, private fb: FormBuilder) {
    this.forma = new FormGroup({
      'nombre': new FormControl(),
      'apPaterno': new FormControl(),
      'apMaterno': new FormControl(),
      'correo': new FormControl(),
      'contraseña': new FormControl(),
      'contraseñaR': new FormControl(),
      'terminos': new FormControl(),
    });
  }

  ngOnInit(): void {

  }
  cambioss(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.bandera = this.checarSiSonIguales();
  }

  create(usuario: Usuario) {
    this.usuarioNuevo.RegistrarUsuario(usuario);
    this.router.navigate(['home']);
  }
  registrarUsuario() {
    console.log('Formulario enviado');
    this.auxUsuario.nombre = this.forma.get('nombre').value as string;
    this.auxUsuario.ApPaterno = this.forma.get('apPaterno').value as string;
    this.auxUsuario.ApMaterno = this.forma.get('apMaterno').value as string;
    this.auxUsuario.correo = this.forma.get('correo').value as string;
    this.auxUsuario.contraseña = this.forma.get('contraseña').value as string;
    this.forma.setValue({ nombre: '', apPaterno: '', apMaterno: '', correo: '', contraseña: '', contraseñaR: '' });
    this.create(this.auxUsuario);
  }

  checarSiSonIguales(): boolean {
    if (this.forma.get('contraseña') === this.forma.get('contraseñaR')) {
      return false;

    } else {
      return true;
    }
  }

}
