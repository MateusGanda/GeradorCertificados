import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado';
import { Certificado } from '../../interfaces/certificado';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class CertificadoComponent implements OnInit {
  id: string | null = null;
  certificado: Certificado | undefined;

  @ViewChild('certificadoContainer') certificadoElement!: ElementRef; //pega o elemento do DOM com a referencia #certificadoContainer no HTML

  constructor(private certificadoService: CertificadoService, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.certificado = this.certificadoService.certificados.find(item => item.id === this.id);
    });
  }

  downloadCertificado() {
    if(this.certificadoElement == undefined){
      return; //verifica se o elemento existe antes de tentar usá-lo
    }

    html2canvas(this.certificadoElement.nativeElement, { scale: 2 }).then
    (canvas => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'certificado_'+ this.certificado?.nome.replaceAll(' ', '_') + '.png'; //nome do arquivo, this.certificado?.nome é o nome da pessoa que recebeu o certificado
      //replaceAll(' ', '_') substitui os espaços por underlines para evitar problemas em nomes de arquivos
      link.click();
    }
  )
  }
}
