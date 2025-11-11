import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { CertificadoService } from '../../_services/certificado';
import { CertificadoInter } from '../../Interfaces/certificado';

@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButton, SecondaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css',
})
export class CertificadoForm {
  constructor(private certificadoService: CertificadoService, private router: Router) {}
  @ViewChild('form') form!: NgForm;

  nome: string = '';
  atividade: string = '';
  atividades: string[] = [];

  certificado: CertificadoInter | undefined;

  campoValido(control: NgModel) {
    return control.invalid && control.touched;
  }

  formValido() {
    if (!this.atividades || !this.nome) {
      return false;
    }
    return this.atividades.length > 0 && this.nome.length > 0;
  }

  adicionarAtividade() {
    if (this.atividade != '') {
      this.atividades.push(this.atividade);
      this.atividade = '';
    }
  }

  removerAtividade(index: number) {
    this.atividades.splice(index, 1);
  }

  submitCertificado() {
    if (this.formValido()) {
      this.certificado = {
        id: uuidv4(),
        nome: this.nome,
        atvidades: this.atividades,
        dataEmissao: this.dataAtual(),
      };
      this.certificadoService.adicionarCertificado(this.certificado);
      this.router.navigate(['certificados', this.certificado.id]);

      // this.blankAll();
      // this.form.resetForm();
    }
  }

  dataAtual() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  }

  blankAll() {
    this.nome = '';
    this.atividade = '';
    this.atividades = [];
  }
}
