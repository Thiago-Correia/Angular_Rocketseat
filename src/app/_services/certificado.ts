import { Injectable } from '@angular/core';
import { CertificadoInter } from '../Interfaces/certificado';

@Injectable({
  providedIn: 'root',
})
export class CertificadoService {
  certificados: CertificadoInter[] = [];

  adicionarCertificado(certificado: CertificadoInter) {
    this.certificados.push(certificado);
    localStorage.setItem('certificados', JSON.stringify(this.certificados));
  }
}
