import { Component } from '@angular/core';
import { validate } from '@angular/forms/signals';

@Component({
  selector: 'app-listar-produtos',
  standalone: false,
  templateUrl: './listar-produtos.html',
  styleUrl: './listar-produtos.css',
})
export class ListarProdutos
{
   listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
   listaNumeros: number[] = [15, 15.18, 100];

   objetoModelo = 
   {
     nome: 'NICK',
     idade: 15,
     altura: 1.63,
     graduado: true

   };

    listarProdutos: any[] = 
    [
         {nome:'Curso do Angular', precoProduto: 36.33, validade: '2020-07-07', id: 1},
         {nome:'Curso do Ionic', precoProduto: 45, validade: '2025-05-05', id: 2, promocao: true },
        { id: 3, nome:'Curso de Ionic Avançado', precoProduto: 33, validade: '2023-06-06'},
      

    ];

     constructor ()
     {
         for (let item of this.listaStrings)
         {
           console.log(item);
         }
         for (const item of this.listaNumeros)
         {
          console.log(item);
         }
         console.log(this.objetoModelo);
         console.log(this.objetoModelo.nome);
     }
}
