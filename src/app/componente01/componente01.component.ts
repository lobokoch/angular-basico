import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css'
})
export class Componente01Component implements OnInit {
  constructor(private route: ActivatedRoute) { }
  
  nome: string | null = 'João';
  idade: number = 20;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nome = params.get('nome');      
    });
  }

}
