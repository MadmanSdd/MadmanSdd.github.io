import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {AppListaService} from "./app-lista.service"
import { Produto } from './Produdo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  form: FormGroup = new FormGroup({
      descricao: new FormControl('',[Validators.required,Validators.minLength(2)])
  })

  produtos: Produto[] = []

  constructor(private service: AppListaService){}

  ngOnInit(): void {
      this.listaProdutos()
  }

  listaProdutos(){
    this.service.listaTodos().subscribe(listTodos => this.produtos = listTodos)
  }

  submit(){

    const produto: Produto = {...this.form.value}
    this.service
      .save(produto)
      .subscribe(saveProduto => {
        this.produtos.push(saveProduto)
        this.form.reset()
      })
  }

  delete(produto: Produto){
    this.service.deletar(produto.id).subscribe({
      next:(response) => this.listaProdutos()
    })
  }

  concluidoPedido(prod: Produto){
    this.service.pedidoConcluido(prod.id).subscribe({
      next:(response)=>{
        prod.realizado = response.realizado
        prod.momentRealizado = response.momentRealizado
        this.listaProdutos()
      }
      
    })
   
  }
}
