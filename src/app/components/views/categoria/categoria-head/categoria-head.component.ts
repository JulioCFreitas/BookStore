import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-head',
  templateUrl: './categoria-head.component.html',
  styleUrls: ['./categoria-head.component.css']
})
export class CategoriaHeadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];

}
