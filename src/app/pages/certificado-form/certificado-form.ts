import { Component, ViewChild } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';
import { CertificadoService } from '../../_services/certificado';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {

  constructor(private certificadoService: CertificadoService){}
  @ViewChild('form') form!: NgForm; // Pega o formulário do template html e atribui a variável form

 certificado: Certificado = {
    id: '',
    atividades: [],
    nome: '',
    dataEmissao: ''
  };
  atividade: string = '';

  campoInvalido(control: NgModel){
    return control.invalid && control.touched;
  }

  formValido(){
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;
  }

  adicionarAtividade(){
    if(this.atividade.length === 0){
      return;
    }

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
    this.certificado.dataEmissao = this.dataAtual();
    this.certificado.id = uuidv4(); // Gera um id único para cada certificado
    this.certificadoService.adicionarCertificado(this.certificado);

    this.certificado = this.estadoInicialCertificado(); // Reseta o formulário após o envio
    this.form.resetForm(); // Reseta o formulário visualmente
  }

  dataAtual() {
    const dataAtual = new Date();//Pega a data atual
    const dia = String(dataAtual.getDate()).padStart(2, '0'); // coloca 2 dígitos no máximo no padStart e (para tipo se for do dia 1 ao 9, coloca o zero antes)
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); //Coloca o +1 porque o getMonth começa a contar do 0
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  }

  estadoInicialCertificado(): Certificado{
    return {
        id: '',
        atividades: [],
        nome: '',
        dataEmissao: ''
    }
  }
}
