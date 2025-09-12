import { Component, Input } from '@angular/core';
import { SecondaryButton } from "../secondary-button/secondary-button";
import { Router,  } from '@angular/router';


@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificado {
  @Input() nomeAluno: string = '';
  @Input() dataEmissao: string = '';
  @Input() id: string = '';

  constructor(private router:Router) {}

  redirecionaCertificado(){
    this.router.navigate(['/certificados', this.id]); //navega para a rota certificados e passa o id que está na variável id
    //this.router.navigateByUrl("/certificados/2"); //navega para a rota certificados e passa o id 2 e usamos esse pois temos uma variável que é o número
  }
}
