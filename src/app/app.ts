import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { CommonModule } from '@angular/common';
import { BaseUi } from "./_components/base-ui/base-ui";
import { CertificadoService } from './_services/certificado';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, BaseUi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'gerador-certificado';
  exibeNavbar: boolean = true; //Define se a navbar vai ser ou não inicializada

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados'); // Pega os certificados do localStorage do navegador
    this.certificadoService.certificados = certificados ? JSON.parse(certificados) : []; // Carrega os certificados do localStorage do navegador ou um array vazio se não houver certificados
    console.log(this.certificadoService.certificados);
  }
}
