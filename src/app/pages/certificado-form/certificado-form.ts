import { Component } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {

 certificado: Certificado = {
    atividades: [],
    nome: ''
  };
  atividade: string = '';

  campoInvalido(control: NgModel){
    return control.invalid && control.touched;
  }

  formValido(){
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;
  }

  adicionarAtividade(){
    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
  }

  excluirAtividade(index: number){
    this.certificado.atividades.splice(index, 1); // Ele remove 1 item a partir do index
  }

  submit() {
    if(!this.formValido()) { // Se o formulário não for válido, ele retorna
      return;
    }
    console.log(this.certificado);
  }
}
