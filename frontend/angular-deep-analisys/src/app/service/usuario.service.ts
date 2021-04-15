import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // Simulação do banco de dados usuario
  usuarios: any[] = [
    {
      'id': 1,
      'username': 'ADM',
      'pais': 'Brasil',
      'estado': 'MG',
      'cidade': 'Pouso Alegre',
      'email' : 'julia@',
      'senha' : '123'
    }
  ]

  constructor() { }

  getUsuarios(): any[] {
    return this.usuarios;
  }

  addUsuario(usuario: any) {
    this.usuarios.push(usuario);
  }

}
