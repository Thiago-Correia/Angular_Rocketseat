import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemCertificado } from '../../_components/item-certificado/item-certificado';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { CertificadoService } from '../../_services/certificado';
import { CertificadoInter } from '../../Interfaces/certificado';

@Component({
  selector: 'app-certificados',
  imports: [SecondaryButton, ItemCertificado],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css',
})
export class Certificados implements OnInit {
  certificados: CertificadoInter[] = [];

  constructor(private router: Router, private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    this.certificados = this.certificadoService.certificados.reverse();
  }

  redirecionaCertificado() {
    this.router.navigateByUrl('/certificados/novo');
  }
}
