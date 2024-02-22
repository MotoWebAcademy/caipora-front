
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  termoPesquisa: string = '';
  resultados: any[] = [];

  constructor(private router: Router) {}

  pesquisar() {
  
    this.resultados = [
      { nome: 'Resultado 1' },
      { nome: 'Resultado 2' },
      { nome: 'Resultado 3' }
    ];
  }
}