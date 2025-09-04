import { Component } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { ItemCertificado } from "../../_components/item-certificado/item-certificado";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecondaryButton, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados {
  //constructor() {}ele é chamado quando a classe é instanciada

  //ngOnInit(): void {} ele é chamado quando o componente é inicializado e o DOM está pronto
}
