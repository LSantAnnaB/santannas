import { Component } from '@angular/core';

@Component({
  selector: 'app-redes-sociais',
  templateUrl: './redes-sociais.component.html',
  styleUrls: ['./redes-sociais.component.css']
})
export class RedesSociaisComponent {

  linkedin: string = 'https://www.linkedin.com/in/l-sant-anna-b-contato-in/ ';
  gitHub: string = 'https://github.com/LSantAnnaB?tab=repositories';

  phone = '+5521964032474';
  msg = 'Olá%20quero%20elevar%20meu%20negócio%20para%20o%20PRÓXIMO%20NÍVEL%20!';
  whatsApp = `https://api.whatsapp.com/send?phone=${this.phone}&text=${this.msg}`;

  email: string = 'l.sant.anna.contato@outlook.com';
  subject: string = 'Quero elevar meu negócio ao proximo nível!';
  body: string = 'Por favor, antes da mensagem preencha o nome e contato\nNome:  \nContato:';

  emailLink: string = `mailto:${this.email}?subject=${encodeURIComponent(
    this.subject
  )}&body=${encodeURIComponent(this.body)}`;
}
