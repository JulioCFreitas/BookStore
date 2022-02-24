import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-head-all',
  templateUrl: './livro-head-all.component.html',
  styleUrls: ['./livro-head-all.component.css']
})
export class LivroHeadAllComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'livros', 'acoes'];

  constructor() { }

  ngOnInit(): void {
  }

}
