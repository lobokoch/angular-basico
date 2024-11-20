import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/pessoa';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {

  btnCadastrar = true;
  vetor: Pessoa[] = [];
  indice: number = -1;

  formulario = new FormGroup<{
    nome: FormControl<string | null>;
    idade: FormControl<number | null>;
    cidade: FormControl<string | null>;
  }>({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  cadastrar() {
    this.vetor.push(this.formulario.value as unknown as Pessoa);
    this.formulario.reset();
    console.table(this.vetor);
  }

  selecionar(indice: number) {
    this.indice = indice;
    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      idade: this?.vetor[indice]?.idade,
      cidade: this.vetor[indice].cidade
    });

    this.btnCadastrar = false;
  }

  alterar() {
    this.vetor[this.indice] = this.formulario.value as unknown as Pessoa;
    this.formulario.reset();
    this.btnCadastrar = true;
  }

  remover() {
    this.vetor.splice(this.indice, 1);
    this.formulario.reset();
    this.btnCadastrar = true;
  }

  cancelar() {
    this.formulario.reset();
    this.btnCadastrar = true;
  }

}
