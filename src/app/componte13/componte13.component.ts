import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componte13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './componte13.component.html',
  styleUrl: './componte13.component.css'
})
export class Componte13Component {
  vetor: Produto[] = [];

  btnCadastrar: boolean = true;

  formulario = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    valor: new FormControl(null)
  });

  constructor(private servico: ProdutoService) {}

  ngOnInit() {
    this.selecionar();
  }

  selecionar() {
    this.servico.selecionar().subscribe((retorno) => this.vetor = retorno);
  }

  cadastrar() {
    this.servico.cadastrar(this.formulario.value as Produto)
    .subscribe(retorno => {
     this.vetor.push(retorno);
     //this.selecionar();
      this.formulario.reset();
    })
  }

  selecionarProduto(indice: number) {
    this.formulario.setValue({
      id: this.vetor[indice].id as unknown as any,
      nome: this.vetor[indice].nome as unknown as any,
      valor: this.vetor[indice].valor as unknown as any,
    });
    this.btnCadastrar = false;
  }

  alterar() {
    this.servico.alterar(this.formulario.value as Produto)
    .subscribe(retorno => {
      let indiceAlterado = this.vetor.findIndex(obj => obj.id === retorno.id);
      this.vetor[indiceAlterado] = retorno;
      this.formulario.reset();

      this.btnCadastrar = true;
    });
  }

  remover() {
    const id = this.formulario.value.id || '';
    this.servico.remover(id).subscribe(() => {
      const indice = this.vetor.findIndex(obj => obj.id === id);
      this.vetor.splice(indice, 1);
      this.formulario.reset();
      this.btnCadastrar = true;
    });
  }
  
}
