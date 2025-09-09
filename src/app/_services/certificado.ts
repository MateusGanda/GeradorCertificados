import { Injectable } from '@angular/core';
import { Certificado } from '../interfaces/certificado';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  certificados: Certificado[] = [];

  constructor(){}

  adicionarCertificado(certificado: Certificado){
    this.certificados.push({ ...certificado }); //Resolve o problema de instância do objeto no array de certificados
    localStorage.setItem('certificados', JSON.stringify(this.certificados)); // Salva os certificados no localStorage do navegador
  }
}
