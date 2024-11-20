import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {
  dia = './assets/dia.png';
  imagem = this.dia;

  alterarImagem() {
    if ((this.imagem === this.dia)) {
      this.imagem = './assets/noite.png';
    } else {
      this.imagem = this.dia;
    }
  }

}
