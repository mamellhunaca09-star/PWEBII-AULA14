import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
     nomeProduto: string ="Curso de Angular";
     anuncio: string = `O ${this.nomeProduto} está em promoção`;
     idProduto: number = 3;
     precoProduto: number = 2.51;
     promocao: boolean = true;
     foto : string ="img/cat.png"
     dataValidade = "2021/07/13"

     testVariaveis(): void
     {
      //variaveis de string em concatenção
     // this.anuncio = 'O' + this.nomeProduto + 'Está em promoção';
     console.log ('Nome do Produto: ' , this.nomeProduto);
     console.log ('anuncio:' , this.anuncio);
     console.log ('ID: ', this.idProduto);
     console.log ('preco' , this.precoProduto);
     console.log ('promocao', this.promocao);

     // escopo de variáveis dentro do código

    

        



 }
}
