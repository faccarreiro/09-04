import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
//importar o ReactiveFormasModule
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private clienteService : ClienteService) {

    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]

    })

  }

  ngOnInit() {
  }
  cadastrar(){
    this.clienteService.insert(this.formGroup.value)
    .subscribe(response =>{
      console.log("cadastrado com sucesso");
    }, erro => {
      console.log("erro ao cadastrar");
    })
    console.log(this.formGroup.value)
  }

}
