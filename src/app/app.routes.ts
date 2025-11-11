import { Routes } from '@angular/router';
import { CertificadoForm } from './_pages/certificado-form/certificado-form';
import { Certificado } from './_pages/certificado/certificado';
import { Certificados } from './_pages/certificados/certificados';

export const routes: Routes = [
  {
    path: '',
    component: Certificados,
  },
  {
    path: 'certificados/novo',
    component: CertificadoForm,
  },
  {
    path: 'certificados/:id',
    component: Certificado,
  },
];
