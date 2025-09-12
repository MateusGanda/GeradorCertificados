import { Injectable } from '@angular/core';
import { Certificado } from '../interfaces/certificado';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  certificados: Certificado[] = [];

  constructor(){}

  adicionarCertificado(certificado: Certificado){
    this.certificados.unshift({ ...certificado }); // Adiciona o certificado no início do array
    localStorage.setItem('certificados', JSON.stringify(this.certificados)); // Salva os certificados no localStorage do navegador
  }
}
