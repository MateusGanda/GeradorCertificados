import { Component } from '@angular/core';
import { SecondaryButton } from "../secondary-button/secondary-button";
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificado {
  id: string = '6';
  constructor(private router:Router) {}

  redirecionaCertificado(){
    this.router.navigate(['/certificados', 2]); //navega para a rota certificados e passa o id 2
    //this.router.navigateByUrl("/certificados/2"); //navega para a rota certificados e passa o id 2 e usamos esse pois temos uma variável que é o número
  }
}
