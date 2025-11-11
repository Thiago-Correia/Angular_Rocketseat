import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SecondaryButton } from '../secondary-button/secondary-button';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css',
})
export class ItemCertificado {
  @Input() id: string = '0';
  @Input() nome: string = '';
  @Input() data: string = '';
}
