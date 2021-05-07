import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }
 
  ngOnInit(): void {
  }

  cadastrar (form: any){
   this.usuarioService.cadastrar(form);    
  }

  isButtonDisabled(form:any,senha:string,resenha:string){
    return (!form.valid || senha!==resenha);
  }
}
